let PasswordEl = document.getElementById("passwordInput");
let EyeIconEl = document.getElementById("ImageInput");

function updateEyeIcon() {
    if (PasswordEl.value === "") {
        EyeIconEl.src = "../assets/images/open_eye-logo.png";
    }
    
    else {
        EyeIconEl.src = "../assets/images/open_eye-logo.png";
    }
}

PasswordEl.addEventListener("input", updateEyeIcon);
        
EyeIconEl.onclick = function() {
    if (PasswordEl.value === "") {
        return;
    }
            
    if (PasswordEl.type === "password") {
        PasswordEl.type = "text";
        EyeIconEl.src = "../assets/images/close_eye-logo.png";
    }
    
    else {
        PasswordEl.type = "password";
        EyeIconEl.src = "../assets/images/open_eye-logo.png";
    }
};

updateEyeIcon();
