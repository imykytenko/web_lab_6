function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function sendMessage(user) {
    const messageInput = document.getElementById(user === 'user1' ? 'user1Message' : 'user2Message');
    const message = messageInput.value;

    if (message.trim() === '') {
        alert('Введіть текст повідомлення!');
        return;
    }

    const newMessage = document.createElement('p');
    newMessage.textContent = message;
    newMessage.classList.add('message'); // Додайте клас .message до нового повідомлення

    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');

    if (user === 'user1') {
        messageContainer.classList.add('user1');
    } else {
        messageContainer.classList.add('user2');
    }

    messageContainer.appendChild(newMessage);
    document.getElementById('chat').appendChild(messageContainer);

    messageInput.value = '';
}