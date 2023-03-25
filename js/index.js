// const form = document.getElementById("formbox");
// const email = document.getElementById("uemail");
// const password = document.getElementById("upass");

// form.addEventListener("submit",function (e){
//     e.preventDefault()
//     const loc_email = localStorage.getItem("Email");
//     const loc_password = localStorage.getItem("Password");

//     if(email.value == loc_email && password.value == loc_password){
//         alert("Berhasil Login!");
//         window.location.href = "dashboard.html";
//     } else{
//         alert("Gagal Login!")
//     }
// })
const button = document.getElementById("former");
var email = document.getElementById("uemail");
var pass = document.getElementById("upass");

button.addEventListener('submit', function(e){
    e.preventDefault()
    const keys = Object.keys(localStorage);

    const arremail = keys.filter(key => key.startsWith('email'));
    const arrpass = keys.filter(key => key.startsWith('password'));
    const loc_user = JSON.parse(localStorage.getItem(arremail));
    const loc_pass = JSON.parse(localStorage.getItem(arrpass));

    if(loc_user.indexOf(email.value) !== -1  && loc_pass.indexOf(pass.value) !== -1 )  
    {   
        if(loc_user.indexOf(email.value) == loc_pass.indexOf(pass.value)){
            alert("Login Succesfully!   :)")
            window.location.href = 'dashboard.html'
        } else  {
            alert("Login Failed :(")
        } 
    }   
    else  
    {alert("Login Failde :(")}    
});