import { useEffect, useState } from "react";
import supabase from "../../../supabaseClient.js";

import { PostgrestError, PostgrestSingleResponse } from "@supabase/supabase-js";
import { PostgrestResponseSuccess } from "@supabase/postgrest-js";

function DataFetcher(tableToFetch: string) {
    const errorQuestionsList: Array<IQuestion> = [
        {
            id: 0,
            answer: "You should not be seing this, an error must have occured!",
            like: 0,
            dislike: 0,
            title: "There are no questions to display",
            popularity_percentage: 0,
        },
    ];
    const defaultQuestionsList: Array<IQuestion> = [
        {
            id: 0,
            answer: "",
            like: 0,
            dislike: 0,
            title: "",
            popularity_percentage: 0,
        },
    ];
    const [fetchError, setFetchError] = useState(errorQuestionsList);
    const [fetchedArticles, setFetchedArticles] =
        useState(defaultQuestionsList);

    useEffect(() => {
        const fetchArticles = async () => {
            const { data, error }: { data: any; error: any } = await supabase
                .from(tableToFetch)
                .select();
            if (error) {
                setFetchError(errorQuestionsList);
                setFetchedArticles(defaultQuestionsList);
            }
            if (data) {
                setFetchedArticles(data);
                setFetchError(errorQuestionsList);
            }
        };
        fetchArticles();
    }, [tableToFetch]);
    return fetchedArticles ? fetchedArticles : fetchError;
}

function RateButtons({ question, page }: { question: IQuestion; page: IPage }) {
    return (
        <div className="RateElement">
            <p>Was this article helpful?</p>
            <button
                onClick={async () => {
                    let rpcCall: "increment_faq" | "increment_forum" =
                        "increment_forum"; // this is just a placeholder, rpc doesn't let a template literal through
                    page.pageName = "faq"
                        ? (rpcCall = "increment_faq")
                        : "increment_forum";
                    const { error } = await supabase.rpc(
                        rpcCall, // function increment_faq or increment_forum
                        {
                            row_id: question.id,
                        }
                    );
                }}
            >
                👍
            </button>
            <button
                onClick={async () => {
                    let rpcCall: "decrement_faq" | "decrement_forum" =
                        "decrement_forum"; // this is just a placeholder, rpc doesn't let a template literal through
                    page.pageName = "faq"
                        ? (rpcCall = "decrement_faq")
                        : "decrement_forum";
                    const { error } = await supabase.rpc(
                        rpcCall, // function decrement_faq or decrement_forum
                        {
                            row_id: question.id,
                        }
                    );
                }}
            >
                👎
            </button>
        </div>
    );
}
function Question({ question, page }: { question: IQuestion; page: IPage }) {
    const [answerVisibility, setAnswerVisibility] = useState(false);
    return (
        <div key={question.id}>
            <button
                onClick={() => {
                    answerVisibility // switches the lights on or off according to their curr state
                        ? setAnswerVisibility(false)
                        : setAnswerVisibility(true);
                }}
            >
                {question.title}
            </button>
            {answerVisibility && (
                <div>
                    <p className="AnswerParagraph">{question.answer}</p>
                    <RateButtons question={question} page={page} />
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
