import "./mexico.css";

import mexico from "../assets/mexico/palacio.jpg";
import mujer from "../assets/mexico/woman.jpg";
import altar from "../assets/mexico/altar.jpg";
import xochimilco from "../assets/mexico/xochimilco.jpg";
import zocalo from "../assets/mexico/zocalo.jpg";

const Mexico = ({ language }) => {

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;
        var elements = document.querySelectorAll('.mini-parallax');
    
        elements.forEach(function(element) {
            var elementTop = element.offsetTop;
            var elementHeight = element.offsetHeight;
            var middleOfElement = elementTop + elementHeight / 2;
    
            if (scrollPosition >= middleOfElement - windowHeight / 2 && scrollPosition <= middleOfElement + windowHeight / 2) {
                element.style.borderRadius = '0%'; // Change border-radius to 0% when image is in the middle of the screen
            } else {
                element.style.borderRadius = '100% 100% 100% 100% /60% 60% 0% 0%'; // Reset border-radius otherwise
            }
        });
    });
    

    
  return (
    <div className="mexicoMain">
      <div className="parallax" style={{ backgroundImage: `url(${mexico})` }}>
        <div className="titulo-parallax">
          <h1>Conoce México</h1>
        </div>
      </div>
      <div className="content">
        <h3 className="title-content">
          El Día de Muertos en México: Honrando la Vida y la Memoria de los
          Seres Queridos
        </h3>
        <p>
          El Día de Muertos, una de las festividades más emblemáticas de México,
          es una celebración profundamente arraigada en la rica historia y la
          cultura del país. Esta tradición única se remonta a las antiguas
          civilizaciones mesoamericanas, como los aztecas, mayas y purépechas,
          quienes honraban a sus ancestros y veneraban a la muerte como parte
          natural del ciclo de la vida.
        </p>
        <div id="miniParallax" className="mini-parallax" style={{ backgroundImage: `url(${mujer})` }}></div>
        <p>
          El Día de Muertos se celebra cada año los días 1 y 2 de noviembre,
          coincidiendo con la celebración católica de Todos los Santos y los
          Fieles Difuntos. Durante esta festividad, las familias mexicanas se
          reúnen para recordar y honrar a sus seres queridos que han fallecido.
          A través de una mezcla de rituales, tradiciones y símbolos, se crea un
          ambiente de celebración y respeto por aquellos que han partido de este
          mundo.
        </p>
        <p>Una de las características más reconocibles del Día de Muertos es el altarcito, un altar dedicado a los difuntos que se decora con fotografías, velas, flores, comida, bebidas y objetos personales. Se cree que, durante estos días, el espíritu de los seres queridos regresa al mundo de los vivos para disfrutar de las ofrendas que se les han preparado.
</p>
<div id="miniParallax" className="mini-parallax" style={{ backgroundImage: `url(${altar})` }}></div>
    <p>El Día de Muertos es una festividad llena de alegría, música, comida y recuerdos. A través de esta celebración, los mexicanos celebran la vida y la memoria de aquellos que ya no están físicamente con nosotros, manteniendo viva su presencia y su legado en el corazón de la comunidad.</p>
     <p>En America’s Paper World, nos enorgullece celebrar y compartir esta rica tradición cultural con el mundo. Únete a nosotros para explorar la belleza y el significado del Día de Muertos en México, y para honrar juntos a aquellos que han dejado una huella indeleble en nuestras vidas.</p>
     
      </div>
    </div>
  );
};

export default Mexico;
