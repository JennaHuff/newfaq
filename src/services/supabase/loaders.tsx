import { useSession } from "../../components/auth/SessionContext";
import supabase from "./supabaseClient";

export async function faqLoader() {
    const { user } = useSession();
    return supabase
        .from("faq")
        .select(`*, votes(id)`)
        .filter("user_id", "eq", user.id)
        .order("id", { ascending: true });
}

export async function forumLoader() {
    return supabase.from("forum").select();
}
