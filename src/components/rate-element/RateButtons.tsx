import { useSession } from "../auth/SessionContext";
import supabase from "../../services/supabase/supabaseClient";
import "../../Faq.css";

async function upsert(question_id: number, vote: boolean) {
    const { data, error } = await supabase.from("votes").upsert([
        {
            question_id: question_id,
            vote: vote,
        },
    ]);
}

export function RateButtons({ question }: { question: IQuestion }) {
    const { session, user } = useSession();

    return (
        <div className="vote-component">
            <p>Was this article helpful?</p>
            <button onClick={() => upsert(question.id, true)}>
                👍 {question.upvotes}
            </button>
            <button onClick={() => upsert(question.id, false)}>
                👎 {question.dislike}
            </button>
        </div>
    );
}
