import DisplayQuestionsList from "../DatabaseInteractions/DisplayQuestionsList";

export default function Faq({ page }: { page: IPage }) {
    return (
        <div>
            <DisplayQuestionsList pageState={page} />
            {/* // it really only needs page.value} */}
        </div>
    );
}
