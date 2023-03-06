import './menu-styles.css';

// To import all the images
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context('./images', false, /\.(png|jpe?g|svg)$/)
);

export function menu() {
  const menuHtml = `
    <section class="menu">
    <div class="poke">
      <figure class="poke__image">
        <img src=${images[3]} alt="ukana poke" />
      </figure>
      <h3 class="poke__name">Ukana</h3>
      <p class="poke__ingredients">
        Salmon, mushrooms, chicken, carrot, strawberry, kale
      </p>
    </div>

    <div class="poke">
      <figure class="poke__image">
        <img src="${images[1]}" alt="moa poke" />
      </figure>
      <h3 class="poke__name">Moa</h3>
      <p class="poke__ingredients">
        Chicken, tomato, bell pepper, corn, cucumber
      </p>
    </div>

    <div class="poke">
      <figure class="poke__image">
        <img
          src="${images[2]}"
          alt="tuna poke"
          class="poke__image"
        />
      </figure>
      <h3 class="poke__name">Tuna</h3>
      <p class="poke__ingredients">
        Salmon, rice, cucumber, kale, capers, beans
      </p>
    </div>

    <div class="poke">
      <figure class="poke__image">
        <img src=${images[0]} alt="kai-wasabi poke" />
      </figure>
      <h3 class="poke__name">Kai Wasabi</h3>
      <p class="poke__ingredients">
        Salmon, chicken, corn, pineapple, asparagus
      </p>
    </div>
  </section>
  `;

  return menuHtml;
}
