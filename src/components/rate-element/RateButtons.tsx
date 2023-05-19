import { useSession } from "../auth/SessionContext";
import "./RateButtons.css";
import supabase from "../../services/supabase/supabaseClient";

async function insert(user_id: string, question_id: number, vote: boolean) {
    console.log(user_id);
    const { data, error } = await supabase.from("votes").insert([
        {
            user_id: user_id,
            question_id: question_id,
            vote: vote,
        },
    ]);
}

export function RateButtons({ question_id }: { question_id: number }) {
    const { session, user } = useSession();

    return (
        <div>
            <p>Was this article helpful?</p>
            <button onClick={() => insert(user.user_id!, question_id, true)}>
                👍
            </button>
            <button onClick={() => insert(user.user_id!, question_id, false)}>
                👎
            </button>
        </div>
    );
}
