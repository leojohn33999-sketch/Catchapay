
import {supabase} from "/supabaseJS (1).js"
supabase.auth.onAuthStateChange(async (event, session) => {
  if (session) {
    const { data } = await supabase.rpc("get_user_profile")
    if (data && data.length > 0) {
      window.location.href = "/home.html"
    }
  }
})
export async function login() {
  var loginUi = document.getElementById("loginUi");
  if (!loginUi) {
    loginUi = document.createElement("div");
    loginUi.id = "loginUi";
    loginUi.style = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background-color: rgba(26,188,156,0.4);
      backdrop-filter: blur(20px);
      display: flex; justify-content: center; align-items: center; z-index:10000;
    `;
    document.body.appendChild(loginUi);
  }

  const originalLogin = `
    <div style="max-width:300px;padding:20px;background:white;border-radius:15px;box-shadow:0 4px 12px rgba(0,0,0,0.1);font-family:sans-serif;">
      <div id="cancelerLogin">&times;</div>
      <h2>Log in to CatchaPay</h2>
      <input id="emailBox" type="email" placeholder="Enter Email" style="width:95%;padding:10px;margin-bottom:15px;border:1.5px solid #ccc;border-radius:20px;font-size:16px;outline:none;">
      <input id="passwordBox" type="password" placeholder="Enter Password" style="width:95%;padding:10px;border:1.5px solid #ccc;border-radius:20px;font-size:16px;outline:none;">
      <button style="width:100%;background-color:#1ABC9C;color:white;padding:10px;border:none;border-radius:20px;font-size:16px;margin-top:15px;" id="loginBox">Log in</button>
        <br><strong><span style="text-align:center;justify-items:center;justify-content:center;position:absolute;margin-left:150px;"><br/>or</span></strong><br>
    <br/>
    <br/>
  <button id="customGoogleBtn" style=" background: #fff;
  border: 1.5px solid #ddd;
  color: black;
  padding:10px 20px;
  border-radius:5.0px;
  font-size: 14px;
  width: 100%;
  
  
  justify-content: center;
  justify-self: center;
  
  display:flex;
  gap:10px;"><img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/Logo-google-icon-PNG.png" width="15"height="15" style="margin-left: position:relative; left:-30px;"/>login with Google</button>
        <div style="text-align:center;margin-top:20px;">
      
      <div style="text-align:center;margin-top:20px;">
        <span>Don't have an account?</span>
        <button style="background-color:#1ABC9C;color:white;border:none;padding:6px 12px;border-radius:6px;font-size:14px;margin-left:5px;" id="signChange"   onfocus="this.style.background='white'
         "
          onblur="this.style.background-color=':#1abc9c;'">Sign up</button>
      </div>
    </div>
  `;
  
  loginUi.innerHTML = originalLogin;

  // signup UI switch
  function signupUI() {
    loginUi.innerHTML = `
      <div style="max-width:300px;padding:20px;background:white;border-radius:15px;box-shadow:0 4px 12px rgba(0,0,0,0.1);font-family:sans-serif;" id="signup">
        <div id="cancelerLogin">&times;</div>
        <h2>Sign up to CatchaPay</h2>
        <input id="emails" type="email" placeholder="Enter Email" style="width:95%;padding:10px;margin-bottom:15px;border:1.5px solid #ccc;border-radius:20px;font-size:16px;outline:none;">
        <input id="passwordlss" type="password" placeholder="Enter Password" style="width:95%;padding:10px;border:1.5px solid #ccc;border-radius:20px;font-size:16px;outline:none;">
        <input id="ConfirmPass" type="password" placeholder="Confirm Password" style="width:95%;padding:10px;border:1.5px solid #ccc;border-radius:20px;font-size:16px;outline:none;margin-top:10px;">
        <button id="signupO" style="width:100%;background-color:#1ABC9C;color:white;padding:10px;border:none;border-radius:20px;font-size:16px;margin-top:15px;">Sign up</button>
        <br><strong><span style="text-align:center;justify-items:center;justify-content:center;position:absolute;margin-left:150px;"><br/>or</span></strong><br>
    <br/>
    <br/>
  <button id="customGoogleBtn" style=" background: #fff;
border: 1.5px solid #ddd;
  color: black;
  padding:10px 20px;
  border-radius:5.0px;
  font-size: 14px;
  width: 100%;
  
  
  justify-content: center;
  justify-self: center;
  
  display:flex;
  gap:10px;"><img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/Logo-google-icon-PNG.png" width="15.0"height="15" style="margin-left: position:relative; left:-30px;"/>signup with Google</button>
        <div style="text-align:center;margin-top:20px;">
       
          <span>Already have an account?</span>
          <button id="loginChange" style="background-color:#1ABC9C;color:white;border:none;padding:6px 12px;border-radius:6px;font-size:14px;margin-left:5px; transition-duration:0.1s;"  
          onfocus="this.style.background='white'
         "
          onblur="this.style.background-color=':#1abc9c;'"
          >Login</button></br>
           <span style="font-size:12px;opacity:0.8;padding:10px;position:relative;margin-top:30px;">by signing up you agree to our <strong>terms & policy's </strong></span>
        </div>
      </div>
    `;
  }

  // Handle clicks
  loginUi.addEventListener("click", async (event) => {
    const t = event.target;
  hideCancelerIfLogin();
    if (t.id === "cancelerLogin") {
      await new Promise(r => setTimeout(r, 300)); // 5 sec delay
      loginUi.remove();
      return;
    }

    if (t.id === "signChange") {
      await new Promise(r => setTimeout(r, 200)); 
      signupUI();
      hideCancelerIfLogin();
      return;
    }

    if (t.id === "loginChange") {
      await new Promise(r => setTimeout(r, 200)); // 5 sec delay
      loginUi.innerHTML = originalLogin;
      hideCancelerIfLogin();
      return;
    }

    // SIGNUP BUTTON
    if (t.id === "signupO") {
      hideCancelerIfLogin();
     document.getElementById("LoaderIndicator").style.display = "block";

      const emailL = document.getElementById("emails").value.trim();
      const passwordL = document.getElementById("passwordlss").value.trim();
      const confirm = document.getElementById("ConfirmPass").value.trim();

      if ( confirm !== passwordL) {
       alert("please make the password same")
         document.getElementById("LoaderIndicator").style.display = "none";
        return;
      }

      try {
        const { data, error } = await supabase.auth.signUp({email: emailL,password: passwordL });

        if (error) {
          alert("Failed to signup: " + error.message);
             document.getElementById("LoaderIndicator").style.display = "none";
          return;
        }

      try {
    // Get the current session
    const session = await supabase.auth.getSession();
    const token = session.data.session?.access_token;

    if (!token) {
        alert("You must be logged in to continue.");
        return;
    }

    // Call your backend
    const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({}) // no need to send email/user_id, backend handles it
    });

    // Parse JSON safely
    const result = await response.json().catch(() => ({}));

    // Handle conditions
    if (response.status === 401) {
        alert("Unauthorized. Please log in again.");
    } else if (!response.ok || !result.success) {
        const errMsg = result.error?.message || JSON.stringify(result.error) || response.statusText;
        alert("Operation failed: " + errMsg);
    } else {
        // Success
        var emailTeller = document.getElementById("emailTeller")
        if(!emailTeller){
        emailTeller = document.createElement ("div")
        emailTeller.id="emailTeller"
        emailTeller.style=`width: 300px;
      height: 300px;
      justify-self: center;
      border: 1px solid #1ABC9C;
      display: grid;
      align-items: center;
    top: 170px;
      justify-items: center;
      justify-content:center ;
      color: rgba(0,0,0,0.7);
      padding: 20px;
      border-radius: 10px;
      position: fixed;
      background: white;`
        }
        emailTeller.innerHTML = ` <img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/send.png" style="border: 0px solid black;
      width: 150px;
      height: 150px;
      justify-self: center;
      margin-left: 20px;">
    <span style="position: relative;
      margin-top: -20px;"> Check your Email box</span>
    <div style="border: 1px solid #1ABC9C;
      
      display: flex;
      justify-content: center;
    align-items: center;
      text-align: center;
    padding: 15px;
    background: #388c82;
      color: white;
      width: 80px;
   border-radius: 5px;
   transition-duration: 0.1s;"
   onmouseenter="
   this.style.color='black';
   this.style.background='white';
   "  onclick="window.location.href ='/home.html'">ok</div>`
    }
} catch (err) {
    console.error("Unexpected error:", err);
    alert("An unexpected error occurred. Please try again later.");
    return;
}       

      }
       finally {
      console.log("done")
    }
    
    //login
    if (t.id === "loginBox") {


  // Load popup module safely


  const emailLN = document.getElementById('emailBox').value.trim();
  const passwordLN = document.getElementById('passwordBox').value.trim();

  if (!passwordLN || !emailLN) {
    
    alert("Please fill your email or password");
    return; // important!
  }

const { data, error } = await supabase.auth.signInWithPassword({
  email:  emailLN,
password:  passwordLN
});

  if (error) {
    const load = document.getElementById('LoaderIndicator');
    load.innerHTML = "wrong password or email";
    load.style.color = "red";
    load.style.width = "auto";
    load.style.padding = "10px";

    setTimeout(() => {
      load.innerHTML = `<div></div>`;
      load.style.width = "100px";
      load.style.padding = "0";
      load.style.display = "none";
    }, 1000);


    return;
  }

  // success
  alert("Login successfully");
  
  console.log(data.user.id);
  window.location.href ="/home.html"
}}
  });
  if(window.location.pathname.includes("/login.html")){
    document.getElementById("cancelerLogin").style.display= "none"
  }
}   

function hideCancelerIfLogin() {
  if (window.location.pathname.includes("/login.html")) {
    const el = document.getElementById("cancelerLogin");
    if (el) el.style.display = "none";
  }
}

// Call this on: 
// - initial page load
// - when clicking nav buttons
// - after UI changes
