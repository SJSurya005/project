const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

var homescr=document.getElementById("homescr")
var backg=document.getElementById("backg")
var loginscr=document.getElementById("container")

function openlogin(){
    homescr.style.display="none";
    loginscr.style.display="block";
    backg.style.display="block";
}