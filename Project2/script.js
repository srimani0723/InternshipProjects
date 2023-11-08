let myForm = document.getElementById("myForm");
let success = document.getElementById("success");

let nameEl = document.getElementById("fname");
let nameerrmsgEl = document.getElementById("nameerrmsg");

let usernameEl = document.getElementById("username");
let usernameerrmsgEl = document.getElementById("usernameerrmsg");

let emailEl = document.getElementById("email");
let emailerrmsgEl = document.getElementById("emailerrmsg");

let passEl = document.getElementById("psd");
let passerrmsgEl = document.getElementById("passerrmsg");

let cpassEl = document.getElementById("cpsd");
let cpasserrmsgEl = document.getElementById("cpasserrmsg");

let gendermale = document.getElementById("male");
let genderfemale = document.getElementById("female");

let formData = {
     name: "",
     username: "",
     email: "",
     gender: "Male",
     password: "",
     confirmpassword: ""
}

let validateall = {
     name: false,
     username: false,
     email: false,
     gender: false,
     password: false,
     confirmpassword: false
}
     

function validateEmail(email) {
     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     return emailPattern.test(email);
}

function validatePassword(password) {
     if (password.length < 8) {
     return false;
     }
     if (!/[A-Z]/.test(password)) {
     return false;
     }
     if (!/[a-z]/.test(password)) {
     return false;
     }
     if (!/\d/.test(password)) {
     return false;
     }
     return true;
}

function validateUsername(username, minLength, maxLength) {
     const usernamePattern = /^[a-z0-9]+$/;
     const usernameLength = username.length;
     
          return (
          usernameLength >= minLength &&
          usernameLength <= maxLength &&
          usernamePattern.test(username)
          );
}

function validate(formData){
     
     if(formData.name === ""){
          nameerrmsgEl.textContent = "Required*";
          validateall.name = false;
     }else{
          validateall.name = true;
     }

     if (formData.username === ""){
          usernameerrmsgEl.textContent = "Required*";
          validateall.username = false;
     }else if(validateUsername(formData.username,6,15)){
          usernameEl.classList.add("valid");
          usernameEl.classList.remove("invalid");
          validateall.username = true;
     }else{
          usernameerrmsgEl.textContent = "Enter the valid username";
          usernameEl.classList.add("invalid");
          usernameEl.classList.remove("valid");
          validateall.username = false;
     }

     if (formData.email === ""){
          emailerrmsgEl.textContent = "Required*";
          validateall.email = false;
     }else if(validateEmail(formData.email)){
          emailEl.classList.add("valid");
          emailEl.classList.remove("invalid");
          validateall.email = true;
     }else{
          emailerrmsgEl.textContent = "Enter the valid email";
          emailEl.classList.remove("valid");
          emailEl.classList.add("invalid");
          validateall.email = false;
     }

     if(formData.password === ""){
          passerrmsgEl.textContent = "Required*";
          validateall.password = false;
     }else if(validatePassword(formData.password)){
          passEl.classList.add("valid");
          passEl.classList.remove("invalid");
          validateall.password = true;
     }else{
          passerrmsgEl.textContent = "Enter the valid password"
          passEl.classList.add("invalid");
          passEl.classList.remove("valid");
          validateall.password = false;
     }

     if(formData.confirmpassword === ""){
          cpasserrmsgEl.textContent = "Required*";
          validateall.confirmpassword = false;
     }else if(formData.confirmpassword !== formData.password){
          cpasserrmsgEl.textContent = "confirm password is not same as password"
          cpassEl.classList.add("invalid");
          cpassEl.classList.remove("valid");
          validateall.confirmpassword = false;
     }else if(formData.confirmpassword === formData.password){
          cpassEl.classList.add("valid");
          cpassEl.classList.remove("invalid");
          validateall.confirmpassword = true;
     }

     if(validateall.email && validateall.name && validateall.username && validateall.password && validateall.confirmpassword){
          return true;
     }
}

nameEl.addEventListener("blur",function(event){
     if(event.target.value === ""){
          nameerrmsgEl.textContent = "Required*";
     }else{
          nameerrmsgEl.textContent = "";
     }
     formData.name = event.target.value;
     validate(formData);
});

usernameEl.addEventListener("blur",function(event){
     if(event.target.value === ""){
          usernameerrmsgEl.textContent = "Required*";
     }else{
          usernameerrmsgEl.textContent = "";
     }
     formData.username = event.target.value;
     validate(formData);
});

emailEl.addEventListener("blur",function(event){
     if(event.target.value === ""){
          emailerrmsgEl.textContent = "Required*";
     }else{
          emailerrmsgEl.textContent = "";
     }
     formData.email = event.target.value;
     validate(formData);
});

passEl.addEventListener("blur",function(event){
     if(event.target.value === ""){
          passerrmsgEl.textContent = "Required*";
     }else{
          passerrmsgEl.textContent = "";
     }
     formData.password = event.target.value;
     validate(formData);
});

cpassEl.addEventListener("blur",function(event){
     if(event.target.value === ""){
          cpasserrmsgEl.textContent = "Required*";
     }else{
          cpasserrmsgEl.textContent = "";
     }
     formData.confirmpassword = event.target.value;
     validate(formData);
});

myForm.addEventListener("submit",function(event){
     event.preventDefault();
     if (validate(formData)){
          myForm.classList.add("d-none");
          success.classList.remove("d-none");
     }
});