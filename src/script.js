const email = document.getElementById("email");
const submit = document.getElementById("submit");
const errorMessage = document.querySelector(".error-message");

submit.addEventListener("click", function (e) {
  console.log(validateEmail(email));
});

function validateEmail(emailId) {
  var mailformat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (emailId.value.match(mailformat)) {
    email.classList.add("success");
    location.reload();
    return true;
  } else {
    email.classList.add("error");
    errorMessage.style.display = "block";
    return false;
  }
}

email.addEventListener("click", (e) => {
  if (email.classList.contains("error")) {
    email.classList.remove("error");
    errorMessage.style.display = "none";
  }
});
