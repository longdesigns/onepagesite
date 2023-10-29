const phrases = [
    " games improve mental health",
    " games connect people",
    " they learn more with games",
    " they made friends with games",
    " they play games to have fun",
    " diversity in games are important"
  ];
  
  let currentPhraseIndex = 0;
  const textContainer = document.getElementById("text-container");
  let intervalId = null; // Variable to store the interval ID
  
  function changePhrase() {
    textContainer.textContent = "Australians say" + phrases[currentPhraseIndex];
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  }
  
  function startInterval() {
    intervalId = setInterval(changePhrase, 5000); // Change phrase every 5 seconds
  }
  
  function stopInterval() {
    clearInterval(intervalId); // Stop the interval
  }
  
  textContainer.addEventListener("click", function() {
    changePhrase(); // Change phrase immediately on click
    stopInterval(); // Stop the existing interval
    startInterval(); // Start a new interval
  });
  
  // Start the initial interval
  startInterval();
  