const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  sidebar.style.left = '0';
});

closeBtn.addEventListener('click', () => {
  sidebar.style.left = '-250px';
});