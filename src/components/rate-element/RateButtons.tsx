import { useSession } from "../auth/SessionContext";
import supabase from "../../services/supabase/supabaseClient";

async function upsert(question_id: number, vote: boolean) {
    const { data, error } = await supabase.from("votes").upsert([
        {
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
            <button onClick={() => upsert(question_id, true)}>👍</button>
            <button onClick={() => upsert(question_id, false)}>👎</button>
        </div>
    );
}
