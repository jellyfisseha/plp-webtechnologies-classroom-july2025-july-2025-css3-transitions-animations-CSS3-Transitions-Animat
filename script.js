// Function to generate random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to animate the box
function animateBox(boxId) {
  const box = document.getElementById(boxId);
  box.style.backgroundColor = getRandomColor();
  box.classList.add('pulse');
  setTimeout(() => {
    box.classList.remove('pulse');
  }, 600);
}

// Button triggers box animation
document.getElementById('animateBtn').addEventListener('click', () => {
  animateBox('box');
});
