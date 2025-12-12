// supabaseClient.js
// supabaseClient.js
// Make sure this file is included as <script type="module" src="supabaseClient.js"></script>

import { createClient } from "https://esm.sh/@supabase/supabase-js";

window.supabase = createClient(
  "https://jtimdeudmkeffendjczz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0aW1kZXVkbWtlZmZlbmRqY3p6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzMTYxNzQsImV4cCI6MjA3ODg5MjE3NH0.6cqsAzO8DvnjIvg4Urb6Ld1W2xe3FBI8s2yvFMdwox8"
);
export const supabase = window.supabase
export async function checkUser(supabaseClient) {
    
        // Check if user is authenticated
        const { data, error } = await supabaseClient.rpc("get_user_profile")
        
    
        
        // If user is logged in and on index page, redirect to home
        if (data.length>0 && window.location.pathname.includes("/index.html")) {
        return window.location.href = "/home.html";
        }
        
      
        
    
}



console.log("Supabase ready");