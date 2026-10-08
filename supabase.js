const SUPABASE_URL = "https://kmubjktoazjhyhnwkqmy.supabase.co";
const SUPABASE_KEY = "sb_publishable_PjPUJ_Z6vFDxGRF-lYBFeg__Gt-nbJG";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
supabaseClient
    .from("projects")
    .select("id")
    .then(({ data, error }) => {
        if (error) {
            console.error("SUPABASE ERROR:", error);
        } else {
            console.log("SUPABASE CONNECTED ✅", data);
        }
    });