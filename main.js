var samwel = document.getElementById("samwel");
var email = document.getElementById("email");
var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");
var submit = document.getElementById("submit");
var password = document.getElementById("Password");

console.log(email, label1, label2, submit, samwel.value);
console.log(samwel.value.length);
submit.addEventListener("click", validate);
console.log(password);
function validate() {
  if (samwel.value.length <= 9) {
    setTimeout(() => {
      label1.style.display = "block";
    }, 1000);
    setInterval(() => {
      label1.style.display = "none";
    }, 4000);
  }

  if (email.value.length <= 9) {
    setTimeout(() => {
      label2.style.display = "block";
    }, 1000);
    setInterval(() => {
      label2.style.display = "none";
    }, 4000);
  }

  if (password.value.length <= 9) {
    setTimeout(() => {
      label3.style.display = "block";
    }, 1000);
    setInterval(() => {
      label3.style.display = "none";
    }, 4000);
  }

  if (samwel.value.length >= 6 || email.value.length >= 6) {
    submit.setAttribute("href", "copy.html");
  }
}
