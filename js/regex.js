const regexTelefono = /^\+?\d{1,3}\s?\d{3}[- ]?\d{6,7}$/;
const regexURL = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})([\/\w.-]*)*\/?$/i;
const regexPass = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

// Teléfono
document.getElementById("form-telefono").addEventListener("submit", e => {
  e.preventDefault();
  const valor = document.getElementById("telefono").value.trim();
  const msg = document.getElementById("msg-telefono");
  if(regexTelefono.test(valor)){
    msg.textContent = " Teléfono válido";
    msg.className = "msg ok";
  } else {
    msg.textContent = " Teléfono inválido";
    msg.className = "msg error";
  }
});

// URL
document.getElementById("form-url").addEventListener("submit", e => {
  e.preventDefault();
  const valor = document.getElementById("url").value.trim();
  const msg = document.getElementById("msg-url");
  if(regexURL.test(valor)){
    msg.textContent = " URL válida";
    msg.className = "msg ok";
  } else {
    msg.textContent = " URL inválida";
    msg.className = "msg error";
  }
});

// Contraseña
document.getElementById("form-pass").addEventListener("submit", e => {
  e.preventDefault();
  const valor = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg-pass");
  if(regexPass.test(valor)){
    msg.textContent = " Contraseña segura";
    msg.className = "msg ok";
  } else {
    msg.textContent = " Contraseña no cumple los requisitos";
    msg.className = "msg error";
  }
});

