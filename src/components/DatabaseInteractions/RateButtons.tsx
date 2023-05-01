import supabase from "../../../supabaseClient.js";

export function RateButtons({
    question,
    page,
}: {
    question: IQuestion;
    page: IPage;
}) {
    return (
        <div className="RateElement">
            <p>Was this article helpful?</p>
            <button
                onClick={async () => {
                    type functionOptions = "increment_faq" | "increment_forum";
                    const RPCfunctionToCall: functionOptions = `increment_${page.pageName}`;
                    const { error } = await supabase.rpc(RPCfunctionToCall, {
                        row_id: question.id,
                    });
                }}
            >
                👍
            </button>
            <button
                onClick={async () => {
                    type functionOptions = "decrement_faq" | "decrement_forum";
                    const RPCfunctionToCall: functionOptions = `decrement_${page.pageName}`;
                    const { error } = await supabase.rpc(RPCfunctionToCall, {
                        row_id: question.id,
                    });
                }}
            >
                👎
            </button>
        </div>
    );
}
