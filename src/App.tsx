import "./index.css";
import { useState, useEffect, createContext } from "react";
import { Session } from "@supabase/supabase-js";
import supabase from "./services/supabase/supabaseClient";
import RouterComponent from "./router";

export const UsernameContext = createContext<Session | null>(null);

export async function signInWithGithub() {
    await supabase.auth.signInWithOAuth({
        provider: "github",
    });
}

export async function signOut() {
    await supabase.auth.signOut();
    setSession(null);
}

export default function App() {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <UsernameContext.Provider value={session}>
            <RouterComponent />
        </UsernameContext.Provider>
    );
}
