const burgerToggle = document.getElementById('burger-toggle');
const headerNav = document.getElementById('header-nav');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

burgerToggle.addEventListener('click', () => {
  burgerToggle.classList.toggle('open');
  headerNav.classList.toggle('open');
  themeToggle.classList.toggle('open');
});


document.querySelectorAll('.header-navigation-wrapper a').forEach(link => {
  link.addEventListener('click', () => {
    burgerToggle.classList.remove('open');
    headerNav.classList.remove('open');
    themeToggle.classList.remove('open');
  });
});


themeToggle.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  }
});


document.addEventListener('click', (event) => {
  if (headerNav.classList.contains('open')) {
    if (!burgerToggle.contains(event.target) && !headerNav.contains(event.target)) {
      burgerToggle.classList.remove('open');
      headerNav.classList.remove('open');
      themeToggle.classList.remove('open');
    }
  }
});
