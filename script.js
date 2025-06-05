let timer;
let timeLeft = 20; // Время работы в секундах

document.getElementById('start').addEventListener('click', () => {
  clearInterval(timer);
  timeLeft = 20;
  updateDisplay();
  timer = setInterval(() => {
    timeLeft--;
    updateDisplay();
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert('Раунд завершён!');
    }
  }, 1000);
});

function updateDisplay() {
  document.getElementById('timer').textContent = `00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
}
