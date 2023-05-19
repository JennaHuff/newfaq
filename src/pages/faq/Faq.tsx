import { useState } from "react";
import "./Faq.css";
import { useLoaderData } from "react-router-dom";
import { RateButtons } from "../../components/rate-element/RateButtons";
import { useSession } from "../../components/auth/SessionContext";

function Question({ question }: { question: IQuestion }) {
    const { session } = useSession();
    const [answerVisibility, setAnswerVisibility] = useState(false);

    return (
        <div className="question">
            <button
                onClick={() => {
                    setAnswerVisibility(!answerVisibility);
                }}
            >
                {question.title}
            </button>

            {answerVisibility && (
                <div>
                    <p className="answer-paragraph">{question.answer}</p>
                    {session && <RateButtons question_id={question.id} />}
                    <hr className="lines-separating-answers" />
                </div>
            )}
        </div>
    );
}

export default function Faq() {
    const { data }: any = useLoaderData();
    return (
        <div className="faq">
            <h1>Frequently asked questions</h1>
            {data.map((question: IQuestion) => (
                <Question key={question.id} question={question} />
            ))}
        </div>
    );
}
