import { Session } from "@supabase/supabase-js";
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import supabase from "../../services/supabase/supabaseClient";

export const SessionContext = createContext<Session | null>(null);

export const SessionContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
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
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    );
};

export function useSession() {
    const session = useContext(SessionContext);
    return {
        session,
        user: {
            user_id: session?.user.id,
            username: session?.user.user_metadata.preferred_username,
        },
    };
}
