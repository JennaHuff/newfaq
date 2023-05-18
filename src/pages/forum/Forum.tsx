import { useState } from "react";
import "./Forum.css";
import { RateButtons } from "../../components/rate-element/RateButtons";

interface answerToThread {
    text: string;
    likes: number;
    dislikes: number;
    answers: answerToThread[];
}

let testPost1: answerToThread = {
    text: "shadou? ",
    likes: 1,
    dislikes: 3,
    answers: [],
};

for (let i = 1; i <= 5; i++) {
    const answer: answerToThread = {
        text: `Answer ${i}`,
        likes: 0,
        dislikes: 0,
        answers: [],
    };

    // Generate three answers for each answer
    for (let j = 1; j <= 3; j++) {
        const nestedAnswer: answerToThread = {
            text: `Nested Answer ${i}.${j}`,
            likes: 0,
            dislikes: 0,
            answers: [],
        };

        answer.answers.push(nestedAnswer);
    }

    testPost1.answers.push(answer);
}

function PostReply({ thread }) {
    // accepts a thread, displays an input box, on submit pushes the input as a thread to the original thread's answers array
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                thread.answers = [
                    ...thread.answers,
                    {
                        text: e.target.enteredAnswer.value,
                        likes: 0,
                        dislikes: 0,
                        answers: [],
                    },
                ];
            }}
        >
            <input type="text" name="enteredAnswer" />
            <input type="submit"></input>
        </form>
    );
}

function DisplayThread({ thread }: { thread: answerToThread }) {
    const [threadVisibility, setThreadVisibility] = useState(false);
    return (
        <div
            style={{
                borderLeft: "2px solid black",
                padding: "50px",
            }}
        >
            <button onClick={() => setThreadVisibility((s) => !s)}>
                {thread.text}
            </button>
            {`+${thread.likes} -${thread.dislikes}`}

            {threadVisibility && (
                <div>
                    <RateButtons />
                    <PostReply thread={thread} />
                    {thread.answers.map((answer) => (
                        <DisplayThread thread={answer} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Forum() {
    return <DisplayThread thread={testPost1} />;
}