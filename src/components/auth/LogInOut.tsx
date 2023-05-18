import { useContext } from "react";
import supabase from "../../services/supabase/supabaseClient";
import { useSession } from "./SessionContext";

async function signInWithGithub() {
    await supabase.auth.signInWithOAuth({
        provider: "github",
    });
}
async function signOut() {
    await supabase.auth.signOut();
}

export default function LogInOut() {
    const { session, user } = useSession();
    return (
        <div className="username-and-log-in-button">
            {user && <h3>{user.username}</h3>}
            {session ? (
                <button onClick={signOut}>Sign out</button>
            ) : (
                <button onClick={signInWithGithub}>Sign in</button>
            )}
        </div>
    );
}
