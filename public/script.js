const joinBtn = document.querySelector(".enter-char-room-btn button");
const UsernameInput = document.querySelector("#usernameInput");
const logInPage = document.querySelector(".log-in-container");
const chatPage = document.querySelector(".main-container");
let username = '';

joinBtn.addEventListener("click", (event) => {
    event.preventDefault();
    username = UsernameInput.value;
    if (username !== '') {
        logInPage.style.display = "none";
        chatPage.style.display = "flex";
        console.log(username);
    }

})