const profileuser = JSON.parse(localStorage.getItem("user",0))
const tampil = document.getElementById("username")
tampil.innerHTML = profileuser;

function saveprofile() {
var usernameinput = document.getElementById("nama");
var userbirthinput = document.getElementById("ttl");
var useremailinput = document.getElementById("email");
var useraddresinput = document.getElementById("alamat");
var usergenderinput = document.getElementById("jk");
var userjobinput = document.getElementById("job");
var userneedinput = document.getElementById("need");

const button = document.getElementById("profform")
button.addEventListener("submit", function(e){
        e.preventDefault()
        alert ('Save Profile Succesfully!  :)');
        window.location.href = 'dashboard.html';
      });

var username = usernameinput.value.trim();
var userbirth = userbirthinput.value.trim();
var useremail = useremailinput.value.trim();
var useraddres = useraddresinput.value.trim();
var usergender = usergenderinput.value.trim();
var userjob = userjobinput.value.trim();
var userneed = userneedinput.value.trim();

if (!username || !userbirth || !useremail){
    return;
}

var userprofile = {
    username : username,
    userbirth : userbirth,
    usermail: useremail,
    useraddress: useraddres,
    usergender: usergender,
    userjob: userjob,
    userneed: userneed
};

sessionStorage.setItem("userprofile", JSON.stringify(userprofile)
)}