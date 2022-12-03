const button = document.getElementById("login-form");
const inputFields = document.getElementsByTagName("input");
const errorText = document.getElementsByClassName("error-text");

button.addEventListener("click", () => {
  const success = Math.random() < 0.5;
  for (let i = 0; i < errorText.length; i++)
    errorText[i].style.visibility = success ? "hidden" : "visible";
  for (let i = 0; i < inputFields.length-1; i++) {
    inputFields[i].style.background = success ? "#EAF9E2" : "#F9E2E2";
    inputFields[i].style.borderColor = success ? "#154734" : "#FF0000";
  }
});
