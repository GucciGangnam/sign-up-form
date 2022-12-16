// close notif button
function closeNotif() {
    let notif = document.getElementById("notif")
    let content = document.getElementById("content")

    notif.style.display = "none";
    content.style.filter = "blur(0px)";
 }




//chacks validity of password and pops notif if no good
function validChecker() {
    let password = document.getElementById("password")
    let notif = document.getElementById("notif")
    let content = document.getElementById("content")
    let firstname = document.getElementById("first-name")
    let lastname = document.getElementById("last-name")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")

 if ((firstname.checkValidity() == true) && (lastname.checkValidity() == true) && (email.checkValidity() == true) && (phone.checkValidity() == true) && (password.checkValidity() == false))
 {
    notif.style.display = "";
    content.style.filter = "blur(8px)";
    return false
  }
 }




