import "./Header.css";
import { Link } from "react-router-dom";

const navigationItems: Array<IPage> = [
    { pageName: "faq", pageTitle: "FAQ", key: 1 },
    {
        pageName: "forum",
        pageTitle: "Forum",
        key: 2,
    },
];

export default function Navigation() {
    return (
        <div className="navigation">
            {navigationItems.map((item) => (
                <Link key={item.key} to={`/${item.pageName}`}>
                    <button id="header-button">{item.pageTitle}</button>
                </Link>
            ))}
        </div>
    );
}
