import { useContext, useState } from "react";
import "./Faq.css";

import { Link, useLoaderData } from "react-router-dom";
import { RateButtons } from "../../components/rate-element/RateButtons";
import { useSession } from "../../components/auth/SessionContext";

function Question({ question }: { question: IQuestion }) {
    // pretty sure this all could be a list of navlinks, with the answer and <hr> display: none
    // might help accessibility
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
                    {session && <RateButtons />}
                    <hr className="lines-separating-answers" />
                </div>
            )}
        </div>
    );
}

export default function Faq() {
    // from src/components/DatabaseInteractions/Loaders.tsx, data corresponds to the faq table
    // for every row in data, render a <Question />
    const { data } = useLoaderData();
    return (
        <div className="faq">
            <h1>Frequently asked questions</h1>
            {data.map((question: IQuestion) => (
                <Question key={question.id} question={question} />
            ))}
        </div>
    );
}
