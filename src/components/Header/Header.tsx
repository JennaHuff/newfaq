import ButtonFaqOrForum from "./ButtonFaqOrForum";

export default function Header({
    page,
    setPage,
}: {
    page: IPage;
    setPage: Function;
}) {
    return (
        <div className="Header">
            <h1>{page.pageTitle}</h1>
            <ButtonFaqOrForum setPage={setPage} />
        </div>
    );
}
