

import "./attractions.css";
import data from "../data.json";

import xochimilco from "../assets/mexico/xochimilco-min.jpg";
import zocalo from "../assets/mexico/zocalo-min.jpg";

const Attractions = ({ language }) => {
    let { mexico } = data[language];
    return (
    <div className="wrapper">
        <section className="light">
            <div className="container py-2">
                <div className="h1 text-center text-dark" id="pageHeaderTitle">{mexico.titleAttraction}</div>

                <article className="postcard light blue">
                    <a className="postcard__img_link" href="#">
                        <img className="postcard__img" src={xochimilco} alt="Image Title" />
                    </a>
                    <div className="postcard__text t-dark">
                        <h1 className="postcard__title blue"><a href="#">{mexico.titleAttraction1}</a></h1>
                        {/* <div className="postcard__subtitle small">
                            <time datetime="2020-05-25 12:00:00">
                                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                            </time>
                        </div> */}
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">
                            {mexico.contentAttraction1}
                        </div>
                        <a href="https://www.lalloronaencuemanco.com/">https://www.lalloronaencuemanco.com/</a>

                        {/* <ul className="postcard__tagbox">
                            <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
                            <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                            <li className="tag__item play blue">
                                <a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
                            </li>
                        </ul> */}
                    </div>
                </article>
                <article className="postcard light blue">
                    <a className="postcard__img_link" href="#">
                        <img className="postcard__img" src={zocalo} alt="Image Title" />	
                    </a>
                    <div className="postcard__text t-dark">
                        <h1 className="postcard__title red"><a href="#">{mexico.titleAttraction2}</a></h1>
                        {/* <div className="postcard__subtitle small">
                            <time datetime="2020-05-25 12:00:00">
                                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                            </time>
                        </div> */}
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">
                            {mexico.contentAttraction2}
                            </div>
                        {/* <ul className="postcard__tagbox">
                            <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
                            <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                            <li className="tag__item play red">
                                <a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
                            </li>
                        </ul> */}
                    </div>
                </article>
            </div>
        </section>
    </div>
    )
}

export default Attractions; 