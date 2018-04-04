var link = document.querySelector(".map-btn");
var popup = document.querySelector(".modal-wrapper");
var modal = popup.querySelector(".modal");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var names = popup.querySelector("[name=your_name]");
var email = popup.querySelector("[name=email_form");
var enter = document.querySelector(".control-login-form");
var login = enter.querySelector("[name=email]");
var password = enter.querySelector("[name=password]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

});

form.addEventListener("submit", function (evt) {
  if (!names.value || !email.value){
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
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

enter.addEventListener("submit", function(evt){
  if (!login.value || !password.value){
    evt.preventDefault();
    enter.classList.remove("modal-error");
    enter.offsetWidth = enter.offsetWidth;
    enter.classList.add("modal-error");
  }
});
