
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// const supabaseClient = (supabaseAccessToken)=>{
//     const supabase =  createClient(supabaseUrl, supabaseKey,{
//         global:{
//             headers:{
//                 Authorization: `Bearer ${supabaseAccessToken}`
//             },
//         },
//     });
//     return supabase;
// }

// export default supabaseClient;


import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Function to initialize Supabase client with optional access token
const supabaseClient = (supabaseAccessToken) => {
  return createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        Authorization: `Bearer ${supabaseAccessToken}`,
      },
    },
  });
};

export default supabaseClient; // Correctly export the function
