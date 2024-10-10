document.addEventListener('DOMContentLoaded', function () {
  const hamburgerButton = document.getElementById('hamburgerButton');
  const navbar = document.getElementById('navbar-solid-bg');

  hamburgerButton.addEventListener('click', function () {
      navbar.classList.toggle('hidden');
  });
});

