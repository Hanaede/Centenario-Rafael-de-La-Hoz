document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      menuToggle.classList.toggle('active');
      // Cambiar el ícono cuando el menú está abierto/cerrado
      menuToggle.innerHTML = nav.classList.contains('show') ? '✕' : '☰';
  });

  // Cerrar el menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          nav.classList.remove('show');
          menuToggle.classList.remove('active');
          menuToggle.innerHTML = '☰';
      });
  });
});