document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      menuToggle.classList.toggle('active');
      menuToggle.innerHTML = nav.classList.contains('show') ? '✕' : '☰';
  });

  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          nav.classList.remove('show');
          menuToggle.classList.remove('active');
          menuToggle.innerHTML = '☰';
      });
  });
});