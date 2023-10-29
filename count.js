const numberElement = document.getElementById('number');
const increment = 0.069; // Increment increase
const animationDuration = 1000; // Duration of animation in milliseconds

const startButton = document.getElementById('start-button');
const numberContainer = document.querySelector('.number-container');

startButton.addEventListener('click', () => {
  startButton.style.display = 'none'; // Hide the button after it's clicked
  numberContainer.style.display = 'block'; // Display the number container

  let currentNumber = 0; // Initial number
  const targetNumber = 17; // Final number shown

  const updateNumber = () => {
    if (currentNumber < targetNumber) { // Check if final number has been reached yet
      currentNumber += increment;
      numberElement.textContent = currentNumber.toFixed(2); // toFixed limits number of decimal places
      setTimeout(updateNumber, animationDuration / (targetNumber / increment));
    } else {
      numberElement.textContent = targetNumber;
    }
  };

  updateNumber();
});
