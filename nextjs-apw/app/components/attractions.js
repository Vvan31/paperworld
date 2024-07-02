

import "../../styles/attractions.css";
import data from "../data.json";
import xochimilco from "../../public/assets/mexico/xochimilco-min.jpg";
import zocalo from "../../public/assets/mexico/zocalo-min.jpg";
import { useLanguage } from '../../contexts/languageContext';
import Image from "next/image";
const Attractions = () => {
    const { language, handleLangsuageChange } = useLanguage();
    let { mexico } = data[language];
    return (
    <div className="wrapper">
        <section className="light">
            <div className="container py-2">
                <div className="h1 text-center text-dark" id="pageHeaderTitle">{mexico.titleAttraction}</div>

                <article className="postcard light blue">
                    <a className="postcard__img_link" href="#">
                        <Image className="postcard__img" src={xochimilco} alt="xochimilco"/>
                    </a>
                    <div className="postcard__text t-dark">
                        <h1 className="postcard__title blue"><a href="#">{mexico.titleAttraction1}</a></h1>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">
                            {mexico.contentAttraction1}
                        </div>
                        <a href="https://www.lalloronaencuemanco.com/">https://www.lalloronaencuemanco.com/</a>
                    </div>
                </article>
                <article className="postcard light blue">
                    <a className="postcard__img_link" href="#">
                        <Image className="postcard__img" src={zocalo} alt="zocalo" />	
                    </a>
                    <div className="postcard__text t-dark">
                        <h1 className="postcard__title red"><a href="#">{mexico.titleAttraction2}</a></h1>
                      
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">
                            {mexico.contentAttraction2}
                            </div>
                
                    </div>
                </article>
            </div>
        </section>
    </div>
    )
}

export default Attractions; 