if (typeof(Storage) !== "undefined") {
    if (localStorage.user || localStorage.password || localStorage.email) {
        var user = JSON.parse(localStorage.user);
        var password = JSON.parse(localStorage.password);
        var email = JSON.parse(localStorage.email);
    } 
    else {
        var user = [];
        var password = [];
        var email = [];
        }
} else {
    alert("Maaf browser Anda tidak mendukung web storage :(");
}

function register() {
    var newuser = document.getElementById("newuname").value;
    var newpass = document.getElementById("newupass").value;
    var newemail = document.getElementById("newuemail").value;

    if (newuser != null && newuser != "" || newpass != null && newpass != "" || newemail != null && newemail != "") {
    user.push(newuser);
    password.push(newpass);
    email.push(newemail);
    localStorage.user = JSON.stringify(user);
    localStorage.password = JSON.stringify(password);
    localStorage.email = JSON.stringify(email);
    }

    const button = document.getElementById("regform");
    button.addEventListener('submit', function(e){
        e.preventDefault()
        alert ('Register Succesfully!   :)');
        window.location.href = 'index.html';
      });
}


// function register() {
//     var usernamenew = document.getElementById("newuname");
//     var userbirthnew = document.getElementById("newupass");
//     var useremailnew = document.getElementById("newuemail");
    
//     const button = document.getElementById("regform")
//     button.addEventListener("submit", function(e){
//             e.preventDefault()
//             alert ('Register Succesfully!');
//             window.location.href = 'index.html';
//           });
    
//     var username = usernamenew.value.trim();
//     var userbirth = userbirthnew.value.trim();
//     var useremail = useremailnew.value.trim();
    
//     if (!username || !userbirth || !useremail){
//         return;
//     }
    
//     var userregister = {
//         username : username,
//         userbirth : userbirth,
//         usermail: useremail,
//     };
    
//     localStorage.setItem("userregister", JSON.stringify(userregister)
//     )}