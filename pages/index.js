// import { getPortfolio } from "./portfolio";

// OBTENER BIENVENIDA DESDE CMS
function getBienvenida() {
  return fetch(
    "https://cdn.contentful.com/spaces/mk4vl3fftmmq/environments/master/entries?access_token=4w2igBAOrE0biXFvBGag39cG4YjR9u1fQvJGbE79dOA&&content_type=welcome"
  )
    .then((res) => {
      return res.json();
    })
    .then((dataBienvenida) => {
      const bienvenidaCollections = dataBienvenida.items.map((i) => {
        return {
          hola: i.fields.saludo,
          soyDaniela: i.fields.soyDaniela,
        };
      });

      return bienvenidaCollections;
    });
}

function addBienvenida(params) {
  saludo = document.querySelector(".welcome__hola");
  soy = document.querySelector(".welcome__soy-daniela");

  // saludo.textContent = params.hola;
  saludo.textContent = "ENCUENTRO FEDERAL DE MUJERES";

  // soy.textContent = params.soyDaniela;
  soy.textContent = "CÓRDOBA 2024";
}

// FIN OBTENER BIENVENIDA DESDE CMS

// OBTENER PRESENTACION DESDE CMS
function getPresentacion() {
  return fetch(
    "https://cdn.contentful.com/spaces/mk4vl3fftmmq/environments/master/entries?access_token=4w2igBAOrE0biXFvBGag39cG4YjR9u1fQvJGbE79dOA&&content_type=sobreMi"
  )
    .then((res) => {
      return res.json();
    })
    .then((dataPresentacion) => {
      const presentacionCollections = dataPresentacion.items.map((i) => {
        return {
          tituloPresentacion: i.fields.sobreMi,
          descripcionPresentacion: i.fields.textoAlgoSobreMi,
          imagenPresentacion:
            dataPresentacion.includes.Asset[0].fields.file.url,
        };
      });

      return presentacionCollections;
    });
    
}

function addPresentacion(params) {
  titulo = document.querySelector(".presentacion__texto__soy-daniela");
  descripcion = document.querySelector(".presentacion__texto__sobre-mi");
  imagen = document.querySelector(".presentacion__img");

  // titulo.textContent = params.tituloPresentacion;
  titulo.textContent = "ANTES Y DESPUES DEL 35° ENM – CÓRDOBA 2024";

  // descripcion.textContent = params.descripcionPresentacion;
  descripcion.textContent = `
  Las abajo firmantes somos conscientes del intento fallido de quebrar el movimiento de mujeres en
  Argentina y su histórico instrumento de organización política, los Encuentros Nacionales de Mujeres. Es
  preciso despejar falsos debates como por ejemplo que en el “cambio de nombre” se condensa un enfrentamiento
  generacional entre “viejas rancias” y “jóvenes de la marea verde”, o el conservadurismo contra un impulso de
  “cambio y progresismo”, nada más lejos que atarnos a tradiciones, nostalgias o quietismos sino una firme
  resistencia a retrocesos patriarcales en el camino de liberación de las mujeres desde hace tres siglos.
  Para comprender lo que nos pasa a las mujeres y feministas argentinas, y no equivocar el análisis de la
  contradicción entre cantidad y calidad, nada más efectivo que conocer los hechos y reflexionar sobre ellos,
  para actuar con firmeza y claridad conceptual y no detener la necesaria y verdadera transformación social.
  ANTES DEL 35° ENM – SAN LUIS 2022
  • ¿Qué se disputa desde el 1° ENM?
  El contexto histórico del 1°ENM (1986) fue el de la inmensa unidad popular antidictatorial, que hizo posible
  la creación de la Multisectorial de Mujeres responsable de la primera conmemoración pública en la Argentina
  del Día Internacional de la Mujer el 8 de marzo de 1984.
  La génesis del ENM se inició en su Comisión Organizadora en la que confluyeron mujeres de partidos políticos,
  sindicatos, organizaciones sociales, de DDHH. y feministas autónomas con trayectorias disímiles respecto del
  feminismo, por razones de edad y variadas experiencias. Esa confluencia se caracterizó por tres grandes
  corrientes: los sectores socialdemócratas (particularmente UCR y PC) que se inscribían en el proyecto de
  Tercer Movimiento Histórico empujado por el alfonsinismo que habían sido protagonistas del Foro Mundial
  de Mujeres (Cierre del 1° Decenio de la Mujer 1985/ONU) en Nairobi, Kenia donde se selló el compromiso
  de realizar Encuentros Nacionales de Mujeres en todos los países de América Latina y el Caribe; feministas
  autónomas de izquierda, abolicionistas y defensoras de DDHH que llegaban de participar del III EFLAC
  Encuentro Feminista de Latinoamérica y Caribe en Bertioga, Brasil y el tercero, el sector maoísta (PCR) que
  desde su concepción de “línea de masas” había desarrollado organizaciones de mujeres al calor de la lucha
  antigolpista primero y antidictatorial después. Esta confluencia fue la matriz de origen de la construcción
  colectiva, impensada, de 34 años ininterrumpidos.
  Los rasgos principales de esa construcción fueron: a) cada participante de la C.O. hizo valer su voz de forma
  individual sin ejercer representación alguna, b) como los EFLAC, adquirió formato de “Encuentro” para el
  intercambio de todas las experiencias, c) su alcance “Nacional”, en términos de territorialidad, d) que sería de
  “Mujeres” como sujeto de lucha por sus derechos con la mayor amplitud, por lo que no se definió feminista,
  sino plural, e) su metodología de funcionamiento sería la de “talleres”, modalidad inspirada en la experiencia
  feminista, que desde la década del 60 practicaron los grupos horizontales (sin jerarquías) descubriendo que “lo
  personal es político”, que lo individual tiene una dimensión social y que el camino colectivo es el que genera
  los cambios políticos de transformación de la opresión social de que somos objeto las mujeres.
  La decisión organizativa de las mujeres fue la que dio continuidad y masividad a los ENM y consolidó su
  carácter expresado en sus “pilares”, no sin lucha, durante los 34 años desde su origen.
  Los pilares de esa construcción colectiva que dieron el éxito de crecimiento en cantidad y calidad son: 1)
  Autoconvocado: las mujeres se organizan a título personal en cada lugar para su realización, 2) Autónomo:
  es independiente del Estado, gobiernos, partidos políticos, iglesias o cualquier otra estructura organizativa
  que implique subordinación, 3) Plurinacional: participan mujeres de todos los orígenes étnicos y de todas
  las naciones, pueblos y territorios, 4) Autofinanciado: sostenido con el aporte económico de las mujeres que
  participan, 5) Federal: rotar su sede cada año en una ciudad distinta en la que haya un grupo de mujeres
  dispuestas a organizarlo, 6) Plural: participan mujeres de todos las clases sociales, orientaciones sexuales,
  etc. 7) Democrático: se expresan todas y cada una de las ideas, posturas y opiniones y ninguna está por
  encima de otra, 8) Horizontal: no existen títulos ni jerarquías entre mujeres.
  1
  Este carácter es el que está y estuvo desde el 1° ENM en confrontación con quienes d
  `;

  imagen.src = params.imagenPresentacion;
}

// FIN OBTENER PRESENTACION DESDE CMS

// OBTENER SERVICIOS DESDE CMS
function getServicios() {
  return fetch(
    "https://cdn.contentful.com/spaces/mk4vl3fftmmq/environments/master/entries?access_token=4w2igBAOrE0biXFvBGag39cG4YjR9u1fQvJGbE79dOA&&content_type=servicios"
  )
    .then((res) => {
      return res.json();
    })
    .then((dataServicios) => {
      const serviciosCollections = dataServicios.items.map((i) => {
        return {
          tituloServicio: i.fields.tituloServicio,
          descripcionServicio: i.fields.descripcionServicio,
          imageID: i.fields.imagenServicio.sys.id,
          includes: dataServicios.includes.Asset,
        };
      });

      serviciosCollections.forEach((x) => {
        let idEncontrado = buscarAsset(x.imageID, x.includes);
        x.image = idEncontrado.fields.file.url;
      });
      return serviciosCollections;
    });
}

function buscarAsset(assetID, includes) {
  const encontrado = includes.find((inc) => {
    return inc.sys.id == assetID;
  });
  return encontrado;
}

function addServicios(params) {
  const template = document.querySelector("#servicios-card-template"); //Lo que clonamos (id)
  const container = document.querySelector(".servicios__container"); //A donde va (class)

  template.content.querySelector(".titulo-servicio").textContent =
    params.tituloServicio;

  template.content.querySelector(".descripcion-servicio").textContent =
    params.descripcionServicio;

  template.content.querySelector(".imagen-servicio").src = params.image;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}
// FIN OBTENER SERVICIOS DESDE CMS

function main() {
  const header = document.querySelector(".seccion-header");
  headerComponent(header);

  getBienvenida().then(function (bienvenida) {
    for (const b of bienvenida) {
      addBienvenida(b);
    }
  });

  getPresentacion().then(function (presentacion) {
    for (const p of presentacion) {
      addPresentacion(p);
    }
  });


  // getPortfolio().then(function (portfolio) {
  //   for (const p of portfolio) {
  //     addPortfolio(p);
  //   }
  // });


  getServicios().then(function (servicios) {
    for (const s of servicios) {
      addServicios(s);
    }
  });

  const contactForm = document.querySelector(".seccion-contacto");
  contactComponent(contactForm);

  const footer = document.querySelector(".seccion-footer");
  footerComponent(footer);
}

main();
