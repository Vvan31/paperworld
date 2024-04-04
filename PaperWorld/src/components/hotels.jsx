
import data from "../data.json";
import hilton from "../assets/hoteles/hilton.jpg";
import AC from "../assets/hoteles/AC.jpg";
import gamma from "../assets/hoteles/gamma.jpg";
import cityExpress from "../assets/hoteles/cityexpress.jpg";
import doubleTree from "../assets/hoteles/doubleTree.jpg";

const  Hotels = ({ language }) => {
    const { hotels } = data[language]; 

    return (
      <>
        <Hotel />
      </>  
    );
}
export default Hotels;
const Hotel = () => {
    return (
        <div className="wrapper">
        <section className="light">
            <div className="container py-2">
                <div className="h1 text-center text-dark" id="pageHeaderTitle">Titulo</div>

                <article className="postcard light blue">
                    <a className="postcard__img_link" href="#">
                        <img className="postcard__img" src={hilton} alt="Image Title" />
                    </a>
                    <div className="postcard__text t-dark">
                        <h1 className="postcard__title blue"><a href="#">Hilton</a></h1>
                        <div className="postcard__subtitle small">
                            <time dateTime="2020-05-25 12:00:00">
                                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                            </time>
                        </div>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">
                            Contenidp Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus impedit quod autem, nesciunt amet molestias soluta fuga exercitationem quis sed sint? Quod quo nam architecto, dicta ipsam fuga eos dolorum!
                        </div>
                        <a href="https://www.lalloronaencuemanco.com/">https://www.lalloronaencuemanco.com/</a>

                        <ul className="postcard__tagbox">
                            <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
                            <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                            <li className="tag__item play blue">
                                <a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className="postcard light blue">
                    <a className="postcard__img_link" href="#">
                        <img className="postcard__img" src={gamma} alt="Image Title" />	
                    </a>
                    <div className="postcard__text t-dark">
                        <h1 className="postcard__title red"><a href="#">Gamma</a></h1>
                        <div className="postcard__subtitle small">
                            <time dateTime="2020-05-25 12:00:00">
                                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                            </time>
                        </div>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus soluta eum, aspernatur minima corporis a doloremque voluptatem adipisci illum pariatur exercitationem dolorem, voluptatibus voluptates odio, eos sequi beatae ut enim?
                            </div>
                        <ul className="postcard__tagbox">
                            <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
                            <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                            <li className="tag__item play red">
                                <a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    </div>
    )
}