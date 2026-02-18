console.log('main.js loaded');
  // Modal button open and close form functionality 
  function openForm(modalId) {
    document.getElementById('mySkill').classList.remove('is-active');
    document.getElementById('mySetting').classList.remove('is-active');

    document.getElementById(modalId).classList.add('is-active');
  }

  function closeForm(modalId) {
    document.getElementById(modalId).classList.remove('is-active');
  }

  function openForm(modalId) {
    const mySkill = document.getElementById('mySkill');
    const mySetting = document.getElementById('mySetting');

    if (mySkill) mySkill.classList.remove('is-active');
    if (mySetting) mySetting.classList.remove('is-active');

    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('is-active');
  }

  // Settings - light and dark mode
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


  // Apply Animation to start button 
  document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.start-btn');

    if (!startBtn) return;

    startBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const duration = 900;

      startBtn.style.setProperty('--animate-duration', `${duration}ms`);
      startBtn.classList.add(
        'animate__animated',
        'animate__bounceOutRight'
      );

      setTimeout(() => {
        window.location.href = startBtn.href;
      }, duration - 400);
    });
  });


  // Text typewrite animation 
  document.addEventListener('DOMContentLoaded', () => {
    const typewriters = document.querySelectorAll('.typewriter');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startTypewriter(entry.target);
          observer.unobserve(entry.target); // run only once
        }
      });
    }, {
      threshold: 0.4
    });

    typewriters.forEach(el => observer.observe(el));

    function startTypewriter(element) {
      const text = element.dataset.text;
      let index = 0;

      function type() {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
          setTimeout(type, 2);
        }
      }

      type();
    }
  });

  // Card animation
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();

        const card = link.querySelector('.card-ui');

        card.style.setProperty('--animate-duration', '1s');
        card.classList.add(
          'animate__animated',
          'animate__fadeOut'
        );

        card.addEventListener('animationend', () => {
          window.location.href = link.href;
        }, { once: true });
      });
    });
  });
