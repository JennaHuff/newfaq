import { useState } from "react";
import "../../Faq.css";
import { useLoaderData } from "react-router-dom";
import { RateButtons } from "../../components/rate-element/RateButtons";
import { useSession } from "../../components/auth/SessionContext";
import supabase from "../../services/supabase/supabaseClient";

function Question({ question }: { question: IQuestion }) {
    const { session } = useSession();
    const [answerVisibility, setAnswerVisibility] = useState(false);

    return (
        <>
            <button
                onClick={() => {
                    setAnswerVisibility(!answerVisibility);
                }}
            >
                {question.title}
            </button>

            {answerVisibility && (
                <div className="question-card">
                    <p className="answer-paragraph">{question.answer}</p>
                    {session ? (
                        <RateButtons question={question} />
                    ) : (
                        <p>{`👍 ${question.upvotes}      👎 ${question.dislike}`}</p>
                    )}
                </div>
            )}
        </>
    );
}

export default function Faq() {
    const { data }: any = useLoaderData();
    const [questions, setQuestions]: any = useState(data);

    const channel = supabase
        .channel("table_db_changes")
        .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "faq" },
            (payload) => {
                const newQuestions = questions.map((question) =>
                    question.id !== payload.old.id ? question : payload.new
                );
                setQuestions(newQuestions);
            }
        )
        .subscribe();

    return (
        <div className="faq-flex">
            <h1>Frequently asked questions</h1>
            {questions.map((question: IQuestion) => (
                <Question key={question.id} question={question} />
            ))}
        </div>
    );
}
