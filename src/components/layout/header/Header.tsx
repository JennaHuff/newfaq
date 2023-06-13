import Navigation from "./Navigation";
import "./Header.css";
import LogInOut from "../../auth/LogInOut";

export default function Header() {
    return (
        <div className="header">
            <h3>Help center</h3>
            <Navigation />
            <LogInOut />
        </div>
    );
}
