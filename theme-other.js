const percentRange = document.getElementById('percentRange');
const progressBar = document.querySelector('.progress');
const percentageDisplay = document.getElementById('percentageDisplay');

percentRange.addEventListener('input', function() {
  const value = this.value;
  progressBar.style.width = value + '%';
  percentageDisplay.innerText = value + '%';
});
