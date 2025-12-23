import {supabase} from "/supabaseJS (1).js"
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
  border: 2px solid #1ABC9C;
  color: #1ABC9C;
  padding: 12px 20px;
  border-radius: 50px;
  font-size: 18px;
  width: 80%;
  
  
  justify-content: center;
  justify-self: center;
  
  display:flex;
  gap:10px;"><img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/Logo-google-icon-PNG.png" width="20"height="20" style="margin-left: position:relative; left:-30px;"/>login_with Google</button>
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
  border: 2px solid #1ABC9C;
  color: #1ABC9C;
  padding: 12px 20px;
  border-radius: 50px;
  font-size: 18px;
  width: 80%;
  
  
  justify-content: center;
  justify-self: center;
  
  display:flex;
  gap:10px;"><img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/Logo-google-icon-PNG.png" width="20"height="20" style="margin-left: position:relative; left:-30px;"/>signup_with Google</button>
        <div style="text-align:center;margin-top:20px;">
        <span style="font-size:12px;opacity:0.8;padding:10px;position:relative;margin-top:-10px;">by signing up you agree to our <strong>terms & policy's </strong></br></span>
          <span>Already have an account?</span>
          <button id="loginChange" style="background-color:#1ABC9C;color:white;border:none;padding:6px 12px;border-radius:6px;font-size:14px;margin-left:5px; transition-duration:0.1s;"  
          onfocus="this.style.background='white'
         "
          onblur="this.style.background-color=':#1abc9c;'"
          >Login</button>
        </div>
      </div>
    `;
  }

  // Handle clicks
  loginUi.addEventListener("click", async (event) => {
    const t = event.target;

    if (t.id === "cancelerLogin") {
      await new Promise(r => setTimeout(r, 300)); // 5 sec delay
      loginUi.remove();
      return;
    }

    if (t.id === "signChange") {
      await new Promise(r => setTimeout(r, 200)); 
      signupUI();
      return;
    }

    if (t.id === "loginChange") {
      await new Promise(r => setTimeout(r, 200)); // 5 sec delay
      loginUi.innerHTML = originalLogin;
      return;
    }

    // SIGNUP BUTTON
    if (t.id === "signupO") {
     document.getElementById("LoaderIndicator").style.display = "block";

      const email = document.getElementById("emails").value.trim();
      const password = document.getElementById("passwordlss").value.trim();
      const confirm = document.getElementById("ConfirmPass").value.trim();

      if ( confirm !== password) {
       alert("please make the password same")
         document.getElementById("LoaderIndicator").style.display = "none";
        return;
      }

      try {
        const { data, error } = await supabase.auth.signUp({ email, password });

        if (error) {
          alert("Failed to signup: " + error.message);
             document.getElementById("LoaderIndicator").style.display = "none";
          return;
        }

        const userId = data.user.id;
        const name = email.split("@")[0];

        const { data: tableData, error: err } = await supabase.rpc(
          "insert_profile_for_user",
          {
            p_user_id: userId,
            p_email: email,
            p_name: name
          }
        );

        if (err) {
          popLogin.stopAllPop()
          alert("Failed to insert Data: " + err.message);
          
        } else {
            document.getElementById("LoaderIndicator").style.display = "none";
          alert("Signed up successfully!");
        }
        
      

      } catch (e) {
         document.getElementById("LoaderIndicator").style.display = "none";
        console.error(e);
        alert("Unexpected error occurred!");
      }

   
      
      
     
    }
    //login
    if (t.id === "loginBox") {
  let popLogin;

  // Load popup module safely
  try {
    popLogin = await import("/popShower.js");
  } catch (err) {
    console.error("PopLogin import failed", err);
    return alert("Popup module could not load.");
  }

  popLogin.popLOGIN();

  const email = document.getElementById('emailBox').value.trim();
  const password = document.getElementById('passwordBox').value.trim();

  if (!password || !email) {
    popLogin.stopAllPop();
    alert("Please fill your email or password");
    return; // important!
  }

const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password
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

    popLogin.stopAllPop();
    return;
  }

  // success
  alert("Login successfully");
  popLogin.stopAllPop();
  console.log(data.user.id);
  window.location.href ="/home.html"
}
  });
}