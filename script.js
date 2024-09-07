document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('backgroundAudio');
  
  // Check if the browser supports the audio element
  if (audio) {
    // Wait for user interaction to play the audio
    document.addEventListener('click', function playAudio() {
      audio.play();
      // Remove the event listener to prevent multiple plays
      document.removeEventListener('click', playAudio);
    });
  }
});
