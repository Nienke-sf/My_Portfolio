console.log('main.js loaded');


function openForm(modalId) {
  document.getElementById('mySkill').classList.remove('is-active');
  document.getElementById('mySetting').classList.remove('is-active');

  document.getElementById(modalId).classList.add('is-active');
}

function closeForm(modalId) {
  document.getElementById(modalId).classList.remove('is-active');
}


function setLightMode() {
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem('theme', 'light');
  closeForm('mySetting');
}

function setDarkMode() {
  document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('theme', 'dark');
  closeForm('mySetting');
}

// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
});