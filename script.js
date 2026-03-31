const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("messageInput");
const chatBox = document.getElementById("chatBox");

// Send message
sendBtn.addEventListener("click", sendMessage);

// Enter key support
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const message = input.value.trim();

    if (message === "") return;

    // Create message element
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", "sent");
    msgDiv.innerText = message;

    chatBox.appendChild(msgDiv);

    // Auto scroll
    chatBox.scrollTop = chatBox.scrollHeight;

    input.value = "";

    // Fake reply (simulate real-time)
    setTimeout(() => {
        receiveMessage("Auto reply 🤖");
    }, 1000);
}

function receiveMessage(text) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", "received");
    msgDiv.innerText = text;

    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
