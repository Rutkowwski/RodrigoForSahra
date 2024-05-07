document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.querySelector('.heart').style.display = 'none';
  }, 500000); // O coração desaparecerá após 50 segundos
});
function playMusic() {
    var audio = document.getElementById("myAudio");
    audio.play();
}

function revealSurprise() {
    var surpriseDiv = document.getElementById("surpriseMessage");
    surpriseDiv.style.display = "block";
}
