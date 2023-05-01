import { useEffect, useState } from "react";
import supabase from "../../../supabaseClient.js";

export function DataFetcher(tableToFetch: string) {
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
