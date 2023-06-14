import { useSession } from "../auth/SessionContext";
import supabase from "../../services/supabase/supabaseClient";
import "../../Faq.css";

async function signInWithGithub() {
    await supabase.auth.signInWithOAuth({
        provider: "github",
    });
}

async function upsert(question_id: number, vote: boolean) {
    const { data, error } = await supabase.from("votes").upsert([
        {
            question_id: question_id,
            vote: vote,
        },
    ]);
}

export function RateButtons({
    question,
    vote,
}: {
    question: IQuestion;
    vote: any;
}) {
    const { session, user } = useSession();

    console.log({ vote });
    return (
        <div className="vote-component">
            <p>Was this article helpful?</p>
            <button
                onClick={() =>
                    session ? upsert(question.id, true) : signInWithGithub()
                }
            >
                👍 {question.upvotes}
                {vote?.vote === true && "CHECK"}
            </button>
            <button
                onClick={() =>
                    session ? upsert(question.id, false) : signInWithGithub()
                }
            >
                👎 {question.dislike}
                {vote?.vote === false && "CHECK"}
            </button>
        </div>
    );
}
