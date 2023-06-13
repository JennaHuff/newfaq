import supabase from "./supabaseClient";

export async function faqLoader() {
    return supabase.from("faq").select().order("id", { ascending: true });
}

export async function forumLoader() {
    return supabase.from("forum").select();
}
