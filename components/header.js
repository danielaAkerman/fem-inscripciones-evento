function headerComponent(element) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <div class="seccion__header">
    <a href="./index.html" class="header__logo">
      <img src="./img/favicon.png" alt="" class="header__logo__img" />
    </a>
    <div class="header__burger-menu menu">
      <img src="./img/menu.png" alt="" class="header__burger-menu__img" />
    </div>


    </div>
    `;

  element.appendChild(componentEl);


}
