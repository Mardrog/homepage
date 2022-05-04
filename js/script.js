console.log("Witam programistów!");

let hidePhoto = document.querySelector(".js-hideSelfieButton");
let selfie = document.querySelector(".js-selfie");
let buttonWord = document.querySelector(".js-hide");
let body = document.querySelector(".body");
let changeTheme = document.querySelector(".js-changeThemeButton");
let themeName = document.querySelector(".js-theme");

hidePhoto.addEventListener("click", () => {
    selfie.classList.toggle("header__button--hideSelfie");
    selfie.classList.contains("header__button--hideSelfie") ? buttonWord.innerText = "Pokaż" : buttonWord.innerText = "Ukryj";
});

changeTheme.addEventListener("click", () => {
    body.classList.toggle("header__button--changeTheme");
    body.classList.contains("header__button--changeTheme") ? themeName.innerText = "białe" : themeName.innerText = "żółte";
});