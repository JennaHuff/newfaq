import Navigation from "./Navigation";
import "./Header.css";
import { UsernameContext, signInWithGithub, signOut } from "../../../App";
import { useContext } from "react";

export default function Header() {
    const session = useContext(UsernameContext);
    return (
        <div className="header">
            <h1>Help center</h1>
            <Navigation />
            {session ? (
                <div className={"username-and-log-in-button"}>
                    <h3>{session.user.user_metadata.preferred_username}</h3>
                    <button onClick={() => signOut()}>Sign out</button>
                </div>
            ) : (
                <button
                    className={"username-and-log-in-button"}
                    onClick={() => signInWithGithub()}
                >
                    Sign in
                </button>
            )}
        </div>
    );
}
