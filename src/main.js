import "./styles/stylesheets/main.scss";

document.querySelector('.navbar-burger').addEventListener('click', () => {
  document.querySelector('.navbar-menu').classList.toggle('active');
});
