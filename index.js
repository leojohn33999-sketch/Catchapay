
import { supabase } from "https://leojohn33999-sketch.github.io/Catchapay/supabaseJS (1).js"

export async function login() {
  // Check auth status and redirect
  
    const { data, error } = await supabase.rpc("get_user_profile_v2")
    if (data && data.length > 0 && !window.location.pathname.includes("/signup.html")) {
      window.location.href = "https://leojohn33999-sketch.github.io/Catchapay/home.html"
    }

  // Create or get login UI
  let loginUi = document.getElementById("loginUi")
  if (!loginUi) {
    loginUi = document.createElement("div")
    loginUi.id = "loginUi"
    loginUi.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background-color: rgba(26,188,156,0.4);
      backdrop-filter: blur(20px);
      display: flex; justify-content: center; align-items: center; z-index:10000;
    `
    document.body.appendChild(loginUi)
  }

  // Always show appropriate UI based on current page
  if (window.location.pathname.includes("/signup.html")) {
    showSignupUI(loginUi)
  } else if (window.location.pathname.includes("/login.html")) {
    showLoginUI(loginUi)
  } else {
    showLoginUI(loginUi)
  }
}

// Separate functions for better organization
function showLoginUI(container) {
  container.innerHTML = `
    <div style="max-width:300px;padding:20px;background:white;border-radius:15px;box-shadow:0 4px 12px rgba(0,0,0,0.1);font-family:sans-serif;">
      <div id="cancelerLogin" style="${window.location.pathname.includes("/login.html") ? 'display:none;' : ''}
      ${window.location.pathname.includes("/signup.html") ? 'display:none;' : ''} cursor:pointer;">&times;</div>
      <h2>Log in to CatchaPay</h2>
      <input id="emailBox" type="email" placeholder="Enter Email" style="width:95%;padding:10px;margin-bottom:15px;border:1.5px solid #ccc;border-radius:20px;font-size:16px;outline:none;">
      <input id="passwordBox" type="password" placeholder="Enter Password" style="width:95%;padding:10px;border:1.5px solid #ccc;border-radius:20px;font-size:16px;outline:none;">
      <button id="loginBox" style="width:100%;background-color:#1ABC9C;color:white;padding:10px;border:none;border-radius:20px;font-size:16px;margin-top:15px;cursor:pointer;">Log in</button>
      <br><strong><span style="text-align:center;display:block;margin:10px 0;">or</span></strong>
      <button id="customGoogleBtn" style="background: #fff; border: 1.5px solid #ddd; color: black; padding:10px 20px; border-radius:5px; font-size: 14px; width: 100%; display:flex; align-items:center; justify-content:center; gap:10px; cursor:pointer;">
        <img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/Logo-google-icon-PNG.png" width="15" height="15"> login with Google
      </button>
      <div style="text-align:center;margin-top:20px;">
        <span>Don't have an account?</span>
        <button id="signChange" style="background-color:#1ABC9C;color:white;border:none;padding:6px 12px;border-radius:6px;font-size:14px;margin-left:5px; cursor:pointer;">Sign up</button>
      </div>
    </div>
  `
  
  // Attach event listeners after DOM is updated
  setupEventListeners(container)
}

function showSignupUI(container) {
  container.innerHTML = `
    <div style="max-width:300px;padding:20px;background:white;border-radius:15px;box-shadow:0 4px 12px rgba(0,0,0,0.1);font-family:sans-serif;" id="signup">
      <div id="cancelerLogin" style="${window.location.pathname.includes("/signup.html") ? 'display:none;' : ''}
      ${window.location.pathname.includes("/login.html") ? 'display:none;' : ''}
      cursor:pointer;">&times;</div>
      <h2>Sign up to CatchaPay</h2>
      <input id="emails" type="email" placeholder="Enter Email" style="width:95%;padding:10px;margin-bottom:15px;border:1.5px solid #ccc;border-radius:20px;font-size:16px;outline:none;">
      <input id="passwordlss" type="password" placeholder="Enter Password" style="width:95%;padding:10px;border:1.5px solid #ccc;border-radius:20px;font-size:16px;outline:none;">
      <input id="ConfirmPass" type="password" placeholder="Confirm Password" style="width:95%;padding:10px;border:1.5px solid #ccc;border-radius:20px;font-size:16px;outline:none;margin-top:10px;">
      <button id="signupO" style="width:100%;background-color:#1ABC9C;color:white;padding:10px;border:none;border-radius:20px;font-size:16px;margin-top:15px; cursor:pointer;">Sign up</button>
      <br><strong><span style="text-align:center;display:block;margin:10px 0;">or</span></strong>
      <button id="customGoogleBtn" style="background: #fff; border: 1.5px solid #ddd; color: black; padding:10px 20px; border-radius:5px; font-size: 14px; width: 100%; display:flex; align-items:center; justify-content:center; gap:10px; cursor:pointer;">
        <img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/Logo-google-icon-PNG.png" width="15" height="15"> signup with Google
      </button>
      <div style="text-align:center;margin-top:20px;">
        <span>Already have an account?</span>
        <button id="loginChange" style="background-color:#1ABC9C;color:white;border:none;padding:6px 12px;border-radius:6px;font-size:14px;margin-left:5px; cursor:pointer;">Login</button>
      </div>
      <div style="text-align:center;margin-top:20px;font-size:12px;opacity:0.8;">
        by signing up you agree to our <strong>terms & policy's</strong>
      </div>
    </div>
  `
  
  // Attach event listeners after DOM is updated
  setupEventListeners(container)
}

function setupEventListeners(container) {
  // Use event delegation on the container
  container.addEventListener("click", handleContainerClick)
  
  // Also attach specific listeners for better reliability
  setTimeout(() => {
    
    const loginBox = document.getElementById("loginBox")
    const signupBtn = document.getElementById("signupO")
    const canceler = document.getElementById("cancelerLogin")
    const signChange = document.getElementById("signChange")
    const loginChange = document.getElementById("loginChange")
    const googleBtn = document.getElementById("customGoogleBtn")
  
    if (loginBox) loginBox.addEventListener("click", handleLogin)
    if (signupBtn) signupBtn.addEventListener("click", handleSignup)
    if (canceler) canceler.addEventListener("click", handleClose)
    if (signChange) signChange.addEventListener("click", () => showSignupUI(container))
    if (loginChange) loginChange.addEventListener("click", () => showLoginUI(container))
    if (googleBtn) googleBtn.addEventListener("click", handleGoogleAuth)
  }, 100)
}

async function handleContainerClick(event) {
  const target = event.target
  const container = document.getElementById("loginUi")
  
  if (target.id === "cancelerLogin") {
    handleClose()
    return
  }
  
  if (target.id === "signChange") {
    showSignupUI(container)
    return
  }
  
  if (target.id === "loginChange") {
    showLoginUI(container)
    return
  }
  
  if (target.id === "signupO") {
    await handleSignup()
    return
  }
  
  if (target.id === "loginBox") {
    await handleLogin()
    return
  }
}

async function handleLogin() {
   var login = document.getElementById("loginBox")
   login.innerHTML = `<div class="spinner" style="justify-self: center;
  height: 22.5px;
  width: 22.5px;
  border-radius: 50%;
  
  border: 1px solid white;
  border-top: 1px solid blue;
  animation: spiner 1s linear infinite;
"></div>`
  console.log("Login clicked")
  
  const email = document.getElementById('emailBox')?.value.trim()
  const password = document.getElementById('passwordBox')?.value.trim()
  
  if (!email || !password) {
    login.innerHTML = "Login"
    alert("Please fill in both email and password")
    return
  }
  
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    


if (error) {
  // Check the error code or message
  if (error.message === "Invalid login credentials" || error.code === "invalid_credentials") {
    var checkErr = document.querySelector(".elementCheck")
    if(!checkErr){
      checkErr = document.createElement("div")
      checkErr.className = "elementCheck"
      checkErr.style = `
        font-family: sans-serif;
        text-align: center;
        background: white;
        border: 1px solid #f04848;
        border-radius: 5px;
        height: 30px;
        width: 300px;
        font-size: 12px;
        display: flex;
        align-items: center;
        color: #f04848;
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        justify-content: center;
        animation: wrongemail 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        z-index: 100000;
      `
      checkErr.innerHTML = `Wrong Email or Password`
      
      // Add CSS for animation
   
    }
    document.body.appendChild(checkErr)
    
    // Remove after 2 seconds
    setTimeout(() => {
      if (checkErr && checkErr.parentNode) {
        document.body.removeChild(checkErr)
      }
    }, 2000)
    login.innerHTML = "Log in"
    return;
  }
}

// If no error, redirect
    
  
    window.location.href = "https://leojohn33999-sketch.github.io/Catchapay/home.html"
  } catch (error) {
    alert("Login failed: " + error.message)
    console.error("Login error:", error)
  }
}

async function handleSignup() {
  console.log("Signup clicked")
  
  const email = document.getElementById('emails')?.value.trim()
  const password = document.getElementById('passwordlss')?.value.trim()
  const confirm = document.getElementById('ConfirmPass')?.value.trim()
  
  if (!email || !password || !confirm) {
    alert("Please fill in all fields")
    return
  }
  
  if (password !== confirm) {
    alert("Passwords don't match")
    return
  }
  
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })
    
    if (error) return error;
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
      showEmailConfirmation()
    
    } 
    } catch (err) {
    console.error("Unexpected error:", err);
    alert("An unexpected error occurred. Please try again later.");
}     
    // Show success message
  
  } catch (error) {
    alert("Signup failed: " + error.message)
    console.error("Signup error:", error)
  }
}

function handleClose() {
  const loginUi = document.getElementById("loginUi")
  if (loginUi) {
    loginUi.remove()
  }
}

async function handleGoogleAuth() {
  // Implement Google OAuth
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth-callback.html`
    }
  });
  
  if (error) {
    alert("Google login failed");
  }
}

function showEmailConfirmation() {
  // Your email confirmation UI code here
  const container = document.getElementById("loginUi")
  if (!container) return
  
  container.innerHTML = `
    <div style="width: 300px; padding: 30px; background: white; border-radius: 10px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      <img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/send.png" style="width: 100px; height: 100px; margin-bottom: 20px;">
      <h3>Verification is sent to your email</h3>
      <p style="color: #666; margin-bottom: 25px;">We've sent a confirmation link to your email address. please verify it under 24 hours</p>
      <button onclick="window.location.href ='/home.html'" style="background-color: #1ABC9C; color: white; border: none; padding: 10px 25px; border-radius: 5px; cursor: pointer;">
        OK
      </button>
    </div>
  `
}
