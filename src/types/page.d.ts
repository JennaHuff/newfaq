interface IPage {
    pageName: string; //ex: "faq"
    pageTitle: string; //ex: "Faq"
    key: number;
}

interface IQuestion {
    id: number;
    answer: string;
    like: number;
    dislike: number;
    title: string;
    popularity_percentage: number;
}
