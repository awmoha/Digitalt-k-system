let addButton = document.querySelector("#addText");
let textInput = document.querySelector("#newName");
let addVipButton = document.querySelector("#vip");
let myList = document.querySelector("#myList");
let removButton = document.querySelector("#remove");
let messege = document.querySelector("#messege")
messege.style.display= "inline";

//funktionalitet för time
var time = document.querySelector(".time");
function setTime() {
  var d = new Date();
  time.innerHTML = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
}
setInterval(setTime, 1000);
//funktionalitet för date
var dt = new Date();
document.querySelector(".date").innerHTML = dt.toLocaleDateString();

//funktionalitet för add button button
addButton.addEventListener("click", () => {
 messege.style.display = "none";
  //om man skriver ingenting i inputfältetr och sen klicka på button så skriv ut detta i alert.
  if (textInput.value === "") {
    alert("You must write something!");
  } else {
    let listPerson1 = document.createElement("li");
    listPerson1.innerHTML = `<h4> Name: ${textInput.value}  <h4>`;
    myList.appendChild(listPerson1);
   textInput.value = "";
  }
});

//funktionalitet för add Vip button button
addVipButton.addEventListener("click", function(e) {
  messege.style.display = "none";
  if (textInput.value === "") {
    alert("You must write something!");
  } else { 
  e.preventDefault();
  let vipbtn = document.createElement("li")
  myList.insertBefore(vipbtn, myList.firstChild);
  vipbtn.innerHTML = `<h4> Name: ${textInput.value} (VIP) <h4>`;
  textInput.value = "";
  appendChild(vipbtn);
  
}
});
//funktionalitet för remove button
removButton.addEventListener("click", () => {
  let child = document.querySelector("li");
  child.parentNode.removeChild(child); 
  if (myList.children.length === 0) {
    messege.style.display= "inline";
    messege.innerHTML = `<h2> There are currently no people standing in line.<h2>`;
  }
});


