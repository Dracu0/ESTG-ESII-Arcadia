const buttonArea = document.querySelector('.buttonArea');
const movingDiv = document.querySelector('.moving-div');

buttonArea.addEventListener('mouseenter', () => {
  movingDiv.style.animation = 'circular-loop 1.5s linear infinite';
});

buttonArea.addEventListener('mouseleave', () => {
  movingDiv.style.animation = 'none'; // Reset animation
});