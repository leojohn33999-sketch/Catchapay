//hey is this get updated
export async function botomNav(app){
 var bnav = document.getElementById('BottomNav')
 if(!bnav){
  bnav =  document.createElement('div')
  bnav.id = "BottomNav"
  bnav.style = " position:fixed;bottom:0;"
  document.body.insertAdjacentElement("beforeend",bnav)
 }
 bnav.innerHTML = `  <nav data-set="bottom-Nav" id="Nav-All">
  <div style="
    display:flex;
    justify-content:space-around;
    background:white;
    padding:10px 0;
    position:fixed;
    bottom:0;
    width:100%;
    border-top:1px solid white;
    box-shadow:0 -5px 7px 2px rgba(0,0,0,0.1);
  ">

    <!-- HOME -->
    <div style="
      text-align:center;flex:1;border-radius:7.5px;color:#888;
      font-size:12px;width:40px;height:40px;padding-left:5px;
      padding-right:10px;transition:0.1s;
    " id="homeB"
    onmouseenter='this.querySelector(".topGlow").style.display="block";this.style.color="#1ABC9C";this.querySelector("img").style.filter="brightness(0) saturate(100%) invert(48%) sepia(16%) saturate(1244%) hue-rotate(123deg) brightness(95%) contrast(93%)"; '
    onmouseleave='this.querySelector(".topGlow").style.display="none";this.style.color="#888";this.querySelector("img").style.filter=" brightness(0) saturate(100%) invert(40%) sepia(7%) saturate(0%) hue-rotate(146deg) brightness(98%) contrast(90%)";' onclick="window.location.href='/home.html'">
     <div class="topGlow" style="width:100%;height:1.5px;background:#388c82;box-shadow: 0 2px 10px 5px rgba(94,178,153,0.2);top:-10px;position: relative;display: none; z-index: -99;overflow: hidden;"></div>
      <div style="width:24px;height:24px;margin:0 auto;">
        <img src='https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/house-blank.png'
        style="width:20px;height:20px;padding-top:1px;" class="bottomImg" id="homeImg">
      </div>
      <span style="display:block;margin-top:5px;font-size:11px;">Home</span>
    </div>

    <!-- GIVEAWAY -->
    <div style="
      text-align:center;flex:1;border-radius:7.5px;color:#888;
      font-size:12px;width:40px;height:40px;padding-left:5px;
      padding-right:10px;transition:0.01s;
    "id="rewardB"
    onmouseenter='this.querySelector(".topGlow").style.display="block";this.style.color="#1ABC9C";this.querySelector("img").style.filter="brightness(0) saturate(100%) invert(48%) sepia(16%) saturate(1244%) hue-rotate(123deg) brightness(95%) contrast(93%)";'
    onmouseleave='this.querySelector(".topGlow").style.display="none";this.style.color="#888";this.querySelector("img").style.filter=" brightness(0) saturate(100%) invert(40%) sepia(7%) saturate(0%) hue-rotate(146deg) brightness(98%) contrast(90%)";'onclick="window.location.href='/reward.html'">
     <div class="topGlow" style="width:100%;height:1.5px;background:#388c82;box-shadow: 0 2px 10px 5px rgba(94,178,153,0.2);top:-10px;position: relative;display: none;"></div>
      <div style="width:24px;height:24px;margin:0 auto;">
        <img src='https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/gift (2).png'
        style="width:20px;height:20px;padding-top:1px;" class="bottomImg">
      </div>
      <span style="display:block;margin-top:5px;font-size:11px;">Reward</span>
    </div>

    <!-- WITHDRAW -->
    <div style="
      text-align:center;flex:1;border-radius:7.5px;color:#888;
      font-size:12px;width:40px;height:40px;padding-left:5px;
      padding-right:10px;transition:0.2s;
    " id="withdrawB"
   onmouseenter='this.querySelector(".topGlow").style.display="block";this.style.color="#1ABC9C";this.querySelector("img").style.filter="brightness(0) saturate(100%) invert(48%) sepia(16%) saturate(1244%) hue-rotate(123deg) brightness(95%) contrast(93%)";'
onmouseleave='this.querySelector(".topGlow").style.display="none";this.style.color="#888";this.querySelector("img").style.filter=" brightness(0) saturate(100%) invert(40%) sepia(7%) saturate(0%) hue-rotate(146deg) brightness(98%) contrast(90%)";'onclick="window.location.href='/withdraw.html'">
<div class="topGlow" style="width:100%;height:1.5px;background:#388c82;box-shadow: 0 2px 10px 5px rgba(94,178,153,0.2);top:-10px;position: relative;display: none;"></div>
      <div style="width:24px;height:24px;margin:0 auto;">
        <img src='https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/money-simple-from-bracket.png'
        style="width:20px;height:20px;padding-top:1px;" class="bottomImg">
      </div>
      <span style="display:block;margin-top:5px;font-size:11px;">Withdraw</span>
    </div>

    <!-- ME -->
    <div style="
      text-align:center;flex:1;border-radius:7.5px;color:#888;
      font-size:12px;width:40px;height:40px;padding-left:5px;
      padding-right:10px;transition:0.2s;
    " id="userB"
  onmouseenter='this.querySelector(".topGlow").style.display="block";this.style.color="#1ABC9C";this.querySelector("img").style.filter="brightness(0) saturate(100%) invert(48%) sepia(16%) saturate(1244%) hue-rotate(123deg) brightness(95%) contrast(93%)";'
onmouseleave='this.querySelector(".topGlow").style.display="none";this.style.color="#888";this.querySelector("img").style.filter=" brightness(0) saturate(100%) invert(40%) sepia(7%) saturate(0%) hue-rotate(146deg) brightness(98%) contrast(90%)";'onclick="window.location.href='/user.html'">
<div class="topGlow" style="width:100%;height:1.5px;background:#388c82;box-shadow: 0 2px 10px 5px rgba(94,178,153,0.2);top:-10px;position: relative;display: none;"></div>
      <div style="width:24px;height:24px;margin:0 auto;">
        <img src='https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/circle-user (2).png'
        style="width:20px;height:20px;padding-top:1px;"class="bottomImg">
      </div>
      <span style="display:block;margin-top:5px;font-size:11px;">Me</span>
    </div>

  </div>
</nav>`
 
if(window.location.href.includes("home")){
  var home =  document.querySelector("#homeB .topGlow").style.display="block"
  var img= document.querySelector("#homeB img").style.filter=`brightness(0) saturate(100%) invert(48%) sepia(16%) saturate(1244%) hue-rotate(123deg) brightness(95%) contrast(93%)`
  var span = document.querySelector("#homeB").style.color="#1ABC9C"
}
else if(window.location.href.includes("reward")){
  var home =  document.querySelector("#rewardB .topGlow").style.display="block"
  var img= document.querySelector("#rewardB img").style.filter=`brightness(0) saturate(100%) invert(48%) sepia(16%) saturate(1244%) hue-rotate(123deg) brightness(95%) contrast(93%)`
  var span = document.querySelector("#rewardB").style.color="#1ABC9C"
}
else if(window.location.href.includes("withdraw")){
  var home =  document.querySelector("#withdrawB .topGlow").style.display="block"
  var img= document.querySelector("#withdrawB img").style.filter=`brightness(0) saturate(100%) invert(48%) sepia(16%) saturate(1244%) hue-rotate(123deg) brightness(95%) contrast(93%)`
  var span = document.querySelector("#withdrawB").style.color="#1ABC9C"
}
else if(window.location.href.includes("user")){
  var home =  document.querySelector("#userB .topGlow").style.display="block"
  var img= document.querySelector("#userB img").style.filter=`brightness(0) saturate(100%) invert(48%) sepia(16%) saturate(1244%) hue-rotate(123deg) brightness(95%) contrast(93%)`
  var span = document.querySelector("#userB").style.color="#1ABC9C"
}
}



const param = new URLSearchParams(window.location.search)
const page = param.get("p")
if(page === "term"){
  document.getElementById("topDescribe").innerHTML= ` <span id="topDescribeS" style="position:absolute; top:10px;left:10px;font-size:14px;word-spacing:5px;display:flex; gap:5px;" onclick="window.history.back()">
      <img width="15px" 
          height="15px" 
          src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/left-arrow.png"
           style="filter: brightness(0) saturate(100%) invert(94%) sepia(99%) saturate(3%) hue-rotate(221deg) brightness(105%) contrast(100%);">  Back</span>Term & Condtions`
document.getElementById("description").innerHTML  = ` <h3>Content</h3>
    <section>All Text Graphic, user interface,logo,compute code is owned or controlled by this site <strong >CatchaPay</strong> and its protect by © copyright and other intellectual parties </section>
    <h3>Account Limit</h3>
    <section>you can use one account per person per user and can use it <strong>(login)</strong> different devices if you have determined or catched using multiple account your account will be at risk of bans and your funding will not be transferred </section>
    <h3>Referall's</h3>
    <section>
      sharing your freind CatchaPay is the easiest way to earn extra money, our referall program is separated in teir's
      complete in the following way in order to acquire your teir <ul>
        <li>Teir 1 refer 1 freind and earn 5% of their total</li>
        <li>Teir 2 refer 3 freind and  6.5% of their total</li>
        <li> Teir 3 refer 10 freinds and increase 10% of you referall earning </li>
        <li>Teir 4 refer 15 freinds and increase 15% of your referall and bonus  5% earning increase </li>
        <li> Teir 5 refer 25 freind increase 20% of your referal , 5% bonus of your total earning and 5% increase of every task you </li>
      </ul> </section>
      <h3>User Conduct</h3>
      <section>
        you agree to use the site or service at your own risk
        and hold harmless to the site,  its licensors,affliates</br>
        the use of any automatics such as bots any or other mean such as attemping of hacking intercept or decipher any transmission to or from the server used by the site or to otherwise defraud CatchaPay or affiliated partners are prohibited
      </section>
      <h3>Vpns and Proxies</h3>
      <section>
        The use of Vpns and proxy, or tools to change or hide your ip/geolocation is prohibited; use of this services or tools will result fraudulent account and account banning this includes referall and your total income will be freezed
        
      </section>
      <h3>User Information</h3>
      <section>
        All  information provided to CatchaPay Must be accurate and truthful 
        providing false information or misleading will couse account freezing and might result account termination 
      </section>
  </main>`

}
else if(page === "policy"){
    document.getElementById("topDescribe").innerHTML= ` <span id="topDescribeS" style="position:absolute; top:10px;left:10px;font-size:14px;word-spacing:5px;display:flex; gap:5px;" onclick="window.history.back()">
      <img width="15px" 
          height="15px" 
          src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/left-arrow.png"
           style="filter: brightness(0) saturate(100%) invert(94%) sepia(99%) saturate(3%) hue-rotate(221deg) brightness(105%) contrast(100%);">  Back</span>Privacy Policy`
  document.getElementById("description").innerHTML = ` <h3>Privacy Policy</h3>
    <section>This <strong>Privacy Policy</strong> shows How we use, collect, share and protect your personal data when You use CatchaPay WebApp and Services</br>
  </section>
  <h3>How data you Provide to Us is used</h3>
  <section>While using CatchaPay its essential for us to collect your data and protect it as much as possible </section>
  <h4>Email Address</h4>
  <section>When you signup to CatchaPay Your email will be used to send notifications,  transactional emails</br>
  your Email address might also be shared to google and meta for analytics and traffics
  <br>
  some reward my require your Email address to be shared with thirty party when completing task's You have the right reject it when ever you want unless its necessary
  
  </section>
  <h4>Ip Address</h4>
  <section>Your Ip address will be recorded Everytime you use CatchaPay in order to provide country localisation, security, froud Prevention, Your ip will also be shared or collected by thirty party or our partners for froud preventionand security purpose</section>
  <h4>Device Identifier </h4>
  <section>
    When you using CatchaPay we need to collect your unique and generic identifier from your browser 
  </section>
  <h4>Cookies</h4>
  <section>in order to associate your account we store Cookies on your device</section>
  <h3>Data Security</h3>
  <section>
    we're committed protecting your data as secure as possible encrypting your data;
    <br>
    We have implemented reasonable security measures in order to protect your data from loss,misuse, unauthorised access and disclosure; While we cannot guarantee that losses or misuse,we make good faith to prevent such occurs
  </section>
  <h4>Thirty Party and Your Cookies</h4>
  <section>
    in order to run CatchaPay,  we need to share some of your data With selected thirty parties The data we share includes your Email , Ip & Your Unique identifier 
  </section>
  </br>
  <section>
    by agreeing to this privacy  policy , You're Providing CatchaPay With consent for your  Data to be collected and shared With thirty-Parties.
  </section>`
}