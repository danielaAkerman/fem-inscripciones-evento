function footerComponent(element) {
  const componentEl = document.createElement("footer");
  componentEl.innerHTML = `
  <div class="seccion-footer">
    <div class="footer__logo">

        <p class="footer__logo__derechos-reservados">© 2024 RadFem Córdoba</p>
      </div>
      <div class="footer__rrss">

        <a
          class="footer__rrss__link"
          href="https://www.instagram.com/efm2024_cba/"
        >
          <div class="footer__rrss__red-social">
            <img
              class="footer__rrss__red-social__logo-instagram"
              src="./img/instagram.png"
              alt="instagram"
            />
            <p class="footer__rrss__red-social__instagram">Instagram</p>
          </div>
        </a>

        
      </div>
    </div>  
`;

  element.appendChild(componentEl);
}
