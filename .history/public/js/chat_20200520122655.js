// @ts-nocheck


const socket = io();

socket.on('message', (message) => {
    console.log(message);
});

document.querySelector('#message-form').addEventlistener('click', (e) => {
    e.preventDefault(null);

    const message = e.target.elements.message;

    socket.emit('sendMessage', message);

});

document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your bowser');
    }
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
    });
});