import './home-styles.css';

export function home() {
  const homeHtml = `
    <section class="hero">
        <div class="section-content">
          <h1 class="main-heading">
            Hawaiian food, <span>healthy lifestyle</span>
          </h1>
          <button class="btn" data-target="menu">Order Now</button>
        </div>
    `;
  return homeHtml;
}
