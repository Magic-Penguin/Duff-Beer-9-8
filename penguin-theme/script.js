const toast = document.getElementById('toast');
const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
};

document.getElementById('exploreBtn').addEventListener('click', () => {
  document.getElementById('journal').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('discoverBtn').addEventListener('click', () => {
  showToast('Expedition terminal online. Choose your path.');
});

document.querySelectorAll('.card-btn').forEach((button) => {
  button.addEventListener('click', () => showToast(button.dataset.message));
});
