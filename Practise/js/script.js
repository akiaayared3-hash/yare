
const email = document.getElementById("email-check");
const password = document.getElementById("password-check");
const form = document.getElementById("form-valid");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (
        email.value !== "" && 
        email.value.includes("@") &&
        password.value.length >= 8) {
        alert("form submitted scuccessfully");
    }

    if (email.value === "") {
        email.style.border = "2px solid red";
    }

    else {
        alert("invalid email or password");
    }
    
})
