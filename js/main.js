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

  document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.start-btn');

    if (!startBtn) return;
    startBtn.addEventListener('click', (e) => {
    e.preventDefault(); // stop instant navigation

    startBtn.classList.add('is-leaving');

    setTimeout(() => {
      window.location.href = startBtn.href;
    }, 400); // MUST match CSS duration
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
          setTimeout(type, 20);
        }
      }

      type();
    }
  });

  document.querySelectorAll('.card-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const card = link.querySelector('.card');
      card.classList.add(
        'animate__animated',
        'animate__fadeOutRightBig'
      );

      setTimeout(() => {
        window.location.href = link.href;
      }, 600);
    });
  });
