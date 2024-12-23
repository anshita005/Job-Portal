
import supabaseClient from "@/utils/supabase";
export async function getCompanies(token) {
    const supabase = await supabaseClient(token);

    const { data, error } = await supabase.from('companies').select('*');

    console.log('Supabase Data:', data);
    console.log('Supabase Error:', error);
 


    if (error) {
        console.error('Error Fetching Companies:', error);
        return null;
    }

    return data;
}
