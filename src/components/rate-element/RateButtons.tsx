import { useState } from "react";
import "./RateButtons.css";

// This function sets a "vote" state
// this vote should be paired with a question's id, and added to a user's votes database
// this database keeps tracks of every questions the user has voted for, and the user's rating
// every time a vote changes it can update the question's rating in the main database
// this should ensure a user can only vote once

export function RateButtons() {
    const [vote, setVote] = useState(0); // === -1 for dislike, 0 for null, 1 for like

    return (
        <div>
            <p>Was this article helpful?</p>
            <button
                className={vote === 1 ? "activeVote" : ""}
                onClick={() => (vote === 1 ? setVote(0) : setVote(1))}
            >
                👍
            </button>
            <button
                className={vote === -1 ? "activeVote" : ""}
                onClick={() => (vote === -1 ? setVote(0) : setVote(-1))}
            >
                👎
            </button>
        </div>
    );
}
