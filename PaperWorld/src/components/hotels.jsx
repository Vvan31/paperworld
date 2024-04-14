import data from "../data.json";

import StarsRating from "./starsRating";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WifiIcon from '@mui/icons-material/Wifi';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import hilton from "../assets/hoteles/hilton.jpeg";
import AC from "../assets/hoteles/AC.jpg";
import gamma from "../assets/hoteles/gamma.jpg";
import cityExpress from "../assets/hoteles/cityexpress.jpg";
import doubleTree from "../assets/hoteles/doubleTree.jpeg";
import './hotels.css'


const images = {
    "hilton": hilton,
    "doubleTree": doubleTree,
    "gamma": gamma,
    "cityExpress": cityExpress,
    "ac": AC,
}

const Hotels = ({ language }) => {
    const { hotels } = data[language]; 
    const arrayHotels = hotels.hotels
    return (
        <div className="wrapperHotels">
        <div className="wrapper">
            <section className="conteinerHotel">
                <div className="container py-2 flex justify-center column">
                    <div className="h1 text-center text-dark" id="pageHeaderTitle">{hotels.title}</div>
                    <p className="subtituloWrapperHotels">{hotels.subtitle}</p>

                    {Object.keys(arrayHotels).map((key) => (
                        <Hotel key={key} hotel={arrayHotels[key]} imageName={key}/>
                    ))}
                </div>
                <div className="reservations">
                    <div className="reservationsContent">
                        <div className="reservationsContact">
                            <h2 className="reservationsTitle">{hotels.reserve.title}</h2>

                            <p className="name">{hotels.reserve.name}</p>
                            <p className="name">{hotels.reserve.email}</p>
                            <p className="name">{hotels.reserve.phone}</p>
                        </div>
                        <div className="termsConditions">
                            <h2>{hotels.reserve.termsConditions.title}</h2>
                            <p>{hotels.reserve.termsConditions.t1}</p>
                            <p>{hotels.reserve.termsConditions.t2}</p>
                            <p>{hotels.reserve.termsConditions.t3}</p>
                            <p>{hotels.reserve.termsConditions.t4}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
}

const Hotel = ({ hotel, imageName}) => {
    const image = images[imageName];

    return (
        <article className="postcard light blue">
            <a className="postcard__img_link" href="#">
                <img className="postcard__img" src={image} alt={hotel.title} />
            </a>
            <div className="postcard__text t-dark">
                <h1 className="postcard__title blue"><a href="#">{hotel.title}</a></h1>
                {/* <div className="postcard__subtitle small"> */}
                {/* </div> */}
                <StarsRating rating={4}/>
                <div className="postcard__bar"></div>
                <div className="hotelPostcard__preview-txt">
                <p className="description">{hotel.description}</p>

                <p className="distance"><AccessTimeIcon fontSize="medium" style={{ verticalAlign: 'middle' , color:'#223B82' }} />  {hotel.distance}</p>
                <div className="prices">
                    <p>{hotel.single}</p>
                    <p>{hotel.double}</p>
                </div>
                {/* <div className="barra"></div> */}

                    <p className="amenities"><RestaurantIcon fontSize="medium" style={{ verticalAlign: 'middle' , color:'#223B82'  }} />  {hotel.amenities}</p>
                    <p className="parking"><DirectionsCarIcon fontSize="medium" style={{ verticalAlign: 'middle' , color:'#223B82'  }} />  {hotel.parking}</p>
                </div>
                {/* <a href="#">{hotel.title}</a> */}
            </div>
        </article>
    )
}

export default Hotels;
