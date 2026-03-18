// First NAME
let firstNameInput = document.getElementById("first-name-input")
let firstNameError = document.getElementById("first-name-error")
let emptyFirstName = document.getElementById("empty-first-name")

// Last name
let lastNameInput = document.getElementById("last-name-input")
let lastNameError = document.getElementById("last-name-error")
let emptyLastName = document.getElementById("empty-last-name")

// email
let email = document.getElementById("email")
let emailError = document.getElementById("email-error")
let emptyEmail = document.getElementById("empty-email")

// phone
let phone = document.getElementById("phone")
let phoneError = document.getElementById("phone-error")
let emptyPhone = document.getElementById("empty-phone")

// password
let passwordInput = document.getElementById("password")
let passwordError = document.getElementById("password-error")
let emptyPassword = document.getElementById("empty-password")

//Confirm password
let verifyPassword = document.getElementById("verify-password")
let verifyPasswordError = document.getElementById("verify-password-error")
let emptyVerifyPassword = document.getElementById("empty-verify-password")

// Button
let btn = document.getElementById("submit-button")

// verify
let validClasses = document.getElementsByClassName("valid")
let invalidClasses = document.getElementsByClassName("error")

// password Verification
 const passwordVerify = (password)=>{
 const passwordRegex =  /^(?=.+[a-z])(?=.+[A-Z])(?=.+[0-9])(?=.+[\$\%\^\&\!@\#\*\(\)\+\=`~\?\>\<])/;
 return passwordRegex.test(password) && password.length >=8

 } 

 // text verification
 const textVerify = (text)=>{
   const textRegex = /^[A-Za-z]+$/;
   return textRegex.test(text) 
}

// phone verification
const phoneVerify = (number)=>{
   const phoneRegex =  /^[0-9]{10}$/;
   return phoneRegex.test(number) && number.length >=10
}

// email verification
const emailVerify = (email)=>{
   const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;;
   return emailRegex.test(email)
}

// If input gets Empty
const emptyUpdate =(inputReference , emptyErrorReference , otherErrorReference)=>{
   if(!inputReference.value){
       emptyErrorReference.classList.remove("hide")
       otherErrorReference.classList.add("hide")
       inputReference.classList.add("error")
   }
   else{
      emptyErrorReference.classList.add("hide")
   }
}

// styling and displaying the input error message
const errorUpdate = (inputReference,errorReference)=>{
   errorReference.classList.remove("hide")
   inputReference.classList.remove("valid")
   inputReference.classList.add("error")

}

// for no error
const validInput =(inputReference)=>{
   inputReference.classList.add("valid")
   inputReference.classList.remove("error")
}

// first name
firstNameInput.addEventListener("input",()=>{
   if(textVerify(firstNameInput.value)){
      // if verification occurs true
      firstNameError.classList.add("hide")
      validInput(firstNameInput)
   }
   else{
      // for false
      errorUpdate(firstNameInput , firstNameError)
      // for empty
      emptyUpdate(firstNameInput,emptyFirstName,firstNameError)
   }
});

// last name
lastNameInput.addEventListener("input",()=>{
   if(textVerify(lastNameInput.value)){
      // if verification occurs true
      lastNameError.classList.add("hide")
      validInput(lastNameInput);
   }
   else{
      // for false
      errorUpdate(lastNameInput , lastNameError)
      // for empty
      emptyUpdate(lastNameInput,emptyLastName,lastNameError)
   }
});

// phone
phone.addEventListener("input",()=>{
   if(phoneVerify(phone.value)){
      // if verification occurs true
      phoneError.classList.add("hide")
      validInput(phone)
   }
   else{
      // for false
      errorUpdate(phone , phoneError)
      // for empty
      emptyUpdate(phone,emptyPhone,phoneError)
   }
});

// email
email.addEventListener("input",()=>{
   if(emailVerify(email.value)){
      // if verification occurs true
      emailError.classList.add("hide")
      validInput(email)
   }
   else{
      // for false
      errorUpdate(email , emailError)
      // for empty
      emptyUpdate(email,emptyEmail,emailError)
   }
});

// password

passwordInput.addEventListener("input",()=>{
   if(passwordVerify(passwordInput.value)){
      // if verification occurs true
      passwordError.classList.add("hide")
      validInput(passwordInput)
   }
   else{
      // for false
      errorUpdate(passwordInput ,passwordError)
      // for empty
      emptyUpdate(passwordInput,emptyPassword,passwordError)
   }
});
// confirm password
verifyPassword.addEventListener("input",()=>{
   if(verifyPassword.value === passwordInput.value){
      verifyPasswordError.classList.add("hide")
      validInput(verifyPassword)
   }
   else{
      // for false
      errorUpdate(verifyPassword ,verifyPasswordError)
      // for empty
      emptyUpdate(verifyPassword,emptyVerifyPassword,verifyPasswordError)
   }
});

btn.addEventListener("click", () => {
  if (validClasses.length == 6 && invalidClasses.length == 0) {
    alert("Success");
  } else {
    alert("Error");
  }
});

