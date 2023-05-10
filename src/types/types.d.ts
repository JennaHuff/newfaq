interface IPage {
    pageName: "faq" | "forum"; //  Lowercase<string>; ex: "faq"
    pageTitle: string; //ex: "Faq"
    key: number;
}

interface IQuestion {
    id: number;
    title: string;
    answer: string;
    like: number;
    dislike: number;
    popularity_percentage: number;
}

interface IUserQuestion {
    id: number;
    title: string;
    answer: Array<IReply>; // [{}, {}, {}]
    like: number;
    dislike: number;
    popularity_percentage: number;
}

interface IReply {
    // IQuestion without a title
    id: number;
    answer: string;
    like: number;
    dislike: number;
    popularity_percentage: number;
}

type vote = "like" | null | "dislike";
