import { Link } from "react-router-dom";

export default function ButtonFaqOrForum({ setPage }: { setPage: Function }) {
    const faq: IPage = { pageName: "faq", pageTitle: "Faq", key: 1 };
    const forum: IPage = {
        pageName: "forum",
        pageTitle: "Forum",
        key: 2,
    };
    const buttons = [faq, forum];
    return (
        <div className="ButtonFaqOrForum">
            {buttons.map((button) => (
                <Link
                    className="ButtonFaqOrForum"
                    to={button.pageName}
                    key={button.key}
                >
                    <button
                        key={button.key}
                        value={button.pageName}
                        onClick={() => {
                            setPage(button);
                        }}
                    >
                        {button.pageTitle}
                    </button>
                </Link>
            ))}
        </div>
    );
}
