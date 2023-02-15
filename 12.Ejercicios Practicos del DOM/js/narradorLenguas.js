export default function speechReader() {
  function speechReader() {
    const $speechSelect = document.getElementById("speech-select");
    const $speechTextarea = document.getElementById("speech-text");
    const $speechBtn = document.getElementById("speech-btn");
    const speechMessage = new SpeechSynthesisUtterance();
    let voices = [];
  
    window.addEventListener("load", () => {
        voices = window.speechSynthesis.getVoices();
        console.log("voices");
  
        voices.forEach((voice) => {
          const $option = document.createElement("option");
          $option.value = voice.name;
          $option.textContent = `${voice.name} ${voice.lang}`;
          $speechSelect.appendChild($option);
        });
      });
  
    document.addEventListener("change", (e) => {
      if (e.target === $speechSelect) {
        speechMessage.voice = voices.find(
          (voice) => voice.name === $speechSelect.value
        );
      }
    });
  
    document.addEventListener("click", (e) => {
      if (e.target === $speechBtn) {
        speechMessage.text = $speechTextarea.value;
        window.speechSynthesis.speak(speechMessage);
      }
    });
  }
  
    speechReader()
}
