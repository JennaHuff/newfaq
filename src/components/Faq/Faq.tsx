import DisplayQuestionsList from "../DisplayQuestionsList/DisplayQuestionsList";

export default function Faq({ page }: { page: IPage }) {
    return <DisplayQuestionsList pageState={page} />; // it really only needs page.value
}
