// firebase deploy --only hosting


function addBienvenida() {
  saludo = document.querySelector(".welcome__efm"); //welcome__hola
  soy = document.querySelector(".welcome__cordoba"); //welcome__soy-daniela

  saludo.textContent = "ENCUENTRO FEDERAL DE MUJERES";
  soy.textContent = "CÓRDOBA 2024";
}

function addPresentacion() {
  descripcion = document.querySelector(".presentacion__texto__sobre-mi");
  descripcion.innerHTML = `

  <div >
    <h1 style="font-size: 24px; text-align: center;">

      Convocatoria EFM 2024 Córdoba
    </h1>
    <br>


    <p>

      El Patriarcado en alianza con el Capitalismo y el Neo Liberalismo intentó secuestrar los Encuentros de Mujeres y
      denominarlos: “de Mujeres, Lesbianas, Trans, Travestis, Bisexuales, Intersexuales y No Binaries”, pretendiendo
      incluir intereses no sólo ajenos a nuestra lucha, sino, contrapuestos, que nos vulneran y oprimen.
    </p>

    <p>
      El Feminismo y la lucha por la abolición de la prostitución y mercantilización de los cuerpos de las mujeres,
      explotación reproductiva, y del género en tanto relación de opresión y del patriarcado como sistema de
      explotación, nos obliga a la defensa de los pilares de los Encuentros de Mujeres como forma organizativa:
    </p>

    <p>

      1) <b> Autoconvocado:</b> las mujeres se organizan a título personal en cada lugar para su realización,
      <br> 2) <b> Autónomo:</b> es independiente del Estado, gobiernos, partidos políticos, iglesias o cualquier otra
      estructura
      organizativa que implique subordinación,
      <br> 3) <b> Plurinacional:</b> participan mujeres de todos los orígenes étnicos y de todas las naciones, pueblos y
      territorios,
      <br> 4) <b> Autofinanciado:</b> sostenido con el aporte económico de las mujeres que participan,
      <br> 5) <b> Federal:</b> rotar su sede cada año en una ciudad distinta en la que haya un grupo de mujeres
      dispuestas a
      organizarlo,
      <br> 6) <b> Plural:</b> participan mujeres lesbianas, heterosexuales, bisexuales; de todos las clases sociales y
      sectores.
      <br> 7) <b> Democrático:</b> se expresan todas y cada una de las ideas, posturas y opiniones y ninguna está por
      encima de
      otra,
      <br> 8) <b> Horizontal:</b> no existen títulos ni jerarquías entre mujeres.
    </p>

    <p>

      En la Reunión Federal de Mujeres 2023 CABA, mujeres dispuestas a seguir la pelea y a no aceptar engaños
      patriarcales decidimos sumar un nuevo pilar:

    </p>

    <p>
      9) <b> Abolicionista:</b> para la liberación de las mujeres de todas las formas de opresión: prostitución,
      pornografía,
      explotación reproductiva, género.

    </p>

    <p>
      Hoy desde Córdoba ofrecemos nuestra ciudad para hacer posible un reencuentro de las mujeres que recoja esta rica
      experiencia de décadas para seguir la lucha.
    </p>

    <p>

      En ese largo camino que seguiremos recorriendo, el próximo 12 y 13 de Octubre 2024 asumiremos la agenda
      reivindicativa propia basada en el análisis objetivo de la realidad social y material en que vivimos.

    </p>

    <p>
      Las Mujeres no somos una identidad a adoptar entre tantas, somos más de la mitad de la humanidad.
      Somos un sujeto político completo compuesto no sólo por nuestros cuerpos sino también por las experiencias, las
      oportunidades y las circunstancias que hemos acumulado en nuestra vida por nacer mujeres.

    </p>

    <p>
      La agenda feminista y abolicionista es profundamente revolucionaria y aquí estamos para defenderla.
    </p>

    <p>

      Este es nuestro compromiso.
    </p>

    <p>

      Este es nuestro legado.
    </p>
    <br>
    <p style="text-align: end;">

      Córdoba, Marzo 2024.
    </p>

    <br><br>

    <p>Podés leer el Documento 35ENM haciendo 
    <a href="https://drive.google.com/file/d/1oOVpDCxxBFoanK4QQlIGso3H5u0qaP2I/view?usp=sharing" style="color: #EDF6F9;" target="_blank">click aquí</a>


  </div>
 

  `
}

function main() {

  addBienvenida();

  addPresentacion();

  const contactForm = document.querySelector(".seccion-contacto");
  contactComponent(contactForm);

  const footer = document.querySelector(".seccion-footer");
  footerComponent(footer);
}

main();