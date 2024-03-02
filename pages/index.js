// import { getPortfolio } from "./portfolio";
// img
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
  descripcion.innerHTML = `



  <div style="text-align: justify;">
  <h1>
    <b>
      ANTES Y DESPUES DEL 35° ENM – SAN LUIS 2022
    </b>
  </h1>
  <h3>
    <b>
      Conocer, Reflexionar, Actuar y Transformar
    </b>
  </h3>
  <p>

    
    Las abajo firmantes somos conscientes del intento fallido de quebrar el movimiento de mujeres en
    Argentina y su histórico instrumento de organización política, los Encuentros Nacionales de Mujeres. Es
    preciso despejar falsos debates como por ejemplo que en el “cambio de nombre” se condensa un enfrentamiento
    generacional entre “viejas rancias” y “jóvenes de la marea verde”, o el conservadurismo contra un impulso de
    “cambio y progresismo”, nada más lejos que atarnos a tradiciones, nostalgias o quietismos sino una firme
    resistencia a retrocesos patriarcales en el camino de liberación de las mujeres desde hace tres siglos.
    Para comprender lo que nos pasa a las mujeres y feministas argentinas, y no equivocar el análisis de la
    contradicción entre cantidad y calidad, nada más efectivo que
    <b>
      conocer los hechos y reflexionar
    </b>
    sobre ellos,
    para
    <b>
      actuar con firmeza y claridad conceptual
    </b>
    y no detener la necesaria y
    <b>
      verdadera transformación social.
    </b>

  </p>

  <p>
    <b>

      ANTES DEL 35° ENM – SAN LUIS 2022
    </b>
  </p>

  <p> <b>

      • ¿Qué se disputa desde el 1° ENM?
    </b>
  </p>

  <p>

    


    El contexto histórico del 1°ENM (1986) fue el de la inmensa unidad popular antidictatorial, que hizo posible
    la creación de la Multisectorial de Mujeres responsable de la primera conmemoración pública en la Argentina
    del Día Internacional de la Mujer el 8 de marzo de 1984.

  </p>

  <p>


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


  </p>

  <p>




    Los rasgos principales de esa construcción fueron:
    <br>
    a) cada participante de la C.O. hizo valer su voz de forma
    individual sin ejercer representación alguna,
    <br>
    b) como los EFLAC, adquirió formato de
    <b>
      “Encuentro”
    </b>
    para el
    intercambio de todas las experiencias,
    <br>
    c) su alcance
    <b>
      “Nacional”
    </b>
    , en términos de territorialidad,
    <br>
    d) que sería de
    <b>
      “Mujeres”
    </b>
    como sujeto de lucha por sus derechos con la mayor amplitud, por lo que no se definió feminista,
    sino plural,
    <br>
    e) su metodología de funcionamiento sería la de “talleres”, modalidad inspirada en la experiencia
    feminista, que desde la década del 60 practicaron los grupos horizontales (sin jerarquías) descubriendo que
    <i>

      “lo personal es político”
    </i>
    , que lo individual tiene una dimensión social y que el camino colectivo es el que genera
    los cambios políticos de transformación de la opresión social de que somos objeto las mujeres.


  </p>

  <p>
    





    La decisión organizativa de las mujeres fue la que dio continuidad y masividad a los ENM y consolidó su
    carácter expresado en sus “pilares”, no sin lucha, durante los 34 años desde su origen.


  </p>

  <p>



    Los pilares de esa construcción colectiva que dieron el éxito de crecimiento en cantidad y calidad son:
    <br>
    1)
    <b>
      Autoconvocado:
    </b>
    las mujeres se organizan a título personal en cada lugar para su realización,
    <br>
    2)
    <b>
      Autónomo:
    </b>
    es independiente del Estado, gobiernos, partidos políticos, iglesias o cualquier otra estructura organizativa
    que implique subordinación,
    <br>
    3)
    <b>
      Plurinacional:
    </b>
    participan mujeres de todos los orígenes étnicos y de todas
    las naciones, pueblos y territorios,
    <br>
    4)
    <b>
      Autofinanciado:
    </b>
    sostenido con el aporte económico de las mujeres que
    participan,
    <br>
    5)
    <b>
      Federal:
    </b>
    rotar su sede cada año en una ciudad distinta en la que haya un grupo de mujeres
    dispuestas a organizarlo,
    <br>
    6)
    <b>
      Plural:
    </b>
    participan mujeres de todos las clases sociales, orientaciones sexuales,
    etc.
    <br>
    7)
    <b>
      Democrático:
    </b>
    se expresan todas y cada una de las ideas, posturas y opiniones y ninguna está por
    encima de otra,
    <br>
    8)
    <b>
      Horizontal:
    </b>
    no existen títulos ni jerarquías entre mujeres.



  </p>

  <p>


    Este carácter es el que está y estuvo desde el 1° ENM en confrontación con quienes desde su interior
    disputaron
    <b>
      el poder de dirección del movimiento de mujeres
    </b>
    para fines que exceden la lucha por resolver
    sus propias necesidades y conquista de derechos.
    



  </p>

  <p>
    

    El crecimiento exponencial que adquirieron los ENM trajeron aparejado la agudización de esa
    <b>
      disputa histórica por el poder
    </b>
    . Es importante señalar que el rasgo distintivo de los ENM fue que cada año se volvieron
    más feministas. El auge del movimiento de mujeres y la masividad de los ENM los tornó cada vez más
    peligrosos para las clases dominantes en la Argentina, pues ellos, hasta el 34° ENM fueron claramente
    opositores por una correcta valoración de cada momento político y la relación entre la lucha social general y
    su coherencia anti patriarcal. La contienda se expresó cada año en la intención de quebrar su carácter poniendo
    blanco en alguno de sus pilares. Entendemos que la propuesta de cambiar el nombre al ENM, como táctica
    impulsada en los últimos años, no tiene nada de novedosa, son los mismos sectores persiguiendo los mismos
    objetivos de dirigir o en su defecto fraccionar al movimiento. Nada más lejos del declamado interés “inclusivo”
    sino más bien la fachada con la que intentan tapar los verdaderos fines.



  </p>

  <p>
    <b>


      • Ejemplos de cómo atentaron contra los pilares durante 34 años


    </b>
  </p>

  <p>




    Los Encuentros desde su origen recibieron embestidas externas con intenciones destructivas o de cooptación:
    gobernadores como Bordón (Mendoza) o “Palito” Ortega (Tucumán) queriendo sacar réditos electorales
    mostrándose "amigables" o pactos como los de Menem con el Obispo de San Juan, Ítalo di Stéfano, intentando
    romper el 12° ENM bajo la estratagema de un fracasado Encuentro paralelo de estricto contenido conservador.
    Para estos embates las mujeres tuvimos reservas y así surgió el slogan
    <i>
      “¡Qué momento, qué momento! ¡Les hicimos otro Encuentro!”
    </i>
    pero, la gravedad sufrida cada año estuvo en la lucha interna en cada C.O. y en cada
    Encuentro por la defensa de los pilares. Algunos de esos momentos de la permanente disputa por el poder
    fueron: en 1986, cuando un sector de la C.O. del 1° ENM registró en la IGJ la asociación civil “ENM – Buenos
    Aires” atentando contra el pilar federal, de horizontalidad y autonomía; 1990, cuando se intentó el “control
    porteño” de la C.O. del 5° ENM-Santiago del Estero a través de reuniones de ex comisiones atentando contra
    la horizontalidad y la democracia; 1996, cuando en el 11° ENM -CABA se impusieron “paneles de
    especialistas” en el programa oficial en los mismos horarios que los talleres cuestionando la eficacia de su
    funcionamiento y la horizontalidad; en 1998, cuando, en ocasión del ingreso de los partidos trotskistas
    (ausentes, hasta la fecha, en los ENM) cuestionaron la metodología de consenso en el 13° ENM- Chaco,
    proponiendo “votar” lo que atenta contra la horizontalidad propia de los Encuentros, confundiendo las reglas
    de instancias asamblearias ajenas a la metodología de los talleres y también, desde entonces, el boicot a las
    inscripciones poniendo en peligro el pilar del autofinanciamiento, por dar solo algunos ejemplos de las
    históricas batallas internas.



  </p>

  <p>
    <b>



      • Última secuencia histórica del intento de destrucción


    </b>
  </p>

  <p>






    Desde el 31° ENM - Rosario 2016 se acrecentó la acción de actividades complementarias durante el desarrollo
    del encuentro para debilitar la participación de las mujeres en los talleres (radios abiertas, asambleas en las
    plazas con oradoras de “trayectoria”, actos partidarios hasta con dirigentes varones, etc.) que se multiplicaron
    en el 32° ENM - Chaco 2017 (marcha contra los “travesticidios”, por ejemplo, dividida de la tradicional marcha
    general del domingo iniciada en 1992). Desde entonces, se instaló una ofensiva sin tregua que consistió en
    imponer el cambio de carácter de los ENM y el corrimiento de las mujeres como su principal sujeto político a
    través del cambio del nombre que algunas feministas llamaron la táctica del “caballo de troya”. Instalaron la
    discusión por redes con fotos de mujeres que decían
    <i>
      “vamos a Trelew al encuentro plurinacional de mujeres,
    </i>
    lesbianas, travestis, trans, bisexuales y no binaries”
    , que como Campaña “Somos Plurinacional” incluía a la
    mismísima Judith Butler, con la que nunca tuvimos oportunidad de debatir en un taller de Encuentro. Esta
    ofensiva contó con el apoyo mediático de prensa, particularmente Página12 y Clarín, siendo la primera
    mención de este último recién en 2013 en ocasión de enfrentamientos con sectores antiaborto. Aún con el
    ninguneo de los medios nacionales los ENM se organizaron y crecieron pese a ese silencio mediático, pero
    ahora son uno de los principales instrumentos para generar confusión y división.



  </p>

  <p>



    Las conclusiones de los talleres del 33° ENM – Trelew (que debió ser Pto. Madryn si se hubiera respetado el
    aplausómetro) no consensuaron el cambio de nombre y muy especialmente el taller de mujeres originarias,
    existente desde el 1° ENM, se expresó
    <i>
      “por quedarse en él”
    </i>
    y solo incluir como 8vo pilar la
    “plurinacionalidad”. Por cierto, revela la intromisión rupturista en la C.O., que la edición de las conclusiones
    de Trelew, Chubut 2018 no publica en anexo el balance económico del Encuentro, obligación de toda C.O.,
    sino la transcripción de posturas y opiniones, en radios abiertas, de mujeres de la “Mesa de Feministas del
    Abya Yala” y la Campaña “Somos Plurinacionales” rompiendo de un plumazo los pilares de horizontalidad,
    democracia, pluralismo y plurinacionalidad.

    



  </p>

  <p>




    Así, llegamos a La Plata en 2019, al 34° ENM, en el que, por medios periodísticos, redes y carteles se intentó
    definir el carácter plurinacional y de las disidencias sexuales y de género al Encuentro, pero sin poder
    imponer el cambio de nombre en la apertura, impulsaron la idea en algunos talleres y solo lo lograron en el
    3,5 % de las 200.000 participantes, según se desprende de las conclusiones. Fue así, que eligieron la táctica
    de funcionar de manera asamblearia en plazas y patios de escuela con oradoras que daban por aprobado el
    cambio, forzando votaciones y generando el necesario clima de confusión que sería utilizado en el futuro
    proceso hacia el 35° ENM 2020.


  </p>

  <p>


    Estas circunstancias de disputa explícita, autoritarismo y violencias vividas en La Plata fueron registradas en
    un documento fechado en diciembre de 2019 bajo el título
    <i>

      “Hacia el 35 Encuentro Nacional de Mujeres.
      Reflexiones sobre los ENM y la propuesta de cambiar su nombre y su sentido”
    </i>


    en el que decenas de mujeres
    de todo el país reclamamos respeto por las herramientas de lucha y la propia organización política del
    Movimiento de Mujeres, movimiento de movimientos y ratificamos que
    <i>

      “sostenemos la continuidad de los
      Encuentros Nacionales de Mujeres plurinacionales, autónomos, autoconvocados, pluralistas,
      autofinanciados, democráticos y federales, manteniendo la continuidad histórica y política de su nombre”.
    </i>

  </p>

  


  <p>
    <b>

      QUÉ PASÓ EN EL 35° ENM – SAN LUIS 2022

    </b>
  </p>

  <p>
    <b>

      • ¿Dos Comisiones Organizadoras? ¿Porqué?


    </b>
  </p>

  <p>

    

    A los otrora ENM autónomos y opositores por esencia, se les forzó el cambio de su carácter. ¿Por qué? ¿Cómo?
    Desde diciembre de 2019 y la asunción del FdT - Frente de Todos, cuya composición fue y sigue siendo muy
    ecléctica con declarada intención electoral y sin base programática de acción y por defecto intensa lucha
    interna, cambiaron el escenario del ENM con nuevas alianzas y disputas.

  </p>

  <p>




    Por fuera de la voluntad y la autonomía de los miles de mujeres que durante 34 años protagonizaron los
    ENM, la flamante ministra de Mujeres, Géneros y Diversidad, Elizabeth Gómez Alcorta, expresión de un
    sector del FdT y la secretaria de la Mujer, Diversidades e Igualdad de San Luis, Ayelén Mazzina se reunieron
    el 19.12.19 para “pactar” la organización del que sería, casi tres años después, el, ahora “oficialista”, (35)
    EPMLTTBINB.2 La segunda reunión plenaria (2019) de conformación de la C.O. del 35° ENM – San Luis
    precipitó su ruptura con quienes defendieron la necesidad de respetar el mandato de las mujeres del 34°
    ENM – La Plata de seguir el debate en los próximos talleres.



  </p>

  <p>
    <b>



      • Contexto internacional y nacional de ofensiva patriarcal en tiempos de Pandemia.



    </b>
  </p>

  <p>
    


    Hoy la ofensiva política para desviar la lucha de las mujeres es planetaria y se da en todos los terrenos,
    políticos
    e ideológicos, pues las élites dominantes son conscientes de nuestra capacidad transformadora y se han dado
    la estrategia de invalidar la teoría feminista vaciándola de contenido. En las dos últimas décadas, desde
    instituciones internacionales como el Banco Mundial, Banco Interamericano de Desarrollo, agencias de
    Naciones Unidas, entre otras y desde instituciones gubernamentales se fue extendiendo el uso del término
    «género» como sinónimo de mujer o sexo, y en la medida que el término se popularizó con la ayuda de los
    medios de comunicación, el feminismo se fue desdibujando como proyecto político de liberación.


  </p>

  <p>




    La tergiversación del concepto de género busca ocultar la interpretación de la realidad que muestra a nuestra
    sociedad inmersa en un sistema de dominación. La operación ideológica de ofensiva patriarcal es

    <i>

      reducir el
      género a un conjunto fijo de rasgos psicológicos

    </i>

    , concepción desenfocada de las diferencias biológicas entre
    varones y mujeres y sí centrada en la personalidad de cada individuo, en sus múltiples posibilidades singulares.
    El propósito es que cada individuo, varón o mujer, se posicione libremente en su "identidad de género". Esta
    ofensiva reaccionaria liberal se sustenta desde los años 90 en desarrollos teóricos como los de Judith Butler
    que convoca a la
    <i>

      “deconstrucción”
    </i>

    del sujeto político del feminismo negando que
    <i>

      “nosotras, las mujeres”
    </i>

    lo
    seamos, bajo la pretensión de ampliarlo a

    <i>
      “colectivos con las más diversas demandas”
    </i>
    . Las mujeres no somos
    un colectivo, ni una identidad ni una diversidad más. Somos la mitad de la humanidad, objeto de una milenaria
    opresión específica y nos organizamos para su abolición. Para dificultar la práctica revolucionaria coherente,
    esgrimen la teoría queer, que es irracional en lo teórico y sectaria excluyente y lesbofóbica en lo práctico.
    Negar
    el sexo biológico y reducir al Patriarcado solo a su faz heteronormativa es obstaculizar el análisis de la
    estructura que nos oprime.
    Bajo una nueva redefinición del género con perspectiva postmoderna, se busca despojar al feminismo de su
    dimensión política liberadora. Tal interpretación no feminista del concepto de género hace que la lucha contra
    la opresión de las mujeressea equivalente a luchar contra cualquier otra forma de discriminación o desigualdad,
    así el sujeto político del movimiento de mujeres y el feminismo, cabalmente, no seríamos las mujeres sino un
    sujeto universal. Se pergeña un
    <b>
      feminismo sin feministas
    </b>
    . Se les exige a las mujeres que renuncien a su propia
    agenda para asumir la agenda de otros colectivos y sectores de la población, mientras unos/es nos niegan y
    otros dejan de nombrarnos como es el caso del programa del (35) EPMLBTTINB en el que sobre 105 talleres
    sólo se nombra a las “mujeres” en 6. El intento en Argentina de transformar el Encuentro de Mujeres en
    Encuentro de mujeres, lesbianas, bisexuales, trans, travestis, intersexuales y no binaries, se inscribe en esta
    ofensiva mundial y para ello es necesario destruir el carácter que los hizo crecer en cantidad y conciencia, se
    trata de acabar con sus espacios independientes de organización.

    


  </p>

  <p>





    Señalamos que desde 1996 en el 11° ENM – CABA personas trans y travestis participan en los encuentros y
    desde 2013 en el 28° ENM – San Juan realizan talleres propios. Pero aquí, como con el uso argumental de la
    visibilización de las mujeres originarias, se utiliza la ya referida táctica de “caballo de troya”. El discurso
    pretendidamente progresista e inclusivo genera confusión entre las mujeres que no descubren fácilmente el
    engaño ideológico y la manipulación política. La lucha contra el Patriarcado es muy encarnizada, éste presenta
    batalla de manera abierta con argumentos conservadores, pero también tiende trampas con ropajes de
    <i>

      falso progresismo
    </i>

    , pues su contraofensiva procede de sectores que se autodefinen de izquierda y feministas. Su
    táctica es la mentada “inclusión” pero el verdadero interés es disputar la dirección de los espacios orgánicos
    del movimiento de mujeres y feminista.




  </p>

  <p>

    





    Este escenario se magnificó en tiempos de pandemia COVID19, pues mientras sufrimos miedos, encierros y
    cuarentenas, la sujeción de nuestros cuerpos para la manifestación pública fue aprovechada por sectores del
    oficialismo y la oposición a niveles nacional, provincial y de CABA para avanzar en legislación y políticas
    públicas con supuestos beneficios a la diversidad y contra el interés de las mujeres, como cabalmente lo expresa
    la paradoja de la Ley de IVE que nos reduce a “personas gestantes”.





  </p>

  <p>






    En tiempos de pandemia, la división entre el 35° ENM y el (35) EPMLBTTINB se materializó en actividades
    virtuales y reuniones de ex comisiones on line promovidas por sus respectivas C.O. que pusieron en
    evidencia, durante el 2020 y 2021, los contenidos opuestos de sus temarios.



  </p>

  <p>
    <b>

      • Uno a Uno, la destrucción de los PILARES en el (35) EPMLBTTINB
    </b>
  </p>

  <p>
    La propuesta de re- escribir la historia y convertir la experiencia de todas en Encuentros Plurinacionales de de
    mujeres, lesbianas, bisexuales, trans, travestis, intersexuales y no binariesse sustenta en una
    estratagema política que aparentemente desconoce al movimiento de mujeres y la construcción colectiva de
    los ENM. Mientras efectivamente se apropia de ellos desde una caracterización de ser tributario de un
    feminismo


    <i>

      “blanco, heterosexual y burgués”
    </i>


    3 que no se corresponde con la realidad de su composición desde
    el origen. La novedad es que el antifeminismo pretende llamarse con el nombre de lo que intenta destruir o
    sea intenta ocupar la etiqueta de verdadero feminismo mientras trabaja denodadamente para apropiarse de él.
    Así se intenta construir una nueva narrativa que descalifica la construcción anterior de 34 años de ENM, pero
    a la vez la utiliza para, en el equívoco, crear confusión ya que no hubo 34 encuentros plurinacionales de las
    disidencias y/ diversidades Este simulado (35) EPMLBTTINB fue en realidad el primero.

    


  </p>

  <p>

    



    La prueba irrefutable de que ha sido el 1° EPMLBTTINB es la destrucción uno a uno de los pilares del ENM:



  </p>

  <p>




    a) DEMOCRÁTICO / Votaron sin buscar consenso en la reunión de conformación de la C.O. – San Luis
    (2019) empujando la ruptura con quienes postularon la necesidad de respetar el mandato del 34° ENM –
    La Plata, cancelando el debate en curso.
    b) AUTÓNOMO y HORIZONTAL/ La C.O. se constituyó como “Asociación Civil 35 Encuentro
    Pluridisidente” CUIT: 30-71757030-4 fecha de inscripción 19/08/2020 AFIP/IGJ con argumentos de
    “transparencia”, para lo que designaron presidenta, secretaria, tesorera y vocales cuyos nombres siguen
    ocultando.
    c) AUTÓNOMO y AUTOFINANCIADO/ Se aceptó la administración: 1°) de la Partida presupuestaria del
    Gobierno de San Luis 2020 renovada en el año 2021, Jurisdicción 11: Secretaría Gral. de la Gobernación
    – Unidad Ejecutora N° 20: Secretaría de la Mujer, Diversidades e Igualdad – Programa 28: “Encuentro
    Plurinacional de Mujeres, Lesb, Trans, Travesti, No Binaries” por un monto de
    <b>
      $121.375.000
    </b>
    – Con el
    descaro de declarar en su Boletín oficial la
    <i>


      “Meta Conceptual: Encuentro LGTBIQ+”

    </i>

    borrando a las
    mujeres de sus objetivos.
    2°) el Dto. Provincial N° 8773 – SGG -SMDel 29.9.22 Convenio de contratación directa firmado entre la
    empresa de servicios

    <i>

      SAPEM -Consultoría San Luis
    </i>

    y la secretaria de la Mujer, Diversidades e Igualdad,
    Ayelén Mazzina a fin de gastos

    <i>

      “no especificados”
    </i>

    del (35) EPMLBTTINB por un monto inicial de



    <b>
      $350.000.000
    </b>

    . Tal maniobra financiera fue protegida por una cláusula de “confidencialidad”.
    d) AUTOCONVOCADO / B.O. del 30.8.22 Res.578 APN del MMGyD que ordena disponer de fondos del


    <i>

      “Programa de fortalecimiento de la participación social y ciudadana en la materia de género y
      diversidad”
    </i>

    para un Concurso de

    <i>

      “organizaciones sociales con personería jurídica”
    </i>

    para el apoyo
    económico con el fin de participar en el (35) EPMLBTTINB respetando su Anexo II

    <i>
      “requisitos de
      elegibilidad”.


    </i>


  </p>

  <p>
    <b>




      • Ficción y traición: simplemente los hechos.



    </b>
  </p>

  <p>


    


    El documento

    <i>

      “Hacia el 35 ENM…”
    </i>
    (2019) decía

    <i>

      “echaron andar el dispositivo político mediático para
      instalar esto como verdad única e indiscutible
    </i>

    [35EPMLBTTINB]
    <i>
      ; por último, identificaron a todas las que
      sostenemos la continuidad del nombre y la historia de los ENM con un partido político, deslegitimando y
      ocultando las múltiples manifestaciones en ese sentido”
    </i>

    
    . Esta reducción en el análisis no reconoce la
    confluencia, en los hechos, de las mujeres del PCR y diversas corrientes feministas para la defensa de los ENM
    por décadas La composición de la C.O. del 35° ENM, su pluralidad y su férrea custodia de los pilares y
    mandatos hizo que resistiera durante casi tres años las presiones para su disolución del gobierno provincial,
    nacional, de sindicatos, movimientos sociales y partidos varios, pero las mujeres que la integraron supieron
    mantenerse unidas pese a denuncias y difamaciones, destrato y cancelaciones.





  </p>

  <p>








    Pero ¿qué pasó?, pasó que, en julio de 2022, el PCR fue la única fuerza política partidaria que definió la
    participación en los dos encuentros, octubre y noviembre, fechas en las que cada uno decidió su realización.
    ¿Qué expresó esa decisión? Primero, la ruptura de la histórica alianza estratégica con las feministas desde el
    1° ENM, privilegiando la alianza electoral con sectores del FdT bajo la
    <b>

      ficción
    </b>
    de medir la realidad con métrica
    de “izquierda o derecha” abandonando la lectura de lucha interimperialista que caracteriza la disputa política
    en la Argentina, presente en ambos bloques electorales (JxC vs FdT) con posibilidades presidencialistas.
    Segundo, el borramiento de las mujeres y su dilución conceptual como minoría frente a un universo,
    nuevamente
    <b>

      ficcional
    </b>

    , de mayorías diversas, lo que expresa su claudicación. Aquella célebre contradicción
    secundaria de las que algunos siguen hablando…, sin entender las leyes propias del movimiento de mujeres y
    sus ENM, se resolvió menospreciando la experiencia política, intelectual y de lucha de los últimos 35 años.




  </p>

  <p>



    La postura del PCR de julio de 2022 que privilegió alianzas ajenas a la autonomía del movimiento de mujeres,
    bajo el slogan de


    <i>

      “unidad ante el avance de la derecha”
    </i>

    no explica la “unificación” con los sectores que
    representan políticas de retroceso e históricamente han sido enemigos de los ENM. Pudiendo tomar otro
    camino, lamentamos el rol de “entregadoras” que eligieron jugar las delegaciones que viajaron en octubre y
    sostuvieron,
    <b>

      nuevamente como ficción
    </b>
    , el encuentro de noviembre como espectáculo para las mujeres que
    influencian, pese al esfuerzo económico que imaginamos significó.



    

  </p>

  <p>





    Las mujeres, todas, en el futuro juzgarán los hechos.




  </p>

  <p>







    Las “Mujeres de Bariloche” (ONG) que subieron al aplausómetro del 35° ENM sin aclarar que ya eran la C.O.
    del (36) EPMLTTBINB montaron su engaño. La “alegría” que ellas expresaron al triunfar, fue en realidad el
    festejo de la traición y el descarado fraude a todas las mujeres presentes en el mes de noviembre en San Luis.
    ¿Por qué la denunciamos como maniobra?, porque a días de terminado el EPMLTTBINB de octubre y sin
    respetar la voluntad de todas las mujeres del 35° ENM que se realizaría recién en noviembre ya circulaba en
    redes el slogan
    <i>

      “El Encuentro Nacional de Mujeres se va a Bariloche. #PORUNSOLOENCUENTRO2023”
    </i>

    .
    Por eso, como reflejó el diario La República (San Luis) la apertura y la marcha fue volanteada con la consigna
    <i>
      “No vamos a Bariloche ni a Cipolletti”
    </i>
    También, en la mañana del 21.11.22 a las 8.15h circuló la denuncia:



  </p>

  <p>




    <i>


      “Asistiremos al cierre del último ENM (1° etapa) cuando se materialice la maniobra de llevar la sede del
      próximo 36° Encuentro… a la ciudad de Bariloche a través de unificar su C.O. bajo un nuevo nombre y el
      abandono explícito de sus pilares”




    </i>

  </p>

  <p>


    


    Las mujeres, feministas, abolicionistas y defensoras de la larga trayectoria de 35 años de construcción de
    unidad para la lucha anti patriarcal, apoyamos la propuesta de sede en la ciudad de Santa Rosa, La Pampa como
    expresión de autonomía y única opción de continuidad. Pero miles fueron engañadas con manipulaciones y
    falsos slogans de “unidad” sin decir con quién y para qué. Si bien las mujeres del PCR y sus corrientes afines,
    responsables de esta vergonzosa acción, saben que en el cierre se elige sólo la próxima sede, hoy juegan a la
    mentira y alegan que la “unificación” les fue otorgada como mandato en ese acto, cuando, en principio, las
    conclusiones del taller N° 1 “Encuentro Nacional de Mujeres” en sus dos comisiones les habían sido adversas.
    Por eso afirmamos, sin dudarlo, que la maniobra fue
    <b>

      traición
    </b>

    y que ella se sustancia en cada una de las
    reuniones plenarias en Bariloche desde el 15.10.22 hasta el 17.12.22 en la que se reconocen, ahora, como “C.O.
    unificada” y se promocionan engañosamente como
    <i>

      “Encuentro…”
    </i>
    sin clarificar su definitivo nombre,
    desconsiderando desde ya que sea el ENM y obviando en su minuta la mención de la “autonomía” como pilar
    fundamental y que su conformación es de
    <i>

      “organizaciones, colectivos y personas independientes de la región”
    </i>
    quitándole a las mujeres, en el enunciado, su protagonismo y rompiendo los pilares de “autoconvocado y
    horizontal” que exige que cada mujer participe de la C.O. de forma personal sin ejercer representación
    alguna.






  </p>

  <p>







    Muchas mujeres, en estos meses, esperaron el llamado a formar la C.O. del 36° ENM, pero fue en vano.




  </p>

  <p>
    <b>







      DESPUES DEL 35° ENM – SAN LUIS 2022



    </b>
  </p>

  <p>
    <b>





      • Balance:



    </b>
  </p>

  <p>





    ¿Debemos dar por terminado al movimiento de mujeres y sus ENM? o ¿sufrimos una derrota? una de tantas,
    infringida por el Patriarcado en alianza con el Capitalismo. En el contexto de la ofensiva patriarcal, liberal,
    misógina, proimperialista de “globalización” de la violencia y explotación sexual y reproductiva de las mujeres
    ¿fue el 35° ENM el último o una primera etapa? La periodización en “olas” del feminismo grafica su dialéctica,
    y reafirma la existencia del mar y su incesante movimiento.
    El Feminismo y la lucha por la abolición de la prostitución y mercantilización de los cuerpos de las mujeres,
    del género en tanto relación de opresión y del Patriarcado como sistema de opresión y explotación nos obliga
    a la defensa de los pilares de los ENM como forma organizativa del movimiento de mujeres. Habemos muchas
    mujeres dispuestas a seguir la pelea y a no aceptar engaños patriarcales.


  </p>

  <p>
    <b>





      • ¿Y ahora? continuamos… por la unidad y la liberación de las mujeres.



    </b>
  </p>

  <p>





    La traición y la falta de convocatoria al 36° ENM – 2023 desde Bariloche, habilita a buscar nueva sede. Por
    otra parte, les pedimos, de manera sorora, a las compañeras de La Pampa que valientemente ofrecieron en San
    Luis la ciudad de Santa Rosa, definan si sus condiciones locales hacen posible un reencuentro de las mujeres
    que recoja esta rica experiencia de décadas para seguir la lucha o si deberemos buscar nuevas alternativas de
    tiempo y lugar. En ese largo camino que seguiremos recorriendo, el próximo 8M 2023, fieles a la convocatoria
    de un Día Internacional de las Mujeres desde 1911, asumiremos la agenda reivindicativa propia basada en el
    análisis objetivo de la realidad social y material en que vivimos. La agenda feminista y abolicionista es
    profundamente revolucionaria y será acompañada, de manera ineludible, de un proceso de organización
    autónoma, de concienciación, de estudio y de lucha. Nuestra tarea principal es, por tanto, impulsar ese proceso,
    mientras que la del Patriarcado, el Capitalismo y sus cómplices pasa por impedirlo.





  </p>

  <p>




  <div class="febrero">

    Febrero 2023.
  </div>







  </p>

  <p>


  <ul>


    <li>
      Graciela Tejero Coni (CABA)
    </li>
    <li>
      Marta Miguelez (CABA)
    </li>
    <li>
      Julieta Bandireli (CABA)
    </li>
    <li>
      Cristina Lobaiza (CABA)
    </li>
    <li>
      Diana Coppola (CABA)
    </li>
    <li>María
      José Binetti (BA)
    </li>
    <li>Marcela
      Paura (BA)
    </li>
    <li>
      Cecilia Solana (CABA)
    </li>
    <li>
      Victoria Solá (CABA)
    </li>
    <li>
      Cecilia Goffedo (BA)
    </li>
    <li>
      Celia Martínez (STA. FE)
    </li>
    <li>
      Viviana Micheloud (CABA)
    </li>
    <li>
      Silvia Villalba (BA)
    </li>
    <li>
      Gabriela Clavel (CABA)
    </li>
    <li>
      Myriam Díaz (CABA)
    </li>
    <li>
      Aldana La Bella (BA)
    </li>
    <li>
      Andrea Quipildor (BA)
    </li>
    <li>
      Nadia Martyniuk (CABA)
    </li>
    <li>
      Magalí Pedrozo (CABA)
    </li>
    <li>
      María T. Cillis (CABA)
    </li>
    <li>
      Norma Cabrera (CABA)
    </li>

  </ul>


  </p>

  <p>

  <br>
  <br>
  <br>
  <br>
  <div style="text-align:center">
    Si querés participar del encuentro presencial en Córdoba, 
<br>
    completá el siguiente formulario con tus datos:
    </div>

  </p>
</div>




  `

  //  
  // imagen = document.querySelector(".presentacion__img");

  // titulo.textContent = params.tituloPresentacion;
  titulo.textContent = "ANTES Y DESPUES DEL 35° ENM – CÓRDOBA 2024";

  // descripcion.textContent = params.descripcionPresentacion;
  // descripcion.textContent = `

  // ANTES Y DESPUES DEL 35° ENM – SAN LUIS 2022
  // Conocer, Reflexionar, Actuar y Transformar
  // Las abajo firmantes somos conscientes del intento fallido de quebrar el movimiento de mujeres en
  // Argentina y su histórico instrumento de organización política, los Encuentros Nacionales de Mujeres. Es
  // preciso despejar falsos debates como por ejemplo que en el “cambio de nombre” se condensa un enfrentamiento
  // generacional entre “viejas rancias” y “jóvenes de la marea verde”, o el conservadurismo contra un impulso de
  // “cambio y progresismo”, nada más lejos que atarnos a tradiciones, nostalgias o quietismos sino una firme
  // resistencia a retrocesos patriarcales en el camino de liberación de las mujeres desde hace tres siglos.
  // Para comprender lo que nos pasa a las mujeres y feministas argentinas, y no equivocar el análisis de la
  // contradicción entre cantidad y calidad, nada más efectivo que conocer los hechos y reflexionar sobre ellos,
  // para actuar con firmeza y claridad conceptual y no detener la necesaria y verdadera transformación social.
  // ANTES DEL 35° ENM – SAN LUIS 2022
  // • ¿Qué se disputa desde el 1° ENM?
  // El contexto histórico del 1°ENM (1986) fue el de la inmensa unidad popular antidictatorial, que hizo posible
  // la creación de la Multisectorial de Mujeres responsable de la primera conmemoración pública en la Argentina
  // del Día Internacional de la Mujer el 8 de marzo de 1984.
  // La génesis del ENM se inició en su Comisión Organizadora en la que confluyeron mujeres de partidos políticos,
  // sindicatos, organizaciones sociales, de DDHH. y feministas autónomas con trayectorias disímiles respecto del
  // feminismo, por razones de edad y variadas experiencias. Esa confluencia se caracterizó por tres grandes
  // corrientes: los sectores socialdemócratas (particularmente UCR y PC) que se inscribían en el proyecto de
  // Tercer Movimiento Histórico empujado por el alfonsinismo que habían sido protagonistas del Foro Mundial
  // de Mujeres (Cierre del 1° Decenio de la Mujer 1985/ONU) en Nairobi, Kenia donde se selló el compromiso
  // de realizar Encuentros Nacionales de Mujeres en todos los países de América Latina y el Caribe; feministas
  // autónomas de izquierda, abolicionistas y defensoras de DDHH que llegaban de participar del III EFLAC
  // Encuentro Feminista de Latinoamérica y Caribe en Bertioga, Brasil y el tercero, el sector maoísta (PCR) que
  // desde su concepción de “línea de masas” había desarrollado organizaciones de mujeres al calor de la lucha
  // antigolpista primero y antidictatorial después. Esta confluencia fue la matriz de origen de la construcción
  // colectiva, impensada, de 34 años ininterrumpidos.
  // Los rasgos principales de esa construcción fueron: a) cada participante de la C.O. hizo valer su voz de forma
  // individual sin ejercer representación alguna, b) como los EFLAC, adquirió formato de “Encuentro” para el
  // intercambio de todas las experiencias, c) su alcance “Nacional”, en términos de territorialidad, d) que sería de
  // “Mujeres” como sujeto de lucha por sus derechos con la mayor amplitud, por lo que no se definió feminista,
  // sino plural, e) su metodología de funcionamiento sería la de “talleres”, modalidad inspirada en la experiencia
  // feminista, que desde la década del 60 practicaron los grupos horizontales (sin jerarquías) descubriendo que “lo
  // personal es político”, que lo individual tiene una dimensión social y que el camino colectivo es el que genera
  // los cambios políticos de transformación de la opresión social de que somos objeto las mujeres.
  // La decisión organizativa de las mujeres fue la que dio continuidad y masividad a los ENM y consolidó su
  // carácter expresado en sus “pilares”, no sin lucha, durante los 34 años desde su origen.
  // Los pilares de esa construcción colectiva que dieron el éxito de crecimiento en cantidad y calidad son: 1)
  // Autoconvocado: las mujeres se organizan a título personal en cada lugar para su realización, 2) Autónomo:
  // es independiente del Estado, gobiernos, partidos políticos, iglesias o cualquier otra estructura organizativa
  // que implique subordinación, 3) Plurinacional: participan mujeres de todos los orígenes étnicos y de todas
  // las naciones, pueblos y territorios, 4) Autofinanciado: sostenido con el aporte económico de las mujeres que
  // participan, 5) Federal: rotar su sede cada año en una ciudad distinta en la que haya un grupo de mujeres
  // dispuestas a organizarlo, 6) Plural: participan mujeres de todos las clases sociales, orientaciones sexuales,
  // etc. 7) Democrático: se expresan todas y cada una de las ideas, posturas y opiniones y ninguna está por
  // encima de otra, 8) Horizontal: no existen títulos ni jerarquías entre mujeres.

  // Este carácter es el que está y estuvo desde el 1° ENM en confrontación con quienes desde su interior
  // disputaron el poder de dirección del movimiento de mujeres para fines que exceden la lucha por resolver
  // sus propias necesidades y conquista de derechos.
  // El crecimiento exponencial que adquirieron los ENM trajeron aparejado la agudización de esa disputa
  // histórica por el poder. Es importante señalar que el rasgo distintivo de los ENM fue que cada año se volvieron
  // más feministas. El auge del movimiento de mujeres y la masividad de los ENM los tornó cada vez más
  // peligrosos para las clases dominantes en la Argentina, pues ellos, hasta el 34° ENM fueron claramente
  // opositores por una correcta valoración de cada momento político y la relación entre la lucha social general y
  // su coherencia anti patriarcal. La contienda se expresó cada año en la intención de quebrar su carácter poniendo
  // blanco en alguno de sus pilares. Entendemos que la propuesta de cambiar el nombre al ENM, como táctica
  // impulsada en los últimos años, no tiene nada de novedosa, son los mismos sectores persiguiendo los mismos
  // objetivos de dirigir o en su defecto fraccionar al movimiento. Nada más lejos del declamado interés “inclusivo”
  // sino más bien la fachada con la que intentan tapar los verdaderos fines.
  // • Ejemplos de cómo atentaron contra los pilares durante 34 años
  // Los Encuentros desde su origen recibieron embestidas externas con intenciones destructivas o de cooptación:
  // gobernadores como Bordón (Mendoza) o “Palito” Ortega (Tucumán) queriendo sacar réditos electorales
  // mostrándose "amigables" o pactos como los de Menem con el Obispo de San Juan, Ítalo di Stéfano, intentando
  // romper el 12° ENM bajo la estratagema de un fracasado Encuentro paralelo de estricto contenido conservador.
  // Para estos embates las mujeres tuvimos reservas y así surgió el slogan “¡Qué momento, qué momento! ¡Les
  // hicimos otro Encuentro!” pero, la gravedad sufrida cada año estuvo en la lucha interna en cada C.O. y en cada
  // Encuentro por la defensa de los pilares. Algunos de esos momentos de la permanente disputa por el poder
  // fueron: en 1986, cuando un sector de la C.O. del 1° ENM registró en la IGJ la asociación civil “ENM – Buenos
  // Aires” atentando contra el pilar federal, de horizontalidad y autonomía; 1990, cuando se intentó el “control
  // porteño” de la C.O. del 5° ENM-Santiago del Estero a través de reuniones de ex comisiones atentando contra
  // la horizontalidad y la democracia; 1996, cuando en el 11° ENM -CABA se impusieron “paneles de
  // especialistas” en el programa oficial en los mismos horarios que los talleres cuestionando la eficacia de su
  // funcionamiento y la horizontalidad; en 1998, cuando, en ocasión del ingreso de los partidos trotskistas
  // (ausentes, hasta la fecha, en los ENM) cuestionaron la metodología de consenso en el 13° ENM- Chaco,
  // proponiendo “votar” lo que atenta contra la horizontalidad propia de los Encuentros, confundiendo las reglas
  // de instancias asamblearias ajenas a la metodología de los talleres y también, desde entonces, el boicot a las
  // inscripciones poniendo en peligro el pilar del autofinanciamiento, por dar solo algunos ejemplos de las
  // históricas batallas internas.

  // • Última secuencia histórica del intento de destrucción
  // Desde el 31° ENM - Rosario 2016 se acrecentó la acción de actividades complementarias durante el desarrollo
  // del encuentro para debilitar la participación de las mujeres en los talleres (radios abiertas, asambleas en las
  // plazas con oradoras de “trayectoria”, actos partidarios hasta con dirigentes varones, etc.) que se multiplicaron
  // en el 32° ENM - Chaco 2017 (marcha contra los “travesticidios”, por ejemplo, dividida de la tradicional marcha
  // general del domingo iniciada en 1992). Desde entonces, se instaló una ofensiva sin tregua que consistió en
  // imponer el cambio de carácter de los ENM y el corrimiento de las mujeres como su principal sujeto político a
  // través del cambio del nombre que algunas feministas llamaron la táctica del “caballo de troya”. Instalaron la
  // discusión por redes con fotos de mujeres que decían “vamos a Trelew al encuentro plurinacional de mujeres,
  // lesbianas, travestis, trans, bisexuales y no binaries”, que como Campaña “Somos Plurinacional” incluía a la
  // mismísima Judith Butler, con la que nunca tuvimos oportunidad de debatir en un taller de Encuentro. Esta
  // ofensiva contó con el apoyo mediático de prensa, particularmente Página12 y Clarín, siendo la primera
  // mención de este último recién en 2013 en ocasión de enfrentamientos con sectores antiaborto. Aún con el
  // ninguneo de los medios nacionales los ENM se organizaron y crecieron pese a ese silencio mediático, pero
  // ahora son uno de los principales instrumentos para generar confusión y división.
  // Las conclusiones de los talleres del 33° ENM – Trelew (que debió ser Pto. Madryn si se hubiera respetado el
  // aplausómetro) no consensuaron el cambio de nombre y muy especialmente el taller de mujeres originarias,
  // existente desde el 1° ENM, se expresó “por quedarse en él” y solo incluir como 8vo pilar la
  // “plurinacionalidad”. Por cierto, revela la intromisión rupturista en la C.O., que la edición de las conclusiones
  // de Trelew, Chubut 2018 no publica en anexo el balance económico del Encuentro, obligación de toda C.O.,
  // sino la transcripción de posturas y opiniones, en radios abiertas, de mujeres de la “Mesa de Feministas del

  // Abya Yala” y la Campaña “Somos Plurinacionales” rompiendo de un plumazo los pilares de horizontalidad,
  // democracia, pluralismo y plurinacionalidad.
  // Así, llegamos a La Plata en 2019, al 34° ENM, en el que, por medios periodísticos, redes y carteles se intentó
  // definir el carácter plurinacional y de las disidencias sexuales y de género al Encuentro, pero sin poder
  // imponer el cambio de nombre en la apertura, impulsaron la idea en algunos talleres y solo lo lograron en el
  // 3,5 % de las 200.000 participantes, según se desprende de las conclusiones. Fue así, que eligieron la táctica
  // de funcionar de manera asamblearia en plazas y patios de escuela con oradoras que daban por aprobado el
  // cambio, forzando votaciones y generando el necesario clima de confusión que sería utilizado en el futuro
  // proceso hacia el 35° ENM 2020.1
  // Estas circunstancias de disputa explícita, autoritarismo y violencias vividas en La Plata fueron registradas en
  // un documento fechado en diciembre de 2019 bajo el título “Hacia el 35 Encuentro Nacional de Mujeres.
  // Reflexiones sobre los ENM y la propuesta de cambiar su nombre y su sentido” en el que decenas de mujeres
  // de todo el país reclamamos respeto por las herramientas de lucha y la propia organización política del
  // Movimiento de Mujeres, movimiento de movimientos y ratificamos que “sostenemos la continuidad de los
  // Encuentros Nacionales de Mujeres plurinacionales, autónomos, autoconvocados, pluralistas,
  // autofinanciados, democráticos y federales, manteniendo la continuidad histórica y política de su nombre”.
  // QUÉ PASÓ EN EL 35° ENM – SAN LUIS 2022
  // • ¿Dos Comisiones Organizadoras? ¿Porqué?
  // A los otrora ENM autónomos y opositores por esencia, se les forzó el cambio de su carácter. ¿Por qué? ¿Cómo?
  // Desde diciembre de 2019 y la asunción del FdT - Frente de Todos, cuya composición fue y sigue siendo muy
  // ecléctica con declarada intención electoral y sin base programática de acción y por defecto intensa lucha
  // interna, cambiaron el escenario del ENM con nuevas alianzas y disputas.
  // Por fuera de la voluntad y la autonomía de los miles de mujeres que durante 34 años protagonizaron los
  // ENM, la flamante ministra de Mujeres, Géneros y Diversidad, Elizabeth Gómez Alcorta, expresión de un
  // sector del FdT y la secretaria de la Mujer, Diversidades e Igualdad de San Luis, Ayelén Mazzina se reunieron
  // el 19.12.19 para “pactar” la organización del que sería, casi tres años después, el, ahora “oficialista”, (35)
  // EPMLTTBINB.2 La segunda reunión plenaria (2019) de conformación de la C.O. del 35° ENM – San Luis
  // precipitó su ruptura con quienes defendieron la necesidad de respetar el mandato de las mujeres del 34°
  // ENM – La Plata de seguir el debate en los próximos talleres.
  // • Contexto internacional y nacional de ofensiva patriarcal en tiempos de Pandemia.
  // Hoy la ofensiva política para desviar la lucha de las mujeres es planetaria y se da en todos los terrenos, políticos
  // e ideológicos, pues las élites dominantes son conscientes de nuestra capacidad transformadora y se han dado
  // la estrategia de invalidar la teoría feminista vaciándola de contenido. En las dos últimas décadas, desde
  // instituciones internacionales como el Banco Mundial, Banco Interamericano de Desarrollo, agencias de
  // Naciones Unidas, entre otras y desde instituciones gubernamentales se fue extendiendo el uso del término
  // «género» como sinónimo de mujer o sexo, y en la medida que el término se popularizó con la ayuda de los
  // medios de comunicación, el feminismo se fue desdibujando como proyecto político de liberación.
  // La tergiversación del concepto de género busca ocultar la interpretación de la realidad que muestra a nuestra
  // sociedad inmersa en un sistema de dominación. La operación ideológica de ofensiva patriarcal es reducir el
  // género a un conjunto fijo de rasgos psicológicos, concepción desenfocada de las diferencias biológicas entre
  // varones y mujeres y sí centrada en la personalidad de cada individuo, en sus múltiples posibilidades singulares.
  // El propósito es que cada individuo, varón o mujer, se posicione libremente en su "identidad de género". Esta
  // ofensiva reaccionaria liberal se sustenta desde los años 90 en desarrollos teóricos como los de Judith Butler
  // que convoca a la “deconstrucción” del sujeto político del feminismo negando que “nosotras, las mujeres” lo
  // seamos, bajo la pretensión de ampliarlo a “colectivos con las más diversas demandas”. Las mujeres no somos
  // un colectivo, ni una identidad ni una diversidad más. Somos la mitad de la humanidad, objeto de una milenaria
  // 1 El diario Pag.12 el 7.10.19 en el artículo “El Encuentro somos todes” anticipaba lo que sucedería y en el mismo, C. Korol bajo el
  // título “Historia de un quiebre” predijo con lúcida clarividencia ese futuro: sectores “pluri” representados por algunos/as/es participantes
  // trans asaltaron el escenario del cierre buscando imponer su voluntad.
  // 2 Cumpliendo el designio de Claudia Korol “Plurinacional o nada” Pág. 12, Suplemento Las 12, 28/12/2018.

  // opresión específica y nos organizamos para su abolición. Para dificultar la práctica revolucionaria coherente,
  // esgrimen la teoría queer, que es irracional en lo teórico y sectaria excluyente y lesbofóbica en lo práctico. Negar
  // el sexo biológico y reducir al Patriarcado solo a su faz heteronormativa es obstaculizar el análisis de la
  // estructura que nos oprime.
  // Bajo una nueva redefinición del género con perspectiva postmoderna, se busca despojar al feminismo de su
  // dimensión política liberadora. Tal interpretación no feminista del concepto de género hace que la lucha contra
  // la opresión de las mujeressea equivalente a luchar contra cualquier otra forma de discriminación o desigualdad,
  // así el sujeto político del movimiento de mujeres y el feminismo, cabalmente, no seríamos las mujeres sino un
  // sujeto universal. Se pergeña un feminismo sin feministas. Se les exige a las mujeres que renuncien a su propia
  // agenda para asumir la agenda de otros colectivos y sectores de la población, mientras unos/es nos niegan y
  // otros dejan de nombrarnos como es el caso del programa del (35) EPMLBTTINB en el que sobre 105 talleres
  // sólo se nombra a las “mujeres” en 6. El intento en Argentina de transformar el Encuentro de Mujeres en
  // Encuentro de mujeres, lesbianas, bisexuales, trans, travestis, intersexuales y no binaries, se inscribe en esta
  // ofensiva mundial y para ello es necesario destruir el carácter que los hizo crecer en cantidad y conciencia, se
  // trata de acabar con sus espacios independientes de organización.
  // Señalamos que desde 1996 en el 11° ENM – CABA personas trans y travestis participan en los encuentros y
  // desde 2013 en el 28° ENM – San Juan realizan talleres propios. Pero aquí, como con el uso argumental de la
  // visibilización de las mujeres originarias, se utiliza la ya referida táctica de “caballo de troya”. El discurso
  // pretendidamente progresista e inclusivo genera confusión entre las mujeres que no descubren fácilmente el
  // engaño ideológico y la manipulación política. La lucha contra el Patriarcado es muy encarnizada, éste presenta
  // batalla de manera abierta con argumentos conservadores, pero también tiende trampas con ropajes de falso
  // progresismo, pues su contraofensiva procede de sectores que se autodefinen de izquierda y feministas. Su
  // táctica es la mentada “inclusión” pero el verdadero interés es disputar la dirección de los espacios orgánicos
  // del movimiento de mujeres y feminista.
  // Este escenario se magnificó en tiempos de pandemia COVID19, pues mientras sufrimos miedos, encierros y
  // cuarentenas, la sujeción de nuestros cuerpos para la manifestación pública fue aprovechada por sectores del
  // oficialismo y la oposición a niveles nacional, provincial y de CABA para avanzar en legislación y políticas
  // públicas con supuestos beneficios a la diversidad y contra el interés de las mujeres, como cabalmente lo expresa
  // la paradoja de la Ley de IVE que nos reduce a “personas gestantes”.
  // En tiempos de pandemia, la división entre el 35° ENM y el (35) EPMLBTTINB se materializó en actividades
  // virtuales y reuniones de ex comisiones on line promovidas por sus respectivas C.O. que pusieron en
  // evidencia, durante el 2020 y 2021, los contenidos opuestos de sus temarios.
  // • Uno a Uno, la destrucción de los PILARES en el (35) EPMLBTTINB
  // La propuesta de re- escribir la historia y convertir la experiencia de todas en Encuentros Plurinacionales de de
  // mujeres, lesbianas, bisexuales, trans, travestis, intersexuales y no binariesse sustenta en una
  // estratagema política que aparentemente desconoce al movimiento de mujeres y la construcción colectiva de
  // los ENM. Mientras efectivamente se apropia de ellos desde una caracterización de ser tributario de un
  // feminismo “blanco, heterosexual y burgués”
  // 3 que no se corresponde con la realidad de su composición desde
  // el origen. La novedad es que el antifeminismo pretende llamarse con el nombre de lo que intenta destruir o
  // sea intenta ocupar la etiqueta de verdadero feminismo mientras trabaja denodadamente para apropiarse de él.
  // Así se intenta construir una nueva narrativa que descalifica la construcción anterior de 34 años de ENM, pero
  // a la vez la utiliza para, en el equívoco, crear confusión ya que no hubo 34 encuentros plurinacionales de las
  // disidencias y/ diversidades Este simulado (35) EPMLBTTINB fue en realidad el primero.
  // La prueba irrefutable de que ha sido el 1° EPMLBTTINB es la destrucción uno a uno de los pilares del ENM:
  // a) DEMOCRÁTICO / Votaron sin buscar consenso en la reunión de conformación de la C.O. – San Luis
  // (2019) empujando la ruptura con quienes postularon la necesidad de respetar el mandato del 34° ENM –
  // La Plata, cancelando el debate en curso.
  // b) AUTÓNOMO y HORIZONTAL/ La C.O. se constituyó como “Asociación Civil 35 Encuentro
  // Pluridisidente” CUIT: 30-71757030-4 fecha de inscripción 19/08/2020 AFIP/IGJ con argumentos de
  // 3 Como señaló Korol, una de sus mentoras, en Pág. 12 y no se cansó Adriana Carrasco de reiterar en los suyos del Suplemento Soy.

  // “transparencia”, para lo que designaron presidenta, secretaria, tesorera y vocales cuyos nombres siguen
  // ocultando.
  // c) AUTÓNOMO y AUTOFINANCIADO/ Se aceptó la administración: 1°) de la Partida presupuestaria del
  // Gobierno de San Luis 2020 renovada en el año 2021, Jurisdicción 11: Secretaría Gral. de la Gobernación
  // – Unidad Ejecutora N° 20: Secretaría de la Mujer, Diversidades e Igualdad – Programa 28: “Encuentro
  // Plurinacional de Mujeres, Lesb, Trans, Travesti, No Binaries” por un monto de $121.375.000 – Con el
  // descaro de declarar en su Boletín oficial la “Meta Conceptual: Encuentro LGTBIQ+” borrando a las
  // mujeres de sus objetivos.
  // 2°) el Dto. Provincial N° 8773 – SGG -SMDel 29.9.22 Convenio de contratación directa firmado entre la
  // empresa de servicios SAPEM -Consultoría San Luis y la secretaria de la Mujer, Diversidades e Igualdad,
  // Ayelén Mazzina a fin de gastos “no especificados” del (35) EPMLBTTINB por un monto inicial de
  // $350.000.000. Tal maniobra financiera fue protegida por una cláusula de “confidencialidad”.
  // d) AUTOCONVOCADO / B.O. del 30.8.22 Res.578 APN del MMGyD que ordena disponer de fondos del
  // “Programa de fortalecimiento de la participación social y ciudadana en la materia de género y
  // diversidad” para un Concurso de “organizaciones sociales con personería jurídica” para el apoyo
  // económico con el fin de participar en el (35) EPMLBTTINB respetando su Anexo II “requisitos de
  // elegibilidad”.
  // • Ficción y traición: simplemente los hechos.
  // El documento “Hacia el 35 ENM…” (2019) decía “echaron andar el dispositivo político mediático para
  // instalar esto como verdad única e indiscutible [35EPMLBTTINB]; por último, identificaron a todas las que
  // sostenemos la continuidad del nombre y la historia de los ENM con un partido político, deslegitimando y
  // ocultando las múltiples manifestaciones en ese sentido”. Esta reducción en el análisis no reconoce la
  // confluencia, en los hechos, de las mujeres del PCR y diversas corrientes feministas para la defensa de los ENM
  // por décadas La composición de la C.O. del 35° ENM, su pluralidad y su férrea custodia de los pilares y
  // mandatos hizo que resistiera durante casi tres años las presiones para su disolución del gobierno provincial,
  // nacional, de sindicatos, movimientos sociales y partidos varios, pero las mujeres que la integraron supieron
  // mantenerse unidas pese a denuncias y difamaciones, destrato y cancelaciones.
  // Pero ¿qué pasó?, pasó que, en julio de 2022, el PCR fue la única fuerza política partidaria que definió la
  // participación en los dos encuentros, octubre y noviembre, fechas en las que cada uno decidió su realización.
  // ¿Qué expresó esa decisión? Primero, la ruptura de la histórica alianza estratégica con las feministas desde el
  // 1° ENM, privilegiando la alianza electoral con sectores del FdT bajo la ficción de medir la realidad con métrica
  // de “izquierda o derecha” abandonando la lectura de lucha interimperialista que caracteriza la disputa política
  // en la Argentina, presente en ambos bloques electorales (JxC vs FdT) con posibilidades presidencialistas.
  // Segundo, el borramiento de las mujeres y su dilución conceptual como minoría frente a un universo,
  // nuevamente ficcional, de mayorías diversas, lo que expresa su claudicación. Aquella célebre contradicción
  // secundaria de las que algunos siguen hablando…, sin entender las leyes propias del movimiento de mujeres y
  // sus ENM, se resolvió menospreciando la experiencia política, intelectual y de lucha de los últimos 35 años.
  // La postura del PCR de julio de 2022 que privilegió alianzas ajenas a la autonomía del movimiento de mujeres,
  // bajo el slogan de “unidad ante el avance de la derecha” no explica la “unificación” con los sectores que
  // representan políticas de retroceso e históricamente han sido enemigos de los ENM. Pudiendo tomar otro
  // camino, lamentamos el rol de “entregadoras” que eligieron jugar las delegaciones que viajaron en octubre y
  // sostuvieron, nuevamente como ficción, el encuentro de noviembre como espectáculo para las mujeres que
  // influencian, pese al esfuerzo económico que imaginamos significó.
  // Las mujeres, todas, en el futuro juzgarán los hechos.
  // Las “Mujeres de Bariloche” (ONG) que subieron al aplausómetro del 35° ENM sin aclarar que ya eran la C.O.
  // del (36) EPMLTTBINB montaron su engaño. La “alegría” que ellas expresaron al triunfar, fue en realidad el
  // festejo de la traición y el descarado fraude a todas las mujeres presentes en el mes de noviembre en San Luis.
  // ¿Por qué la denunciamos como maniobra?, porque a días de terminado el EPMLTTBINB de octubre y sin
  // respetar la voluntad de todas las mujeres del 35° ENM que se realizaría recién en noviembre ya circulaba en
  // redes el slogan “El Encuentro Nacional de Mujeres se va a Bariloche. #PORUNSOLOENCUENTRO2023”.
  // Por eso, como reflejó el diario La República (San Luis) la apertura y la marcha fue volanteada con la consigna
  // “No vamos a Bariloche ni a Cipolletti” También, en la mañana del 21.11.22 a las 8.15h circuló la denuncia:

  // “Asistiremos al cierre del último ENM (1° etapa) cuando se materialice la maniobra de llevar la sede del
  // próximo 36° Encuentro… a la ciudad de Bariloche a través de unificar su C.O. bajo un nuevo nombre y el
  // abandono explícito de sus pilares”
  // Las mujeres, feministas, abolicionistas y defensoras de la larga trayectoria de 35 años de construcción de
  // unidad para la lucha anti patriarcal, apoyamos la propuesta de sede en la ciudad de Santa Rosa, La Pampa como
  // expresión de autonomía y única opción de continuidad. Pero miles fueron engañadas con manipulaciones y
  // falsos slogans de “unidad” sin decir con quién y para qué. Si bien las mujeres del PCR y sus corrientes afines,
  // responsables de esta vergonzosa acción, saben que en el cierre se elige sólo la próxima sede, hoy juegan a la
  // mentira y alegan que la “unificación” les fue otorgada como mandato en ese acto, cuando, en principio, las
  // conclusiones del taller N° 1 “Encuentro Nacional de Mujeres” en sus dos comisiones les habían sido adversas.
  // Por eso afirmamos, sin dudarlo, que la maniobra fue traición y que ella se sustancia en cada una de las
  // reuniones plenarias en Bariloche desde el 15.10.22 hasta el 17.12.22 en la que se reconocen, ahora, como “C.O.
  // unificada” y se promocionan engañosamente como “Encuentro…” sin clarificar su definitivo nombre,
  // desconsiderando desde ya que sea el ENM y obviando en su minuta la mención de la “autonomía” como pilar
  // fundamental y que su conformación es de “organizaciones, colectivos y personas independientes de la región”
  // quitándole a las mujeres, en el enunciado, su protagonismo y rompiendo los pilares de “autoconvocado y
  // horizontal” que exige que cada mujer participe de la C.O. de forma personal sin ejercer representación
  // alguna.
  // Muchas mujeres, en estos meses, esperaron el llamado a formar la C.O. del 36° ENM, pero fue en vano.
  // DESPUES DEL 35° ENM – SAN LUIS 2022
  // • Balance:
  // ¿Debemos dar por terminado al movimiento de mujeres y sus ENM? o ¿sufrimos una derrota? una de tantas,
  // infringida por el Patriarcado en alianza con el Capitalismo. En el contexto de la ofensiva patriarcal, liberal,
  // misógina, proimperialista de “globalización” de la violencia y explotación sexual y reproductiva de las mujeres
  // ¿fue el 35° ENM el último o una primera etapa? La periodización en “olas” del feminismo grafica su dialéctica,
  // y reafirma la existencia del mar y su incesante movimiento.
  // El Feminismo y la lucha por la abolición de la prostitución y mercantilización de los cuerpos de las mujeres,
  // del género en tanto relación de opresión y del Patriarcado como sistema de opresión y explotación nos obliga
  // a la defensa de los pilares de los ENM como forma organizativa del movimiento de mujeres. Habemos muchas
  // mujeres dispuestas a seguir la pelea y a no aceptar engaños patriarcales.
  // • ¿Y ahora? continuamos… por la unidad y la liberación de las mujeres.
  // La traición y la falta de convocatoria al 36° ENM – 2023 desde Bariloche, habilita a buscar nueva sede. Por
  // otra parte, les pedimos, de manera sorora, a las compañeras de La Pampa que valientemente ofrecieron en San
  // Luis la ciudad de Santa Rosa, definan si sus condiciones locales hacen posible un reencuentro de las mujeres
  // que recoja esta rica experiencia de décadas para seguir la lucha o si deberemos buscar nuevas alternativas de
  // tiempo y lugar. En ese largo camino que seguiremos recorriendo, el próximo 8M 2023, fieles a la convocatoria
  // de un Día Internacional de las Mujeres desde 1911, asumiremos la agenda reivindicativa propia basada en el
  // análisis objetivo de la realidad social y material en que vivimos. La agenda feminista y abolicionista es
  // profundamente revolucionaria y será acompañada, de manera ineludible, de un proceso de organización
  // autónoma, de concienciación, de estudio y de lucha. Nuestra tarea principal es, por tanto, impulsar ese proceso,
  // mientras que la del Patriarcado, el Capitalismo y sus cómplices pasa por impedirlo.
  // Febrero 2023.
  // Graciela Tejero Coni (CABA)
  // Marta Miguelez (CABA)
  // Julieta Bandireli (CABA)
  // Cristina Lobaiza (CABA)
  // Diana Coppola (CABA) María
  // José Binetti (BA) Marcela
  // Paura (BA)
  // Cecilia Solana (CABA)
  // Victoria Solá (CABA)
  // Cecilia Goffedo (BA)
  // Celia Martínez (STA. FE)
  // Viviana Micheloud (CABA)
  // Silvia Villalba (BA)
  // Gabriela Clavel (CABA)
  // Myriam Díaz (CABA)
  // Aldana La Bella (BA)
  // Andrea Quipildor (BA)
  // Nadia Martyniuk (CABA)
  // Magalí Pedrozo (CABA)
  // María T. Cillis (CABA)
  // Norma Cabrera (CABA)

  // Si querés adherir completá el siguiente formulario:
  // `;

  // imagen.src = params.imagenPresentacion;
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

  template.content.querySelector(".descripcion-servicio").innerHTML =
    params.descripcionServicio;

  template.content.querySelector(".imagen-servicio").src = params.image;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}
// FIN OBTENER SERVICIOS DESDE CMS

function main() {


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
// presentacion