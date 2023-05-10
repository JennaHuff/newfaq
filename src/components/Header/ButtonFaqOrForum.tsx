import "./Header.css";
import { Link } from "react-router-dom";

export default function ButtonFaqOrForum() {
    const faq: IPage = { pageName: "faq", pageTitle: "FAQ", key: 1 };
    const forum: IPage = {
        pageName: "forum",
        pageTitle: "Forum",
        key: 2,
    };
    const buttons = [faq, forum];
    return (
        <div className="ButtonFaqOrForum">
            {buttons.map((button) => (
                <Link key={button.key} to={`/${button.pageName}`}>
                    <button id="HeaderButton">{button.pageTitle}</button>
                </Link>
            ))}
        </div>
    );
}
