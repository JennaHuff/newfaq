import { useEffect, useState } from "react";
import supabase from "../supabaseClient.js";

function DataFetcher(tableToFetch: string) {
    const defaultQuestionsList: IQuestion[] = [
        {
            id: 0,
            answer: "You should not be seing this, an error must have occured!",
            like: 0,
            dislike: 0,
            title: "There are no questions to display",
            popularity_percentage: 0,
        },
    ];
    const [fetchError, setFetchError] = useState(defaultQuestionsList);
    const [fetchedArticles, setFetchedArticles] =
        useState(defaultQuestionsList);

    useEffect(() => {
        const fetchArticles = async () => {
            const { data, error } = await supabase.from(tableToFetch).select();
            if (error) {
                setFetchError(defaultQuestionsList);
                setFetchedArticles([]);
            }
            if (data) {
                setFetchedArticles(data);
                setFetchError(defaultQuestionsList);
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
                    const { error } = await supabase.rpc(
                        `increment_${page.pageName}`, // function increment_faq or increment_forum
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
                    const { error } = await supabase.rpc(
                        `decrement_${page.pageName}`, // function decrement_faq or decrement_forum
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

    console.log(questionsList);
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
