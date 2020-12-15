const socket = io();
const chat = document.querySelector('.chat-form')
const input = document.querySelector('.chat-input')
const chatWindow = document.querySelector('.chat-window')
const bubble = document.querySelector('.bubble')


chat.addEventListener('submit', event => {
    event.preventDefault()
    socket.emit('new message' , input.value)
    input.value=''
})

socket.on('new message', message => {
    console.log('From server: ', message)
  })

  const renderMessage = message => {
    // const div = document.createElement('div')
    bubble.classList.add('render-message')
    bubble.innerText = message
    chatWindow.appendChild(bubble)
  }
  
  socket.on('new message', message => {
   
    renderMessage(message)
    
  })