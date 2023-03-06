import { home } from './Home/Home';
import { menu } from './Menu/Menu';
import { contact } from './Contact/Contact';
import './index.css';

let currentPage = 'home';

function addHandlers() {
  const navBtns = document.querySelectorAll('.nav__btn');
  navBtns.forEach((btn) =>
    btn.addEventListener('click', (e) => {
      currentPage = e.target.dataset.target;
      navBtns.forEach((btn) => btn.classList.remove('active'));
      e.target.classList.add('active');
      console.log(e.target);
      displayContent();
    })
  );
}

function displayContent() {
  const contentHtml = `
  <header class="header">
      <p class="logo">Poke Task</p>
      <nav class="nav">
        <button class="nav__btn active" data-target="home">Home</button>
        <button class="nav__btn" data-target="menu">Menu</button>
        <button class="nav__btn" data-target="contact">Contact</button>
      </nav>
    </header>
    <main class="main">
        ${
          currentPage === 'home'
            ? home()
            : currentPage === 'menu'
            ? menu()
            : contact()
        }
      </section>
    </main>
  `;
  const contentEl = document.querySelector('#content');
  contentEl.innerHTML = contentHtml;
  addHandlers();
}

function init() {
  displayContent();
  addHandlers();
}

init();
