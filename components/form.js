function contactComponent(element) { 
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
    <div class="seccion__contacto">

    </p>


    <br><br>
    <h1 style="font-size: 24px; text-align: center;">
    Completá el formulario para participar del EFM 2024 en Córdoba:
    </h1>
    <br><br>

      <div class="contacto__contenedor-form">
       

        <form action="" class="form">

          <div class="contacto__fieldset">
            <label for="nombre" class="label">Nombre</label>
            <input id="nombre" name="nombre" class="input-nombre" type="text" />
          </div>

          <div class="contacto__fieldset">
            <label for="email" class="label">Email</label>
            <input id="email" name="email" class="input-email" type="email" />
          </div>

          <div class="contacto__fieldset">
            <label for="whatsapp" class="label">Celular</label>
            <input id="whatsapp" name="whatsapp" class="input-whatsapp" type="whatsapp" />
          </div>

          <div>
        <label for="provincia" class="label">Provincia</label>
        <select name="provincia" class="input-provincia"> 
          <option value="Buenos Aires">Buenos Aires</option> 
          <option value="Ciudad Autónoma de Buenos Aires">Ciudad Autónoma de Buenos Aires</option> 
          <option value="Catamarca">Catamarca</option> 
          <option value="Chaco">Chaco</option> 
          <option value="Chubut">Chubut</option> 
          <option value="Córdoba">Córdoba</option> 
          <option value="Corrientes">Corrientes</option> 
          <option value="Entre Ríos">Entre Ríos</option> 
          <option value="Formosa">Formosa</option> 
          <option value="Jujuy">Jujuy</option> 
          <option value="La Pampa">La Pampa</option> 
          <option value="La Rioja">La Rioja</option> 
          <option value="Mendoza">Mendoza</option> 
          <option value="Misiones">Misiones</option> 
          <option value="Neuquén">Neuquén</option> 
          <option value="Río Negro">Río Negro</option> 
          <option value="Salta">Salta</option> 
          <option value="San Juan">San Juan</option> 
          <option value="San Luis">San Luis</option> 
          <option value="Santa Cruz">Santa Cruz</option> 
          <option value="Santa Fe">Santa Fe</option> 
          <option value="Santiago del Estero">Santiago del Estero</option> 
          <option value="Tierra del Fuego, Antártida e Islas del Atlántico Sur">Tierra del Fuego, Antártida e Islas del Atlántico Sur</option> 
          <option value="Tucumán">Tucumán</option> 
        </select>
      </div>
      <div class="boton-container">
          <button class="boton">Enviar</button>
          <div class="form-enviado"></div>
          </div>
        </form>
      </div>
    </div>
    `;
  element.appendChild(componentEl);
}

function postData() {
  const form = document.querySelector(".seccion-contacto");



  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());

    const mensaje = `
    NOMBRE: 
    ${value.nombre}; 

    <br><br>
    EMAIL: 
    ${value.email}

    <br><br>
    CELULAR: 
    ${value.whatsapp}

    <br><br>
    PROVINCIA:
    ${value.provincia};
    `;


    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        to: "efm2024cba@gmail.com",
        message: mensaje,
      }),
    })
      .then(() => {
        document.querySelectorAll(".form__input").forEach((input) => {
          input.innerHTML = "";
        });

        const formEnviado = form.querySelector(".form-enviado")
        formEnviado.innerHTML=`
        Tus datos se han registrado con éxito
        `
      })


  });
}
postData();