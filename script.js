let errorMessage = document.getElementById("errorMessage");

function validate(){

    let emailAddress = document.getElementById("emailAddress").value;
    let password = document.getElementById("password").value;

    errorMessage.innerTex = "";

    if(emailAddress.length==0){
        errorMessage.classList.remove("hidden");
        errorMessage.innerText = "Enter values of lenght > 0";
        return false;
    }

    if(!isValidEmail(emailAddress)){
        errorMessage.classList.remove("hidden");
        errorMessage.innerText = "Invalid email address...\nOnly Gmail account is allowed...";
        return false;
    }

    if(password.length < 8){
        errorMessage.classList.remove("hidden");
        errorMessage.innerText = "\nPassword should contain at least 8 characters.";
        return false;
    }

    alert("Login Successful.");
    return true;
    
}

function isValidEmail(email){
    if (email.endsWith("@gmail.com")){
        return true;
    }
    return false;
}
