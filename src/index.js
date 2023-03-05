import { home } from './Home/Home';
import './index.css';

let currentPage = 'home';

function addHandlers() {
  const navBtns = document.querySelectorAll('.nav__btn');
  navBtns.forEach((btn) =>
    btn.addEventListener('click', (e) => {
      currentPage = e.target.dataset.target;
      navBtns.forEach((btn) => btn.classList.remove('active'));
      e.target.classList.add('active');
    })
  );
  console.log(navBtns);
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
        ${home()}
      </section>
    </main>
  `;
  return contentHtml;
}
const contentEl = document.querySelector('#content');
contentEl.innerHTML = displayContent();
addHandlers();
