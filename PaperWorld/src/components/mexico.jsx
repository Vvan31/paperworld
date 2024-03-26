import "./mexico.css";

import mexicoPhoto from "../assets/mexico/palacio-min.jpg";
import mujer from "../assets/mexico/woman-min.jpg";
import altar from "../assets/mexico/altar-min.jpg";
import data from "../data.json"
import Attractions from "./attractions.jsx";

const Mexico = ({ language }) => {

  // window.addEventListener('scroll', function () {
  //   var scrollPosition = window.scrollY;
  //   var windowHeight = window.innerHeight;
  //   var elements = document.querySelectorAll('.mini-parallax');

  //   elements.forEach(function (element) {
  //     var elementTop = element.offsetTop;
  //     var elementHeight = element.offsetHeight;
  //     var middleOfElement = elementTop + elementHeight / 2;

  //     if (scrollPosition >= middleOfElement - windowHeight / 2 && scrollPosition <= middleOfElement + windowHeight / 2) {
  //       element.style.borderRadius = '0%'; // Change border-radius to 0% when image is in the middle of the screen
  //     } else {
  //       element.style.borderRadius = '100% 100% 100% 100% /60% 60% 0% 0%'; // Reset border-radius otherwise
  //     }
  //   });
  // });
  let { mexico } = data[language];

  return (
    <div className="mexicoMain">
      <div className="parallax" style={{ backgroundImage: `url(${mexicoPhoto})` }}>
        <div className="titulo-parallax">
          <h1>{mexico.title}</h1>
        </div>
      </div>
      <div className="content">
        <h3 className="title-content">
          {mexico.subtitle}
        </h3>
        <p>
          {mexico.p1}
        </p>
        <div id="miniParallax" className="mini-parallax" style={{ backgroundImage: `url(${mujer})` }}></div>
        <p>
          {mexico.p2}
        </p>
        <p>
          {mexico.p3}
        </p>
        <div id="miniParallax" className="mini-parallax" style={{ backgroundImage: `url(${altar})` }}></div>
        <p>
          {mexico.p4}
        </p>
        <p>
          {mexico.p5}
          </p>

      </div>


      {/* <div className="attractions">
        <h2 className="attractionsTitle">Eventos que recomendamos conocer</h2>
        <div className="attractionCard">
          <div className="atCard" style={{
            backgroundImage: `url(${xochimilco})`,

          }}>
            <div className="atTitleContainer">
              <h3 className="atTitle">Xochimilco</h3>
              <div className="hiddenContent">
                <h3>La llorona embarcadero cuemanco</h3>
                <span>El evento "La Llorona" se ha presentado durante 30 años en los canales de Xochimilco, específicamente en el Embarcadero Cuemanco, ofreciendo un espectáculo multidisciplinario que fusiona música, teatro y danza prehispánica. A través de más de 700 representaciones, el evento busca promover la riqueza natural y cultural de Xochimilco, reconocida como Patrimonio Cultural de la Humanidad. Este año, bajo el nombre "Chokani", el espectáculo resalta la importancia de las lenguas indígenas y su relevancia en la identidad nacional. La duración del espectáculo es de 60 minutos, seguido de un recorrido en trajinera de 90 minutos, incluido en el precio del boleto, ofreciendo una experiencia única en los canales de Xochimilco. https://www.lalloronaencuemanco.com/
                </span>
              </div>
            </div>

          </div>
          <div className="atCard" style={{ backgroundImage: `url(${zocalo})` }}>
            <div className="atTitleContainer">
              <h3 className="atTitle">Zocalo
              </h3>
              <div className="hiddenContent">
                <h3>La Mega Ofrenda en el Zócalo</h3>
                <span>
                  La Mega Ofrenda en el corazón del Centro Histórico de la ciudad de México sigue siendo un espectáculo visual impresionante, aprovechando el éxito del año anterior, que atrajo a multitudes. Durante el día, la luz natural resalta los detalles del altar y las figuras, proporcionando oportunidades para capturar fotografías increíbles. Sin embargo, al caer la noche, la atmósfera se transforma con una iluminación vibrante que envuelve el Zócalo, creando un ambiente aún más especial. A pesar de la temática diferente de este año, la calavera monumental sigue siendo una presencia imponente. Se anima a las familias y amigos a visitar esta celebración para disfrutar de una experiencia única y para honrar la tradición del Día de Muertos de una manera innovadora.
                </span>
              </div>
            </div>

          </div>

        </div>
      </div> */}

<Attractions language={language} />

    </div>
  );
};

export default Mexico;
