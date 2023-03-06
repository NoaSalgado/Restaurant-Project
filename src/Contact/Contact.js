import './contact.styles.css';

export function contact() {
  const contactHtml = `
    <section class="contact">
          <p class="contact__method">
            <i class="fa-solid fa-phone"></i> 111-222333444555
          </p>
          <p class="contact__method">
            <i class="fa-solid fa-house"></i> Non-existent street,
            <span>12345, Somewhere</span>
          </p>
          <p class="contact__method">
            <i class="fa-solid fa-envelope"></i> poketask@poketask.com
          </p>
        </section>
    `;
  return contactHtml;
}
