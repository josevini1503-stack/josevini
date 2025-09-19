// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Wise men say", time: 06 },
  { text: "Only fools rush in", time: 10 },
  { text: "But I can't help", time: 14 },
  { text: "Falling in love with you", time: 17 },
  { text: "Shall I stay", time: 28 },
  { text: "Would it be a sin", time: 32 },
  { text: "If I can't help", time: 36 },
  { text: "Falling in love with you?", time: 39 },
  { text: "Like a river flows", time: 50 },
  { text: "Surley to the sea", time: 54 },
  { text: "Darling, so it goes", time: 58 },
  { text: "Some things are meant to be", time: 62 },
  { text: "Take my hand", time: 73 },
  { text: "Take my whole life, too", time: 77 },
  { text: "For i can't help", time: 81 },
  { text: "Falling in love with you", time: 84 },
  { text: "Like a river flows", time: 95 },
  { text: "Surely to the sea", time: 99 },
  { text: "Darling, so it goes", time: 103 },
  { text: "Some things are meant to be", time: 107 },
  { text: "Take my hand", time: 118 },
  { text: "Take my whole life, too", time: 122 },
  { text: "For I can't help", time: 126 },
  { text: "Falling in love with you", time: 129 },
  { text: "For I can't help", time: 140 },
  { text: "Falling in love with you", time: 143 },
  { text: "I love you so much", time: 160 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);