import { supabase } from "https://leojohn33999-sketch.github.io/Catchapay/supabaseJS (1).js";
const {data,error} = await supabase.rpc('get_user_profile_v2')


var dataO = null
const currentPage = window.location.pathname;

// Stop redirect logic on index.html
if (currentPage === "/" || currentPage.endsWith("index.html")) {
    console.log("Index page – skip data redirect check");
} else {
    // Safe to check data
    if (!data || data.length === 0) {
        window.location.href = "https://leojohn33999-sketch.github.io/Catchapay/index.html";
    } else {
        dataO = data[0];
    }
}
if(dataO !== null && window.location.href.includes("index.html")){
  window.location.href = "https://leojohn33999-sketch.github.io/Catchapay/home.html"
}



function getCookie(name) {
  let cookieArr = document.cookie.split(";");

  for (let c of cookieArr) {
    let [key, value] = c.trim().split("=");
    if (key === name) return value;
  }

  return null; // not found
}
var dateSetEx = new Date()
dateSetEx.setMonth(dateSetEx.getMonth() + 1)
function cookies() {
  // Tab to edit


let cookieSetL = getCookie("language")
if(!cookieSetL || cookieSetL === "null"){
  document.cookie = `language=en;expires = ${dateSetEx};path=/`;
}
var cookieSetC = getCookie("currency")
if(!cookieSetC || cookieSetC === null){
  document.cookie = `currency=cp;expires = ${dateSetEx};path=/`;

}}
export async function navbarUi(app) {
  let nav = document.getElementById('navbar')
  if (!nav) {
    nav = document.createElement('nav')
    nav.id = "navbar"
    app.prepend(nav)
    nav.style=`
    position:fixed;
    top:0;left:0;
    width:100%;`
  }

  nav.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; background-color: white; padding: 10px; border-bottom: 1px solid #ccc; height: 36px;width:100%;" id="top-nav">
      <div style="font-size: 14px; font-weight: bold; color: #6f2da8; display: flex; padding: 10px 0; justify-content: space-between;">
        <img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/1000082361_preview_rev_1.png" style="width: 32px; height: 32px; margin-top: -5px;">
        <span style="color: #1ABC9C; padding-top: 5px; margin-left: 0px; font-size: 14.4px;">CatchaPay</span>
      </div>
      <div style="background-color: white; color: #1ABC9C; padding: 4px 8.0px;font-size:14px;border-radius: 5px; font-weight: bold; margin-left: 220px; text-align:right;border:1px solid black; box-shadow:0 2px 2px 2px rgba(0,0,0,0.00); display:flex;position:absolute;" id="balance">0 CP</div>
      <div id="setting-bubble" style="margin-left: 340.0px;position:absolute;">
        <img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/settings.png" style="width: 24px; height: 24px; border-radius: 50%;">
      </div>
    </div>
  `
var balance = document.getElementById('balance')
if(dataO){
balance.innerText = dataO.balancecp + ' CP'

let cookieS = getCookie("currency")
if(cookieS === "etb"){
  balance.innerText = dataO.balanceetb + ' ETB'
}

  console.log("loaded user" + dataO[0])
}
  const setting = document.getElementById('setting-bubble')

  async function naver(app) {
    let naver = document.getElementById('naverLeft')

    if (!naver) {
      naver = document.createElement('div')
      naver.id = "naverLeft"
      naver.style = `
      visibility:hidden;
        position: fixed; right:0;top:0;
        width: 280px;
        height: 0;
        background-color: white;
        box-shadow: 2px 0 8px rgba(0,0,0,0.1);
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom:20px;
        padding-top: 2px;
        display: flex;
        z-index: 100;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        transition-duration: 0.8s;
      `
      app.appendChild(naver)
    }
cookies()
    naver.innerHTML = `
       <div >
      <h3 style="color: #1ABC9C; margin-top: 10px;"><b>setting</b></h3> <span id="canceler" style="position: absolute; right:5px; font-size: 26px;color:black; top:0;right:10px; ">&times;</span>
           <hr style="margin-top: 10px;">
  
      <div style="margin-top: 30px; ">
      <!--notification-->
        <div style="padding: 12px 0; border-bottom: 0px solid #eee; width: 95%;position: relative; right: -15px;" id="notification"><img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/bell (1).png" style="width:25px;height:25px; top:-10px; position: relative;">
          <span href="#" style="text-decoration: none; color: #333; font-size: 16px; position: relative; top: -15px; margin-left: 2px;">Notification</span>
          <hr style="margin-top: -5px; background-color: #1ABC9C;">
        </div>

        <div style="">
        <div style="padding: 12px 0; border-bottom: 0px solid #eee; width: 95%;position: relative; right: -15px;"><img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/languages-world.png" style="width:25px;height:25px; top:-10px; position: relative;">
          <span href="#" style="text-decoration: none; color: #333; font-size: 16px; position: relative; top: -15px; margin-left: 2px;">Language</span> <select style="position: absolute; right:0;margin-top:-5px; border:none;background:white;outline:none;" id="Language"><option value="en">English</option><option value="an">Ahmaric</option></select>
          <hr style="margin-top: -5px;">
        </div>
        <div style="">
        <div style="padding: 12px 0; border-bottom: 0px solid #eee;width: 95%;position: relative; right: -15px;"><img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/transaction-euro.png" style="width:25px;height:25px; top:-10px; position: relative; ">
          <span href="#" style="text-decoration: none;position: relative;
          color: #333; font-size: 16px;top: -15px; margin-top: 2px;">Currency</span> 
          <select style="position: absolute; right:0;margin-top:-5px; border:none;background:white;outline:none;" id="Currency">
          <option value="etb">ETB</option><option value="cp">CP</option></select>
          <hr style="margin-top: -5px;">
        </div>
        </div>
        <div style="border: 0px solid black;">
           <button style="padding: 12px 0; width:80%; margin-left: 30px; background: white; color: black; border: 1px groove black; border-radius: 5px;transition-duration:0.1s;" 
           id="loginBTN"
        onmouseenter = "this.style.width='80.5%'; this.style.background ='rgba(94,178,153,0.2)';"
        onmouseleave =" this.style.width='80%';this.style.background='white';"
           >
          <span href="#" style="text-decoration: none; color: black;">Logout </span>
        </button>
        <div style="padding:10px; ">
          <button href="#" 
          style="text-decoration: none; color: #333; background: #1ABC9C;
          color: white;  border:1px solid #1ABC9C; width: 95%; height: 40px; border-radius: 8px; 
          margin-left: 5px; diplay:flex;">
            <span style="position: relative;left:20px;top: -5px;">Help and support</span>
            <img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/interrogation.png" style="width:20px;height:20px; margin-left: 40px; z-index: 11;"> </button>
        </div>
       
        <div>
        </div>
        <div>
        <button style="text-decoration: none; color: #333; background: white;  color: red;  border:1px solid red; width: 100%; height: 40px; border-radius: 8px; margin-left: 5px;" id="deleteACN">
          <span>Delete Acount</span>
        </button>
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div style="border: 0px solid black; margin-top: 100px; position: relative; ">
      <div style="margin-bottom: 15px; text-align: center; font-size:16px; line-height: 1.5;">
        <a href="#" style="text-decoration: none; color: #666; display: block; margin-bottom: 5px;">Terms of Service</a>
        <a href="#" style="text-decoration: none; color: #666; display: block; margin-bottom: 5px;">Privacy Policy</a>
        <a href="#" style="text-decoration: none; color: #666;">Giveaway Rules</a>
      </div>

     
      <div style="text-align: center; font-size: 12px; color: #888; ">
        <strong style="color: #1ABC9C;">Catcha</strong><strong style="color:black;" >Pay</strong><br>
        © All Rights Reserved By CatchaPay<br>
        CatchaPay is intended for use only within the ethiopia.
      </div>
    </div>
    `
    
  var notify = document.getElementById('notification');
  var lang = document.getElementById("Language")
  lang.addEventListener("change",function(event) {
    var value = event.target.value
   
   document.cookie=`language=${value};expiry=${dateSetEx};path=/`
    alert("changed")
  })
  var cur = document.getElementById ('Currency')
   cur.addEventListener("change",function(event) {
    var value = event.target.value
   
   document.cookie=`currency=${value};expiry=${dateSetEx};path=/`
    alert("changed")
  })
notify.addEventListener('click', () => {
  
  // Correct: Notification.permission
  var status = Notification.permission;

  if (status === "granted") {
    alert("Notifications already allowed ✔");
  } 
  else if (status === "denied") {
    // User has blocked notifications
    alert("Notifications are blocked ❌. Please enable them in browser settings.");
  } 
  else if (status === "default") {
    // Ask for permission
    Notification.requestPermission().then(result => {
      if (result === "granted") {
        alert("Successfully allowed ✔");
      } else {
        alert("Permission denied ❌");
      }
    });
  } 
  else {
    alert("Your browser doesn't support Notifications ❗");
  }

});
//account deletion 

  var deleteA = document.getElementById('deleteACN')
deleteA.addEventListener('click',function(event){
  var deleteDiv = document.getElementById('deleteDiv')
  if(!deleteDiv){
    deleteDiv = document.createElement('div')
    deleteDiv.id="deleteDiv"
    deleteDiv.style= `visibility:visible;position:fixed;bottom:0;left:0;width:350px;background:#e74c3c;color:white;border-top-left-radius:20px;border-top-right-radius:20.0px;box-shadow:0 -5px 15px rgba(0,0,0,0.3);padding:20px;font-family:Arial, sans-serif;z-index:1000;transition: 0.3s; align-items:center; display:grid;`
    
  document.body.insertAdjacentElement("beforeend",deleteDiv)
  }
  deleteDiv.style.visibility = "visible"
  deleteDiv.innerHTML =` <p style="font-size:16px;font-weight:600;margin-bottom:15px;">
    ⚠️ Warning: Deleting your account is <strong>irreversible</strong>! You will lose all your financial data and activity history.
  </p>
  <div style="display:flex;justify-content:flex-begin;gap:10px;">
    <button id="cancelDelete" style="padding:8px 15px;border:none;border-radius:6px;background:white;color:#e74c3c;font-weight:600;cursor:pointer;transition:0.1s;">Cancel</button>
    <button id="confirmDelete" style="padding:8px 15px;border:none;border-radius:6px;background:#c0392b;color:white;font-weight:600;cursor:pointer;transition: 0.1s;">Delete</button>
  </div>`
  document.getElementById("cancelDelete").onclick =  () => {
  deleteDiv.style.visibility = "hidden"
  
  }
  document.getElementById('confirmDelete').onclick = async () => {
    const {data,error} = await supabase.rpc("delete_user_fully") 
    if(data){
      window.location.href ="/index.html"
    }
    else{
      return alert("didnt work",error.message)
    }
    
  }
})

   //logout part
   
  var logout = document.getElementById('loginBTN');

logout.addEventListener('click', () => {

  var logWarn = document.getElementById("LogoutWorn");

  if (!logWarn) {
    logWarn = document.createElement('div');
    logWarn.id = "LogoutWorn";

    logWarn.style = `
      display:none;
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background:rgba(255,255,255,0.4);
      justify-content:center;
      align-items:center;
      z-index:1000;
      backdrop-filter: blur(8px);
    `;

    logWarn.innerHTML = `
      <div style="background:#1ABC9C;color:white;padding:25px 30px;border-radius:12px;max-width:300px;width:90%;text-align:center;box-shadow:0 5px 15px rgba(0,0,0,0.3);font-family:Arial, sans-serif;">
        <p style="font-size:18px;margin-bottom:25px;font-weight:600;">Are you sure?</p>
        <div style="display:flex;justify-content:space-between;gap:10px;">
          <button id="logoutLOG" style="flex:1;padding:10px;border:none;border-radius:6px;background:white;color:#f54263;font-weight:600;cursor:pointer;transition:0.3s;">Logout</button>
          <button id="cancelLOG" style="flex:1;padding:10px;border:none;border-radius:6px;background:white;color:#1ABC9C;font-weight:600;cursor:pointer;transition:0.3s;">Cancel</button>
        </div>
      </div>
    `;

    document.body.insertAdjacentElement("afterbegin", logWarn);
  }

  logWarn.style.display = "flex";

  // Corrected ID
  document.getElementById("logoutLOG").onclick = async () => {
    const {error} = await supabase.auth.signOut()
    
    alert("Logging out...");
    if(!error){
      window.location.href ="/index.html"
    }
    logWarn.style.display = "none";
  };

  document.getElementById("cancelLOG").onclick = () => {
    logWarn.style.display = "none";
  };
});
   //functions for logout

    const cancel = document.getElementById('canceler')
    cancel.addEventListener("click", () => {
      naver.style.height = "0"
      naver.style.visibility = "hidden"
    })
  }

  await naver(app)

  // ✅ spinner setup
  let load = document.getElementById('spinner')
  if (!load) {
    load = document.createElement('div')
    load.id = "spinner"
    load.style.display = "none"
    setting.appendChild(load)
  }

  // ✅ save original content AFTER spinner is added
  const originalContent = setting.innerHTML

setting.addEventListener("click", () => {
  setting.innerHTML = ""
  setting.appendChild(load)
  load.style.display = "block"

  const naverBox = document.getElementById("naverLeft")

  // ✅ FIX: visibility applied to the real element
  naverBox.style.visibility = "visible"

  // open sidebar
  naverBox.style.height = "100vh"

  // restore content after animation
  setTimeout(() => {
    load.style.display = "none"
    setting.innerHTML = originalContent
  }, 600)
})
}




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


export async function PayoutUi(){
  const cn = document.getElementById("PayoutContainer")
  var originalUi = document.getElementById('choosePayoutAS')
  if(!originalUi){
  originalUi =  document.createElement('div')
  originalUi.id ="choosePayoutAS"
   
  }
originalUi.innerHTML = `

<div id="choosePayoutOp" style="text-align: center;width: 200px; height:40px; border:0px solid black; justify-content: ;justify-items: center;align-items: center; align-content: center;position: relative;margin-left: 90px; margin-top:90px;">
<select style="width:100%;height:100%; text-align:center;font-size:18px;color:#ffffff;opacity:0.8;border:none;background:#388c82 ;margin-top:10px;outline:none;border-radius:4.0px;" id="paymentT"><option value="Quick  Payout">Quick Payout</option>
  <option>Monthly Payout</option></select></div>
  <!-- Rewards Grid -->
  <div class="grid" id="banksType">
    <div class="reward" id="telle"><img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@Bank@1.1/Telebirr.png" style="width: 60px; height:30px;"><div>Telebirr</div></div>
    <div class="reward" id="cbe"><img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@Bank@1.1/v8fmg4Cd_eU_aMo6I8ZWa86HXR7mj98fXQVHXO_cWb8-icon.webp" ><div>CBE bank</div></div>
    <div class="reward" id="abyssinia"><img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@Bank@1.1/1726053803635-abyssinia.png" ><div>Abysinnia</div></div>
    <div class="reward" id="Ebirr"><img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@Bank@1.1/Screenshot_20251104_110326_Google.jpg" ><div>Ebirr</div></div>
    <div class="reward" id="mpesa"><img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@Bank@1.1/mpesa-518x500.png"><div>Mpesa</div></div>
    <div class="reward" id="dashen"><img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@Bank@1.1/Dashen_Bank.png" ><div>Dashen Bank</div></div>
   
  `
  cn.insertAdjacentElement("beforeend",originalUi)
 
  function payoutInfo(bankName,URL
  ){
    var UI = document.getElementById('parent')
    if(!UI){
      UI = document.createElement('div')
      UI.id ="parent"
      UI.style="padding:10px;"
    }
    UI.innerHTML = `
   
    <div id="gobackP" style="position:absolute; z-index:100; margin-top: 100px;margin-left:10px;border:1px solid #1ABC9C; border-radius:50%; justify-content:center; justify-items:center;align-items: center;align-content:center;padding: 5px;color:#1aBC9C; width: 40px;height:40px;" >
   <img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/turn-back.png" style="width:30px;height:30px;margin-left:5px;"/>
</div>

    <div style="max-width: 360px; margin: 10px auto; padding: 20px; background: white; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);  margin-top:90px;">
    <div style="justify-items:center ; justify-content: center; align-content: center; align-items: center;  display: grid;grid-row: -5px;">
  <img src="${URL}" style="width: 6.25rem; height: 6.25rem; ">
    <h2 style="text-align: center; color: #333;">${bankName}</h2>
    <p style="text-align: center; color: #666;">Make a Selection
</p>
    </div>
    
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 20px;" id="ammountDATA">
      <button style="padding: 10px 15px; border-radius: 8px; border:1px solid white;
color:#1abc9c;background-color: #e0f7f5;font-weight: bold;" data-ammount ="2000">2000ETB</button>
      <button style="padding: 10px 15px; border-radius: 8px; border:1px solid white;
color:#1abc9c;background-color: #e0f7f5; font-weight: bold;" data-ammount="5000">5000ETB</button>
      <button style="padding: 10px 15px; border-radius: 8px; border:1px solid white;
color:#1abc9c;background-color: #e0f7f5; font-weight: bold;" data-ammount ="7500">7500ETB</button>
     
      
      <button style="padding: 10px 15px; border-radius: 8px; border:1px solid white;
      color:#1abc9c;background-color: #e0f7f5; font-weight: bold;" data-ammount="10000">10000ETB</button>
      <button style="padding: 10px 15px; border-radius: 8px; border:1px solid white;
color:#1abc9c;background-color: #e0f7f5; font-weight: bold;"data-ammount="25000">25000ETB</button>
     
    </div>
    

    <p style="text-align: center; font-size: 14px; color: #555;">Your payment will be sent to your account number details.</p>


    <button style="width: 100%; background-color: #388c82; color: white; padding: 12px; border: none; border-radius: 8px; font-size: 16px; margin-top: 10px;" id="senderPYT">
      Not Enough Cash
    </button>


    <div style="margin-top: 20px; text-align: center; font-size: 14px; color: #888;">
      <p id="checkerWRN">You need an additional <strong  id="tellUSAm">1000ETB</strong></p>
      <p class="availableCS">0 Available Cash</p>
   
    </div>


  
  </div>`
   originalUi.remove()
  cn.insertAdjacentElement("beforeend",UI)
 var paymentTCh = getCookie("paymentTYPE")
 var balanceCHK = false
 if(dataO.balanceetb >= 2000 ){
 balanceCHK = true
 }
 console.log(paymentTCh)
 if(paymentTCh === "Quick  Payout"){
  var btn = document.getElementById('senderPYT')
  if(balanceCHK === false){
    btn.innerHTML = `Not Enough Cash`;
    btn.addEventListener("click",()=>{
      alert("clicked")
    })
    btn.disabled = true;
    document.getElementById('tellUSAm').innerText = 2000 - dataO.balanceetb 
    console.log("this con is w")
    return;
  }
   btn.innerText = "Choose Ammount"
       btn.disabled = false;
    document.getElementById('checkerWRN').innerText = ""
  document.querySelector('.availableCS').innerText =`${dataO.balanceetb} Available Cash`
  
  var btnAmm = document.querySelectorAll("[data-ammount]")
  btnAmm.forEach(function(element){
  element.addEventListener('click',function(anon) {
    
    btnAmm.forEach(function(el){
      el.style.border = "none"
      
    })
    this.style.border = "2px solid gold"
    var datasAm = this.dataset.ammount
    btn.innerText = 'Withdraw '+datasAm
    //submiting req ammount
    
  btn.addEventListener("click", function () {
  btn.disabled = true;

  let withdrawDiv = document.getElementById("withdrawSheet");

  if (!withdrawDiv) {
    withdrawDiv = document.createElement("div");
    withdrawDiv.id = "withdrawSheet";
    withdrawDiv.style = `
      display:grid;position:fixed;bottom:0;left:0;
      width:100%;background:white;
      border-top-left-radius:18px;border-top-right-radius:18px;
      box-shadow:0 -6px 20px rgba(0,0,0,0.25);
      font-family:Arial, sans-serif;z-index:999000;
      padding-top:20px;
      padding-bottom: 20px;
      justify-content: center;
    `;
    document.body.appendChild(withdrawDiv);
  }

  withdrawDiv.innerHTML = `
    <h3 style="margin:0 0 15px;color:#1ABC9C;font-size:20px;font-weight:700;">Withdraw Funds</h3>

    <label style="font-size:14px;color:#444;font-weight:600;">Holder Name</label>
    <input id="holderName" type="text" placeholder="Enter account holder name"style="
      width: 92.5%;padding:10px;margin:5px 0 15px;border:1px solid #ccc;border-radius:8px;padding-right:30px;outline:none;">

    <label style="font-size:14px;color:#444;font-weight:600;">Phone Number</label>
    <input id="holderNumber" type="number" placeholder="Enter number"
      style="width:92.5%;padding:10px;margin:5px 0 15px;border:1px solid #ccc;border-radius:8px;padding-right:30px;">

    <label style="font-size:14px;color:#444;font-weight:600;">Amount</label>
    <input id="withdrawAmount" type="number" value="${datasAm}" disabled
      style="width:100%;padding:10px;margin:5px 0 25px;border:1px solid #ccc;border-radius:8px;outline:none;">

    <div style="display:flex;justify-content:flex-end;gap:10px;">
      <button id="cancelWithdraw"
        style="padding:10px 16px;background:#1ABC9C;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">
        Cancel
      </button>

      <button id="submitWithdraw"
        style="padding:10px 16px;background:#388c82;color:white;border:none;border-radius:8px;font-weight:700;cursor:pointer;">
        Submit
      </button>
    </div>
  `;

  withdrawDiv.style.display = "grid";

  document.getElementById("cancelWithdraw").onclick = () => {
    withdrawDiv.style.display = "none";
    btn.disabled = false;
  };

  document.getElementById("submitWithdraw").onclick = async () => {
  const popCheck = await import("/popShower.js");
  popCheck.withdrawalPOP();

  const ammountReq = parseFloat(document.getElementById("withdrawAmount").value);
  if (isNaN(ammountReq) || ammountReq <= 0) return alert("Enter a valid amount");

  const holderName = document.getElementById("holderName").value;
  const holderNumber = document.getElementById("holderNumber").value;
  const bankWith = getCookie("bank");

  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return window.location.href = "login.html";

    const { data, error } = await supabase.rpc('create_withdrawal_request_v1', {
      p_amount: ammountReq,
      p_username: holderName,
      p_holder: holderName,
      p_email: user.email || "noemail@example.com",
      p_number_to_send: holderNumber,
      p_bank_name: bankWith
    });

    if (error) {
      console.error(error);
      alert("Failed to withdraw: " + error.message);
    } else {
      console.log("Withdrawal created successfully", data);
      popCheck.withdrawalPOPSu();
      setTimeout(() => { popCheck.stopAllPop() }, 2000);
    }
  } catch (e) {
    alert("Failed: " + e.message);
  }
}
});
  })})
  
}
  document.getElementById('LoaderIndicator').style.display="block"
  //
  document.getElementById('gobackP').addEventListener('click', () => {
    
  
    UI.remove()
  cn.insertAdjacentElement("beforeend",originalUi)
    
    
  })
  
 
    }
    // this part is bank url
   
cn.addEventListener("click", async function (event) {
  const t = event.target;
  const paymentT = document.getElementById("paymentT").value;
var bankUlr = {  
    ebirr : `https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@Bank@1.1/Screenshot_20251104_110326_Google.jpg`,  
    abbsiniya: `https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@Bank@1.1/1726053803635-abyssinia.png`,  
     cbe: `https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@Bank@1.1/v8fmg4Cd_eU_aMo6I8ZWa86HXR7mj98fXQVHXO_cWb8-icon.webp`,  
    telebirr: `https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@Bank@1.1/Telebirr.png`,mpesa:`https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@Bank@1.1/mpesa-518x500.png`,dashen:`https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@Bank@1.1/Dashen_Bank.png`  
    }  
  // expiry time
  let expiry = new Date();
  expiry.setMinutes(expiry.getMinutes() + 10);
  let expireStr = expiry.toUTCString();

  // bank images
  const bankImg = {
    telle: bankUlr.telebirr,
    Ebirr: bankUlr.ebirr,
    mpesa: bankUlr.mpesa,
    cbe: bankUlr.cbe,
    dashen: bankUlr.dashen,
    abyssinia: bankUlr.abbsiniya
  };

  // mapping ID → bank name
  const bankName = {
    telle: "Telebirr",
    Ebirr: "Ebirr",
    mpesa: "Mpesa",
    cbe: "CBE Bank",
    dashen: "Dashen Bank",
    abyssinia: "Abyssinia"
  };

  // if clicked ID is NOT one of them, EXIT
  if (!bankName[t.id]) return;

  // show loader
  document.getElementById("LoaderIndicator").style.display = "block";

  // delay (simulate work)
  await new Promise(res => setTimeout(res, 150));

  // hide loader
  

  // set correct cookies
  document.cookie = `bank=${bankName[t.id]}; expires=${expireStr}; path=/`;
  document.cookie = `src=${bankImg[t.id]}; expires=${expireStr}; path=/`;
  document.cookie = `paymentTYPE=${paymentT}; expires=${expireStr}; path=/`;

  payoutInfo(bankName[t.id],bankImg[t.id]);
  document.getElementById("LoaderIndicator").style.display = "none";
});}
export const referallcodeCopy = dataO.referallcode
