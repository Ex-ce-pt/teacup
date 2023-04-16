const audio = new Audio("./public/snd_hitcar.ogg");
const image = document.querySelector('img');

image.onclick = () => {
    audio.play();
}
