const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
    createnotification();
});

function createnotification(){

    const notif = document.createElement
    ('div');
    notif.classList.add('toast');

    notif.innerText = 'This Challange is crazy'

    container.appendChild(notif);

    setTimeout( () => {
        notif.remove();
    } , 2000);
}