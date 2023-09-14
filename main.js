const startButton = document.getElementById("start")
const words = document.getElementById("audio-to-text")

let speech = false
let recognition = null

function captureAudio() {
  if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()

    recognition.lang = navigator.language

    recognition.onresult = function(event) {
      let transcript = event.results[0][0].transcript;
  
      words.innerHTML = `Text: ${transcript}`
    }

    recognition.start()
  }
}

startButton.addEventListener("click", captureAudio)