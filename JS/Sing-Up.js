const togglepasswardvisibility = (inputElement,
toggleElement) => {
    if(inputElement.type === "password"){
        inputElement.type ="text";
        toggleElement.innerHTML = '<i class="far fa-eye"></i>';
    } else {
        inputElement.type = "passward";
        toggleElement.innerHTML =  '<i class="far fa-eye-slash"></i>';
    }
}

const passwardInput = document.getElementById("passward");
const togglepassward = document.getElementById("togglepassward");
const passwardconfirm = document.getElementById("passwardconfirm");
const togglepasswardconfirm= document.getElementById("togglepasswardconfirm");

togglepassward.addEventListener("click", () => {
    togglepasswardvisibility(passwardInput,togglepassward);
});

togglepasswardconfirm.addEventListener("click", () =>
{
    togglepasswardvisibility(passwardconfirm, togglepasswardconfirm);
});

document.getElementById("signinform").addEventListener("submit",((event)=>{  
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("passward").value;
    const confirmPassword = document.getElementById("passwardconfirm").value;

    // Simulate successful sign-up
    if(password == confirmPassword) {
        alert("Sign-up successful!");
        window.location.href = "Sign-in.html"; // Redirect to sign-in page
        return;
    }
    else {
        document.getElementById("error-message").style.display = "block";
        document.getElementById("error-message").innerHTML = "Passwords do not match.";
        return;
    }
    }));