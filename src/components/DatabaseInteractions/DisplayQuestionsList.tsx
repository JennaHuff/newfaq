import { useState } from "react";
import { DataFetcher } from "./FetchData.js";
import { RateButtons } from "./RateButtons.js";

// calls FetchData to get an array of questions,
// returns a map of all rows (IQuestion) displayed as individual questions

function Question({ question, page }: { question: IQuestion; page: IPage }) {
    const [answerVisibility, setAnswerVisibility] = useState(false);
    return (
        <div key={question.id}>
            <button
                onClick={() => {
                    // switches the lights on or off according to their curr state
                    answerVisibility
                        ? setAnswerVisibility(false)
                        : setAnswerVisibility(true);
                }}
            >
                {question.title}
            </button>
            {answerVisibility && (
                <div>
                    {page.pageName === "forum" && <p>Answer</p>}
                    {page.pageName === "faq" && (
                        <div>
                            <p className="AnswerParagraph">{question.answer}</p>
                            <RateButtons question={question} page={page} />
                        </div>
                    )}

                    <hr className="LinesSeparatingAnswers" />
                </div>
            )}
        </div>
    );
}

export default function DisplayQuestionsList({
    pageState,
}: {
    pageState: IPage;
}) {
    const questionsList: IQuestion[] = DataFetcher(pageState.pageName);

    return (
        <div className="QuestionsList">
            {questionsList.map((question) => {
                return (
                    <Question
                        key={question.id}
                        question={question}
                        page={pageState}
                    />
                );
            })}
        </div>
    );
}
