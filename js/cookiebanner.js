const body = document.querySelector("body");
const cookieButton = document.querySelector("#acceptcookies");


cookieButton.addEventListener("click", () => {
    body.classList.remove("cookiebar-active");
    localStorage.setItem("cookieAccepted", "true")
});

setTimeout(() => {
    if (!localStorage.getItem("cookieAccepted"))
        body.classList.add("cookiebar-active");
}, 2000);