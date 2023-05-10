import supabase from "../../../supabaseClient.js";

export async function FaqLoader() {
    const { data }: { data: any } = await supabase.from("faq").select();
    return { data };
}

export async function ForumLoader() {
    const { data } = await supabase.from("forum").select();
    return { data };
}
