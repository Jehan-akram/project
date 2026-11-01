

let links = document.getElementById("links")
let userData = document.getElementById("user_info")
let user = document.getElementById("user")

if(localStorage.getItem("loggedInUser")){
    links.remove()
    userData.style.display="flex";
    user.innerHTML = localStorage.getItem("loggedInUser")
    user.style.textTransform = "capitalize";
}
let LogOut = document.getElementById("logout").onclick = ()=>{
    localStorage.clear()
    window.location = "register.html"
}