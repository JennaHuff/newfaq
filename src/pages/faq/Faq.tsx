import { useEffect, useState } from "react";
import "../../Faq.css";
import { useLoaderData } from "react-router-dom";
import { RateButtons } from "../../components/rate-element/RateButtons";
import { useSession } from "../../components/auth/SessionContext";
import supabase from "../../services/supabase/supabaseClient";

function Question({ question }: { question: IQuestion }) {
    const [answerVisibility, setAnswerVisibility] = useState(false);
    const [vote, setVote] = useState<any>();
    const { user } = useSession();

    async function getQuestion(id) {
        try {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            const { data, error } = await supabase
                .from("votes")
                .select("*")
                .filter("user_id", "eq", user.id)
                .filter("question_id", "eq", question.id)
                .single();
            setVote(data);
        } catch (error: any) {
            alert(error.message);
        }
    }

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
                    <RateButtons question={question} vote={vote} />
                </div>
            )}
        </>
    );
}

export default function Faq() {
    const { data }: any = useLoaderData();
    // const { user } = useSession();
    // const {data, error} = await supabase
    //     .from("faq")
    //     .select(`*, votes(id)`)
    //     .filter("user_id", "eq", user.id)
    //     .order("id", { ascending: true });
    console.log({ data });
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
