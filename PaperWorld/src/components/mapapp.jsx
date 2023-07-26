import { useEffect, useState } from 'react';
import './mapapp.css';

import RegisterService from '../services/register';

const MapApp = ({ setSelection }) => {
  const [spot, setSpot] = useState('');
  const [spotsData, setSpotsData] = useState([]);
  const [clickedButton, setClickedButton] = useState(null);

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
    const selectedSpot = e.target.id;
    setSpot(selectedSpot);
    setClickedButton(selectedSpot);
    console.log(selectedSpot)
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

  const isButtonClicked = (buttonId) => buttonId === clickedButton;

  return (

      <div className="seat-selection">
        <div className="G1">
          <button onClick={handleClick} className={`seat-button large ${isButtonClicked('1') ? 'clicked' : ''}`} id="1">
            {getSpotExhibitorName('a1') || 'A1'}
          </button>
          <button onClick={handleClick} className={`seat-button small ${isButtonClicked('3') ? 'clicked' : ''}`}id="3">
            {getSpotExhibitorName('a2') || 'A2'}
          </button>
          <button onClick={handleClick} className={`seat-button small ${isButtonClicked('4') ? 'clicked' : ''}`}id="4">
            {getSpotExhibitorName('a3') || 'A3'}
          </button>
          <button onClick={handleClick} className={`seat-button small ${isButtonClicked('5') ? 'clicked' : ''}`}id="5">
            {getSpotExhibitorName('a4') || 'A4'}
          </button>
          <button onClick={handleClick} className={`seat-button small ${isButtonClicked('6') ? 'clicked' : ''}`}id="6">
            {getSpotExhibitorName('a5') || 'A5'}
          </button>
          <button onClick={handleClick} className={`seat-button large ${isButtonClicked('7') ? 'clicked' : ''}`}id="7">
            {getSpotExhibitorName('a6') || 'A6'}
          </button>
          <button onClick={handleClick} className={`seat-button large ${isButtonClicked('8') ? 'clicked' : ''}`}id="8">
            {getSpotExhibitorName('a7') || 'A7'}
          </button>
        </div>

        <div className="G2 group-row">
          <div className="group">
            <button onClick={handleClick} className={`seat-button large ${isButtonClicked('12') ? 'clicked' : ''}`}id="12">
              {getSpotExhibitorName('b1') || 'B1'}
            </button>
            <button onClick={handleClick} className={`seat-button large ${isButtonClicked('10') ? 'clicked' : ''}`}id="10">
              {getSpotExhibitorName('c2') || 'C2'}
            </button>
          </div>
          <div className="group">
            <button onClick={handleClick} className={`seat-button vertical ${isButtonClicked('13') ? 'clicked' : ''}`}id="13">
              {getSpotExhibitorName('b2') || 'B2'}
            </button>
          </div>
        </div>

        <div className="G3 group-row">
          <div className="group">
            <button onClick={handleClick} className={`seat-button vertical ${isButtonClicked('14') ? 'clicked' : ''}`}id="14">
              {getSpotExhibitorName('b3') || 'B3'}
            </button>
          </div>
          <div className="group">
            <button onClick={handleClick} className={`seat-button small ${isButtonClicked('15') ? 'clicked' : ''}`}id="15">
              {getSpotExhibitorName('b4') || 'B4'}
            </button>
          </div>
          <div className="group">
            <button onClick={handleClick} className={`seat-button large ${isButtonClicked('16') ? 'clicked' : ''}`}id="16">
              {getSpotExhibitorName('b5') || 'B5'}
            </button>
            <button onClick={handleClick} className={`seat-button large ${isButtonClicked('11') ? 'clicked' : ''}`}id="11">
              {getSpotExhibitorName('c3') || 'C3'}
            </button>
          </div>
        </div>

        <div className="G4 group-row">
          <div className="group">
            <button onClick={handleClick} className={`seat-button vertical ${isButtonClicked('9') ? 'clicked' : ''}`} id="9">
              {getSpotExhibitorName('c1') || 'C1'}
            </button>
            <button onClick={handleClick} className={`seat-button vertical ${isButtonClicked('17') ? 'clicked' : ''}`} id="17">
              {getSpotExhibitorName('d1') || 'D1'}
            </button>
          </div>
        </div>

        <div className="G5 group-row">
          <div className="group">
            <button onClick={handleClick} className={`seat-button large ${isButtonClicked('18') ? 'clicked' : ''}`} id="18">
              {getSpotExhibitorName('d2') || 'D2'}
            </button>
            <button onClick={handleClick} className={`seat-button large ${isButtonClicked('28') ? 'clicked' : ''}`} id="28">
              {getSpotExhibitorName('e1') || 'E1'}
            </button>
          </div>
          <div className="group">
            <button onClick={handleClick} className={`seat-button vertical ${isButtonClicked('19') ? 'clicked' : ''}`} id="19">
              {getSpotExhibitorName('d3') || 'D3'}
            </button>
          </div>
        </div>

        <span className="empty-space"></span>

        <div className="G6 group-row">
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button vertical ${isButtonClicked('20') ? 'clicked' : ''}`} 
              id="20"
              disabled={getSpotExhibitorName('d4') !== null}
              >
              {getSpotExhibitorName('d4') || 'D4'}
            </button>
          </div>
          <div className="group">
            <button onClick={handleClick} className={`seat-button small ${isButtonClicked('21') ? 'clicked' : ''}`} id="21">
              {getSpotExhibitorName('d5') || 'D5'}
            </button>
            <button onClick={handleClick} className={`seat-button small ${isButtonClicked('29') ? 'clicked' : ''}`} id="29">
              {getSpotExhibitorName('e2') || 'E2'}
            </button>
          </div>
          <div className="group">
            <button onClick={handleClick} className={`seat-button small ${isButtonClicked('22') ? 'clicked' : ''}`} id="22">
              {getSpotExhibitorName('d6') || 'D6'}
            </button>
            <button onClick={handleClick} className={`seat-button small ${isButtonClicked('30') ? 'clicked' : ''}`} id="30">
              {getSpotExhibitorName('e3') || 'E3'}
            </button>
          </div>
          <div className="group">
            <button onClick={handleClick} className={`seat-button vertical ${isButtonClicked('23') ? 'clicked' : ''}`} id="23">
              {getSpotExhibitorName('d7') || 'D7'}
            </button>
          </div>
        </div>

        <span className="empty-space"></span>

        <div className="G7">
          <button onClick={handleClick} className={`seat-button large ${isButtonClicked('24') ? 'clicked' : ''}`} id="24">
            {getSpotExhibitorName('f1') || 'F1'}
          </button>
          <button onClick={handleClick} className={`seat-button small ${isButtonClicked('25') ? 'clicked' : ''}`} id="25">
            {getSpotExhibitorName('f2') || 'F2'}
          </button>
          <button onClick={handleClick} className={`seat-button large ${isButtonClicked('26') ? 'clicked' : ''}`} id="26">
            {getSpotExhibitorName('f3') || 'F3'}
          </button>
          <button onClick={handleClick} className={`seat-button large ${isButtonClicked('27') ? 'clicked' : ''}`} id="27">
            {getSpotExhibitorName('f4') || 'F4'}
          </button>
        </div>
      </div>
 
  );
};

export default MapApp;
 