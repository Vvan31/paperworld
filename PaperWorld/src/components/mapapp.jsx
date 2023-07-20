import { useEffect, useState } from 'react';
import './mapapp.css';

import RegisterService from '../services/register';

const MapApp = ({ setSelection }) => {
  const [spot, setSpot] = useState('');
  const [spotsData, setSpotsData] = useState([]);

  useEffect(() => {
    const getSpots = async () => {
      try {
        const response = await RegisterService.getSpots();
        setSpotsData(response.data.data);
        //console.log(response.data.data);
      } catch (error) {
        console.error('Error occurred during registration:', error.response);
      }
    };
    getSpots();
  }, []);

  useEffect(() => {
    setSelection(spot);
  }, [spot, setSelection]);

  const handleClick = (e) => {
    e.preventDefault();
    const selectedSpot = e.target.innerText;
    setSpot(selectedSpot);
  };

  const getSpotExhibitorName = (slug) => {
    const spotData = spotsData.find((spot) => spot.attributes.slug === slug);
    if (!spotData){
        return null;
    } else if (spotData.attributes.exhibitor.data == null) {return null}
    else{
        console.log(spotData.attributes.exhibitor.data.attributes.company);
        return spotData.attributes.exhibitor.data.attributes.company;
    }
  };


  return (
    <div className="seat-selection">
      <div className="G1">
        <button onClick={handleClick} className="seat-button large" id="a1">
          {getSpotExhibitorName('a1') || 'A1'}
        </button>
        <button onClick={handleClick} className="seat-button small" id="a2">
          {getSpotExhibitorName('a2') || 'A2'}
        </button>
        <button onClick={handleClick} className="seat-button small" id='a3'>
        {getSpotExhibitorName('a3') || 'A3'}
        </button>
        <button onClick={handleClick} className="seat-button small" id='a4'>
        {getSpotExhibitorName('a4') || 'A4'}

        </button>
        <button onClick={handleClick} className="seat-button small" id='a5'>
        {getSpotExhibitorName('a5') || 'A5'}
        </button>
        <button onClick={handleClick} className="seat-button large" id='a6'>
          {getSpotExhibitorName('a6') || 'A6'}

        </button>
        <button onClick={handleClick} className="seat-button large" id='a7'>
          {getSpotExhibitorName('a7') || 'A7'}
        </button>
    </div>
   
        <div className="G2 group-row">
            <div className="group">
                <button onClick={handleClick} className="seat-button large" id='b1'>
          {getSpotExhibitorName('b1') || 'B1'}
                </button>
                <button onClick={handleClick} className="seat-button large" id='c2'>
          {getSpotExhibitorName('c2') || 'C2'}
                </button>
            </div>
            <div className="group">
                <button onClick={handleClick} className="seat-button vertical" id='b2'>
          {getSpotExhibitorName('b2') || 'B2'}

                </button>
            </div>
        </div>
        <div className="G3 group-row">
            <div className="group">
                <button onClick={handleClick} className="seat-button vertical" id='b3'>
          {getSpotExhibitorName('b3') || 'B3'}

                </button>
            </div>
            <div className="group">
                <button onClick={handleClick} className="seat-button small" id='b4'>
            {getSpotExhibitorName('b4') || 'B4'}
                </button>
            </div>
            <div className="group">
            <button onClick={handleClick} className="seat-button large" id='b5'>
            {getSpotExhibitorName('b5') || 'B5'}
            </button>
            <button onClick={handleClick} className="seat-button large" id='c3'>
            {getSpotExhibitorName('c3') || 'C3'}
            </button>
            </div>
        </div>

        <div className="G4 group-row">
            <div className="group">
            <button onClick={handleClick} className="seat-button vertical" id='c1'>
            {getSpotExhibitorName('c1') || 'C1'}
            </button>
            <button onClick={handleClick} className="seat-button vertical" id='d1'>
            {getSpotExhibitorName('d1') || 'D1'}
            </button>
            </div>
        </div>
        <div className="G5 group-row">
            <div className="group">
                <button onClick={handleClick} className="seat-button large" id='d2'>
                {getSpotExhibitorName('d2') || 'D2'}
                </button>
                <button onClick={handleClick} className="seat-button large" id='e1'>
                {getSpotExhibitorName('e1') || 'E1'}
                </button>
            </div>
            <div className="group">
                <button onClick={handleClick} className="seat-button vertical" id='d3'>
                {getSpotExhibitorName('d3') || 'D3'}
                </button>
            </div>
        </div>
        <span className="empty-space"></span>


        <div className="G6 group-row">
            <div className="group">
                <button onClick={handleClick} className="seat-button vertical" id='d4'>
                {getSpotExhibitorName('d4') || 'D4'}
                </button>
            </div>
            <div className="group">
                <button onClick={handleClick} className="seat-button small" id='d5'>
                {getSpotExhibitorName('d5') || 'D5'}
                </button>
                <button onClick={handleClick} className="seat-button small" id='e2'>
                {getSpotExhibitorName('e2') || 'E2'}
                </button>
            </div>
            <div className="group">
                <button onClick={handleClick} className="seat-button small" id='d6'>
                {getSpotExhibitorName('d6') || 'D6'}
                </button>
                <button onClick={handleClick} className="seat-button small" id='e3'>
                {getSpotExhibitorName('e3') || 'E3'}
                </button>
            </div>
            <div className="group">
                <button onClick={handleClick} className="seat-button vertical" id='d7'>
                {getSpotExhibitorName('d7') || 'D7'}
                </button>
            </div>
        </div>
        <span className="empty-space"></span>

        <div className="G7">
            <button onClick={handleClick} className="seat-button large" id='f1'>
            {getSpotExhibitorName('f1') || 'F1'}
            </button>
            <button onClick={handleClick} className="seat-button small" id='f2'>
            {getSpotExhibitorName('f2') || 'F2'}
            </button>
            <button onClick={handleClick} className="seat-button large" id='f3'>
            {getSpotExhibitorName('f3') || 'F3'}
            </button>
            <button onClick={handleClick} className="seat-button large" id='f4'>
            {getSpotExhibitorName('f4') || 'F4'}
            </button>
        </div>
    </div>
  );
};

export default MapApp;
