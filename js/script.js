var link = document.querySelector(".map-btn");
var popup = document.querySelector(".modal-wrapper");
var close = document.querySelector(".modal-close");
var form = popup.querySelector(".modal-feedback");
var name = popup.querySelector("[name=your_name]");
var email = popup.querySelector("[name=email_form");
var enter = document.querySelector(".control-login-form");
var login = enter.querySelector("[name=email]");
var password = enter.querySelector("[name=password]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!name.value & !email.value){
    evt.preventDefault();
    alert("Нужно заполнить имя и email");
  }
});

enter.addEventListener("submit", function(evt){
  if (!login.value || !password.value){
    evt.preventDefault();
    alert("Заполните email и пароль");
  }
});
