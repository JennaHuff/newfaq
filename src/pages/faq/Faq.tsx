import { useState } from "react";
import "./Faq.css";

import { Link, useLoaderData } from "react-router-dom";
import { RateButtons } from "../../components/rate-element/RateButtons";

function Question({ question }: { question: IQuestion }) {
    // pretty sure this all could be a list of navlinks, with the answer and <hr> display: none
    // might help accessibility
    const [answerVisibility, setAnswerVisibility] = useState(false);

    return (
        <div className="question">
            {/* below is the lightswitch */}
            <Link to={`${question.id}`}>
                <button
                    onClick={() => {
                        answerVisibility
                            ? setAnswerVisibility(false)
                            : setAnswerVisibility(true);
                    }}
                >
                    {question.title}
                </button>
            </Link>
            {/* below is the lightbulb */}
            {answerVisibility && (
                <div>
                    <p className="AnswerParagraph">{question.answer}</p>
                    <RateButtons />
                    <hr className="LinesSeparatingAnswers" />
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
        <div className="Faq">
            <h1>Frequently asked questions</h1>
            {data.map((question: IQuestion) => (
                <Question key={question.id} question={question} />
            ))}
        </div>
    );
}
