const joinBtn = document.querySelector(".enter-char-room-btn button");
const UsernameInput = document.querySelector("#usernameInput");
const logInPage = document.querySelector(".log-in-container");
const chatPage = document.querySelector(".main-container");
const sendBtn = document.querySelector(".send-button");
const chatContainer = document.querySelector(".chat-container");
const messageInput = document.querySelector(".input");
let username = '';
let socket = io();

joinBtn.addEventListener("click", (event) => {
    event.preventDefault();
    username = UsernameInput.value;
    if (username !== '') {
        logInPage.style.display = "none";
        chatPage.style.display = "flex";
        // socket =;
    }

})


sendBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // here we are emiting the data throught this `chat message` event
    // dat => { username/ socketId (more secure because username can be same and 
    //we are not haviing any checks for username), message}

    // Creating the data Obj

    if (messageInput.value === '') return;
    let data = {
        id: socket.id,
        message: messageInput.value,
        username: username,
    }
    // STEP 1
    socket.emit('chat message', data);
    appendMessage(data, 'SENT');
})

// STEP 4
socket.on('chat message', data => {
    console.log("Data", data);
    if (data.id !== socket.id) {
        appendMessage(data, 'RECIEVED');
    }
})

function appendMessage(data, type) {
    let messageDiv = document.createElement("div");
    messageDiv.innerHTML = `${data.username} : ${data.message}`
    messageDiv.classList.add("messege")
    if (type === "SENT") {
        messageDiv.classList.add("send")
    }
    chatContainer.appendChild(messageDiv);
    messageInput.value = "";
}

