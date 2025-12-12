export async function popLOGIN(param) {
  var pop = document.getElementById("popUpLogin")
  if(!pop){
    pop = document.createElement('div')
    pop.className = "popLOGIN"
    pop.id="popUpLogin"
    pop.style=`justify-content: center;
  color: #888;
  position: fixed;
  top: 30px;
  left: 150px
  justify-self: center;
  background: white;
  width: 70%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  align-self: center;
  animation: slow 0.5s ease-in-out;display: flex;
  z-index: 100000;
`
document.body.appendChild(pop)
  }
  pop.innerHTML = `<span>login in...</span>`
}
export function withdrawalPOP(){
  var pop = document.getElementById("WithdrawalsReqDiv")
  if(!pop){
    pop = document.createElement("div")
    pop.id="WithdrawalsReqDiv"
    pop.style=` justify-content: center;
  color: #888;
  position: fixed;
  top: 30px;
  left: 50px;
  z-index: 1000000;
  justify-self: center;
  background: white;
  width: 70%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  animation: slow 0.5s ease-in-out;display: flex;`
  pop.className = "popLOGIN"
  document.body.appendChild(pop)
  }
  pop.innerHTML = '<span> please wait ...</span>'
}
export function withdrawalPOPSu() {
  document.getElementById("WithdrawalsReqDiv").innerHTML = " ✔️ Cashed out Successfully "
  document.getElementById('WithdrawalsReqDiv').style.color="green"
}
export function stopAllPop(){
  var pops = document.querySelector(".popLOGIN")
  pops.remove()
}
