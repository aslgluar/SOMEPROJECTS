const open =document.getElementById('openbtn');
const close =document.getElementById('closebtn');
const container =document.getElementById('container');

open.addEventListener('click', () => {
    container.classList.add('active');
});
close.addEventListener('click', () => {
    container.classList.remove('active')
})