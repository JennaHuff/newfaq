import "./index.css";
import { useState, useEffect, ReactNode } from "react";
import { Session, SupabaseClient, createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "./services/supabase/supabaseClient";
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";

export default function App({ children }: { children: ReactNode }) {
    // const [session, setSession] = useState<Session | null>(null);
    // useEffect(() => {
    //     checkSession();
    //     window.addEventListener("hashchange", function () {
    //         checkSession();
    //     });
    // }, []);
    // async function checkSession() {
    //     const session = supabase.auth.();
    //     setSession(session);
    // }
    async function signInWithGithub() {
        await supabase.auth.signInWithOAuth({
            provider: "github",
        });
    }

    async function signOut() {
        await supabase.auth.signOut();
        setSession(null);
    }

    // if (session) {
    //     return (
    //         <div>
    //             <p>hello {session.email}</p>
    //             <button onClick={signOut}>Sign out</button>
    //         </div>
    //     );
    // }
    // return (
    //     <div>
    //         <p>Sign in with Github</p>
    //         <button onClick={signInWithGithub}>Sign in</button>
    //     </div>
    // );
    const [session, setSession] = useState(null);

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

    if (!session) {
        return (
            <div>
                <button onClick={() => signInWithGithub()}>Sign in</button>
                {children}
            </div>
        );
    } else {
        return (
            <div>
                <p>{session.user.user_metadata.preferred_username}</p>
                <button onClick={() => signOut()}>Sign out</button>
                {children}
            </div>
        );
    }
}
