import Navigation from "./Navigation";
import "./Header.css";
import LogInOut from "../../auth/LogInOut";

export default function Header() {
    return (
        <div className="header">
            <h1>Help center</h1>
            <Navigation />
            <LogInOut />
        </div>
    );
}
