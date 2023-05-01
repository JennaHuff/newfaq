import { useState } from "react";
import DisplayQuestionsList from "../DatabaseInteractions/DisplayQuestionsList";
import { AskQuestion } from "../DatabaseInteractions/AskQuestion";

export default function Forum({ page }: { page: IPage }) {
    return (
        <div>
            <AskQuestion />
            <DisplayQuestionsList pageState={page} />
            {/*  it really only needs page.value */}
        </div>
    );
}
