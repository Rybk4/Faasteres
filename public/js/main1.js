const dropdown = document.querySelector('.dropdown');
const toggle = dropdown.querySelector('.dropdown-toggle');
const menu = dropdown.querySelector('.dropdown-menu');
const items = menu.querySelectorAll('li');

toggle.addEventListener('click', function () {
  dropdown.classList.toggle('active');
});

items.forEach(function (item) {
  item.addEventListener('click', function () {
    toggle.textContent = item.textContent;
    dropdown.classList.remove('active');
  });
});

function Register() {
  let reg = document.querySelector('.reg');
  let login = document.querySelector('.auth');
  login.classList.remove('active');
  reg.classList.add('active');
}

function Login() {
  let auth = document.querySelector('.auth');
  let main = document.querySelector('main');
  let reg = document.querySelector('.reg');
  reg.classList.remove('active');
  main.classList.add('lock');
  auth.classList.add('active');
}

function Exit() {
  let auth = document.querySelector('.auth');
  let reg = document.querySelector('.reg');
  let main = document.querySelector('main');
  reg.classList.remove('active');
  auth.classList.remove('active');
  main.classList.remove('lock');
}
