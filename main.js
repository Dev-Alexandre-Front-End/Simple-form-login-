const icon = document.querySelector(".fa-eye");
const usr_pass = document.querySelector("#usr_passrd");
const usr_gmail = document.querySelector("#usr_email");
const usr_check = document.querySelector("#check");

const er_email = document.querySelector("#emal-u");
const er_password = document.querySelector("#pass-u");
const er_check = document.querySelector("#chec-u");

const btn = document.querySelector("#usr-submit");
const form = document.querySelector("form");

const emailRegex = /^\S+@\S+\.\S+$/;
const passwRegex = /\s/;

function iconBTN() {
  if (usr_pass.type === "password") {
    usr_pass.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    usr_pass.type = "password";
    icon.classList.add("fa-eye");
    icon.classList.remove("fa-eye-slash");
  }
}

btn.addEventListener('click', (event) => {
  event.preventDefault();
  
  const pass = usr_pass.value;
  const gmail = usr_gmail.value.trim();
  const check = usr_check.checked;
  
  er_email.classList.remove("ema");
  er_password.classList.remove("pas");
  er_check.classList.remove("che");
  
  usr_gmail.classList.remove("error");
  usr_pass.classList.remove("error");

  if (!emailRegex.test(gmail) || !gmail.endsWith("@gmail.com")) {
    er_email.classList.add("ema");
    usr_gmail.classList.add("error");
    return;
  }
  
  if (passwRegex.test(pass) || pass.length < 6) {
    er_password.classList.add("pas");
    usr_pass.classList.add("error");
    return;
  }

  if (!check) {
    er_check.classList.add("che");
    return;
  }
  
  btn.classList.add("sub");
  btn.innerHTML = "";

  setTimeout(() => {
    btn.classList.remove("sub");
    btn.innerHTML = "ENVIADO";
    btn.disabled = true;

    form.reset();

    er_email.classList.remove("ema");
    er_password.classList.remove("pas");
    er_check.classList.remove("che");

    usr_gmail.classList.remove("error");
    usr_pass.classList.remove("error");
  }, 5000);
});