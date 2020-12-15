const sounds = [
    "sound1",
    "sound2",
    "sound3",
    "sound4"
];

sounds.forEach((sounds) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click' , () => {
        document.getElementById(sound).play();
    })

    document.body.appendChild(btn);
})