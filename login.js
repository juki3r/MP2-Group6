const userInput = document.querySelector("input[name='username']");
const userPass = document.querySelector("input[name='password']");
const loginBtn = document.querySelector("button");

const userRequired = document.getElementById("userRequired");
const passRequired = document.getElementById("passRequired");
const incUserPass = document.getElementById("IncUserPassword");

function requiredField(){
    if(userInput.value === "" && userPass.value === ""){
        userRequired.style.display = 'block';
        passRequired.style.display = 'block';
    }else if(userInput.value !== "" && userPass.value === "" ){
        userRequired.style.display = 'none'
        passRequired.style.display = 'block';
    }else if(userInput.value === "" && userPass.value !== "" ){
        userRequired.style.display = 'block'
        passRequired.style.display = 'none';
    } else {
        userRequired.style.display = 'none'
        passRequired.style.display = 'none';
    }
}

function verifiedUser(){

    if(userInput.value === "" && userPass.value === ""){
        userRequired.style.display = 'block';
        passRequired.style.display = 'block';
        incUserPass.style.display = "none";
    }else if(userInput.value !== "" && userPass.value === "" ){
        userRequired.style.display = 'none'
        passRequired.style.display = 'block';
        incUserPass.style.display = "none";
    }else if(userInput.value === "" && userPass.value !== "" ){
        userRequired.style.display = 'block'
        passRequired.style.display = 'none';
        incUserPass.style.display = "none";
    }else {
        if(userInput.value == "kodego" && userPass.value == "kodego"){
            window.location.assign("https://juki3r.github.io/MP2-Group6/");
            console.log(userInput.value);
    
        } else {
            userRequired.style.display = "none";
            passRequired.style.display = "none";
            incUserPass.style.display = "block";
        }
    }
}

loginBtn.addEventListener("click", ()=>{
    verifiedUser();
});
