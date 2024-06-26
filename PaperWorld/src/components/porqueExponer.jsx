import IndustryAreas from '../components/industryAreas.jsx';
import ContactFrom from '../components/contactForm.jsx';
import "./porqueExponer.css"
import papel from "../assets/close-up-of-paper.jpg"
import group from "../assets/group.jpg"
import data from "../data.json"
// eslint-disable-next-line react/prop-types
const PorqueExponer = ({ language }) => {
    let { whyExhibitor } = data[language];
    return(
        <div className='mainExpositor'>
             <div className="parallax" style={{ backgroundImage: `url(${papel})` }}>
        <div className="titulo-parallax">
          <h1>{whyExhibitor.title}</h1>
        </div>
      </div>
            <div className="contentExpositor">
                <p className='fistText'>
                    {whyExhibitor.p1}
                </p>
                <img className='image' src={group}></img>

                <div className='contenidoExponer'>
                    <h3>{whyExhibitor.titleContacts}</h3>
                    <p>{whyExhibitor.contactsContent}</p>
                    <h3>{whyExhibitor.titleProducts}</h3>
                    <p>{whyExhibitor.productsContent}</p>
                    <h3>{whyExhibitor.titleTechnology}</h3>
                    <p>{whyExhibitor.technologyContent}</p>
                    <h3>{whyExhibitor.titleConferences}</h3>
                    <p>{whyExhibitor.conferencesContent}</p>
                    <h3>{whyExhibitor.titleVisibility}</h3>
                    <p>{whyExhibitor.visibilityContent}</p>
                </div>
                <p>{whyExhibitor.conclution}</p>
            </div>
            <div className='industry'>
                <IndustryAreas language={language} />
            </div>
            <ContactFrom language={language} />
        </div>
    );
}

export default PorqueExponer;