'use client';

import Head from 'next/head';
import data from "../data.json";
import StarsRating from "../components/starsRating";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WifiIcon from '@mui/icons-material/Wifi';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Image from "next/image";
import hilton from "../../public/assets/hoteles/hilton.jpeg";
import AC from "../../public/assets/hoteles/AC.jpg";
import gamma from "../../public/assets/hoteles/gamma.jpg";
import cityExpress from "../../public/assets/hoteles/cityexpress.jpg";
import doubleTree from "../../public/assets/hoteles/doubleTree.jpeg";
import './hotels.css';
import { useLanguage } from '../../contexts/languageContext';

const images = {
    "hilton": hilton,
    "doubleTree": doubleTree,
    "gamma": gamma,
    "cityExpress": cityExpress,
    "ac": AC,
}

const Hotels = () => {
    const { language } = useLanguage();

    const { hotels } = data[language];
    const arrayHotels = hotels.hotels;

    return (
        <>
            <Head>
                <title>{hotels.title} - Hotels Page</title>
                <meta name="description" content="Discover the best hotels with great amenities and convenient locations. Find your perfect stay with our comprehensive hotel listings." />
                <meta name="keywords" content="hotels, amenities, accommodations, travel, stay, reservations" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="wrapperHotels">
                <div className="wrapper">
                    <section className="conteinerHotel">
                        <div className="container py-2 flex justify-center flex-col ">
                            <h1 className="text-center text-dark" id="pageHeaderTitle">{hotels.title}</h1>
                            <p className="subtituloWrapperHotels">{hotels.subtitle}</p>

                            {Object.keys(arrayHotels).map((key) => (
                                <Hotel key={key} hotel={arrayHotels[key]} imageName={key} />
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
        </>
    );
}

const Hotel = ({ hotel, imageName }) => {
    const image = images[imageName];

    return (
        <article className="postcard light blue">
            <a className="postcard__img_link" href="#">
                <Image className="postcard__img" src={image} alt={hotel.title} />
            </a>
            <div className="postcard__text t-dark">
                <h2 className="postcard__title blue"><a href="#">{hotel.title}</a></h2>
                <StarsRating rating={4} />
                <div className="postcard__bar"></div>
                <div className="hotelPostcard__preview-txt">
                    <p className="description">{hotel.description}</p>
                    <p className="distance"><AccessTimeIcon fontSize="medium" style={{ verticalAlign: 'middle', color: '#223B82' }} />  {hotel.distance}</p>
                    <div className="prices">
                        <p>{hotel.single}</p>
                        <p>{hotel.double}</p>
                    </div>
                    <p className="amenities"><RestaurantIcon fontSize="medium" style={{ verticalAlign: 'middle', color: '#223B82' }} />  {hotel.amenities}</p>
                    <p className="parking"><DirectionsCarIcon fontSize="medium" style={{ verticalAlign: 'middle', color: '#223B82' }} />  {hotel.parking}</p>
                </div>
            </div>
        </article>
    )
}

export default Hotels;
