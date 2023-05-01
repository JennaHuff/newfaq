import { useState } from "react";
import supabase from "../../../supabaseClient";

// allows users to submit questions, adds the question to the database

export function AskQuestion() {
    const [question, setQueston] = useState("");

    return (
        <input
            placeholder="Ask a new question (press Enter to submit)"
            type="text"
            onChange={(e) => {
                setQueston(e.target.value);
            }}
            onKeyUp={(e) =>
                e.key === "Enter" && question
                    ? (insertQuestion(question), console.log("success"))
                    : console.log("failed")
            }
        />
    );
}
async function insertQuestion(question: string) {
    const { data, error } = await supabase
        .from("forum")
        .insert([{ title: question }], {
            defaultToNull: true,
        });
}
