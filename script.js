document.addEventListener('DOMContentLoaded', function() {
    // Oculta o coração após 50 segundos
    setTimeout(function() {
        var heart = document.querySelector('.heart');
        if (heart) {
            heart.style.display = 'none';
        }
    }, 50000); // O coração desaparecerá após 50 segundos (50000 milissegundos)
});

// Função para reproduzir música
function playMusic() {
    var audio = document.getElementById("myAudio");
    if (audio) {
        audio.play();
    }
}

// Função para revelar o poema
function revealPoem() {
    var poemDiv = document.getElementById("poem");
    if (poemDiv) {
        poemDiv.style.display = "block";
    }
}
