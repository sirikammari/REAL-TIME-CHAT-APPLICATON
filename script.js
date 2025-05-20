const ws = new WebSocket('ws://localhost:8080');
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('messageInput');

ws.onopen = () => {
    console.log('Connected to WebSocket server');
};

ws.onmessage = (event) => {
    showMessage(event.data, 'incoming');
};

ws.onclose = () => {
    console.log('Disconnected from WebSocket server');
};

function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== '') {
        ws.send(message);
        showMessage(message, 'outgoing');
        messageInput.value = '';
    }
}

function showMessage(message, type) {
    const div = document.createElement('div');
    div.className = `chat-message ${type}`;
    div.textContent = message;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}