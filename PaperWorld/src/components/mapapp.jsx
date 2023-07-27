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
  /*   console.log(selectedSpot) */
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
          <button 
            onClick={handleClick} 
            className={`seat-button large ${isButtonClicked('1') ? 'clicked' : ''}  ${getSpotExhibitorName('a1') !== null ? 'disabled' : ''}`} 
            id="1"
            disabled={getSpotExhibitorName('a1') !== null}
            >
              {getSpotExhibitorName('a1') || 'A1'}
          </button>
          <button 
            onClick={handleClick} 
            className={`seat-button small ${isButtonClicked('3') ? 'clicked' : ''}  ${getSpotExhibitorName('a2') !== null ? 'disabled' : ''}`}
            id="3"
            disabled={getSpotExhibitorName('a2') !== null}
            >
              {getSpotExhibitorName('a2') || 'A2'}
          </button>
          <button 
            onClick={handleClick} 
            className={`seat-button small ${isButtonClicked('4') ? 'clicked' : ''}  ${getSpotExhibitorName('a3') !== null ? 'disabled' : ''}`}
            id="4"
            disabled={getSpotExhibitorName('a3') !== null}
            >
              {getSpotExhibitorName('a3') || 'A3'}
          </button>
          <button 
            onClick={handleClick} 
            className={`seat-button small ${isButtonClicked('5') ? 'clicked' : ''}  ${getSpotExhibitorName('a4') !== null ? 'disabled' : ''}`}
            id="5"
            disabled={getSpotExhibitorName('a4') !== null}
            >
              {getSpotExhibitorName('a4') || 'A4'}
          </button>
          <button 
            onClick={handleClick} 
            className={`seat-button small ${isButtonClicked('6') ? 'clicked' : ''}  ${getSpotExhibitorName('a5') !== null ? 'disabled' : ''}`}
            id="6"
            disabled={getSpotExhibitorName('a5') !== null}
            >
              {getSpotExhibitorName('a5') || 'A5'}
          </button>
          <button 
            onClick={handleClick} 
            className={`seat-button large ${isButtonClicked('7') ? 'clicked' : ''}  ${getSpotExhibitorName('a6') !== null ? 'disabled' : ''}`}
            id="7"
            disabled={getSpotExhibitorName('a6') !== null}
            >
              {getSpotExhibitorName('a6') || 'A6'}
          </button>
          <button 
            onClick={handleClick} 
            className={`seat-button large ${isButtonClicked('8') ? 'clicked' : ''}  ${getSpotExhibitorName('a7') !== null ? 'disabled' : ''}`}
            id="8"
            disabled={getSpotExhibitorName('a7') !== null}
            >
            {getSpotExhibitorName('a7') || 'A7'}
          </button>
        </div>

        <div className="G2 group-row">
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button large ${isButtonClicked('12') ? 'clicked' : ''}  ${getSpotExhibitorName('b1') !== null ? 'disabled' : ''}`}
              id="12"
              disabled={getSpotExhibitorName('b1') !== null}
            >
              {getSpotExhibitorName('b1') || 'B1'}
            </button>
            <button 
              onClick={handleClick} 
              className={`seat-button large ${isButtonClicked('10') ? 'clicked' : ''}  ${getSpotExhibitorName('c2') !== null ? 'disabled' : ''}`}
              id="10" 
              disabled={getSpotExhibitorName('c2') !== null}
              >
                {getSpotExhibitorName('c2') || 'C2'}
            </button>
          </div>
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button vertical ${isButtonClicked('13') ? 'clicked' : ''}  ${getSpotExhibitorName('b2') !== null ? 'disabled' : ''}`}
              id="13"
              disabled={getSpotExhibitorName('b2') !== null}
              >
              {getSpotExhibitorName('b2') || 'B2'}
            </button>
          </div>
        </div>

        <div className="G3 group-row">
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button vertical ${isButtonClicked('14') ? 'clicked' : ''}  ${getSpotExhibitorName('b3') !== null ? 'disabled' : ''}`}
              id="14"
              disabled={getSpotExhibitorName('b3') !== null}
              >
                {getSpotExhibitorName('b3') || 'B3'}
            </button>
          </div>
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button small ${isButtonClicked('15') ? 'clicked' : ''}  ${getSpotExhibitorName('b4') !== null ? 'disabled' : ''}`}
              id="15"
              disabled={getSpotExhibitorName('b4') !== null}
              >
                {getSpotExhibitorName('b4') || 'B4'}
            </button>
          </div>
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button large ${isButtonClicked('16') ? 'clicked' : ''}  ${getSpotExhibitorName('b5') !== null ? 'disabled' : ''}`}
              id="16"
              disabled={getSpotExhibitorName('b5') !== null}
              >
                {getSpotExhibitorName('b5') || 'B5'}
            </button>
            <button 
              onClick={handleClick} 
              className={`seat-button large ${isButtonClicked('11') ? 'clicked' : ''}  ${getSpotExhibitorName('c3') !== null ? 'disabled' : ''}`}
              id="11"
              disabled={getSpotExhibitorName('c3') !== null}
              >
                {getSpotExhibitorName('c3') || 'C3'}
            </button>
          </div>
        </div>

        <div className="G4 group-row">
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button vertical ${isButtonClicked('9') ? 'clicked' : ''}  ${getSpotExhibitorName('c1') !== null ? 'disabled' : ''}`} 
              id="9"
              disabled={getSpotExhibitorName('c1') !== null}
              >
                {getSpotExhibitorName('c1') || 'C1'}
            </button>
            <button 
              onClick={handleClick} 
              className={`seat-button vertical ${isButtonClicked('17') ? 'clicked' : ''}  ${getSpotExhibitorName('d1') !== null ? 'disabled' : ''}`} 
              id="17"
              disabled={getSpotExhibitorName('d1') !== null}
            >
                {getSpotExhibitorName('d1') || 'D1'}
            </button>
          </div>
        </div>

        <div className="G5 group-row">
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button large ${isButtonClicked('18') ? 'clicked' : ''}  ${getSpotExhibitorName('d2') !== null ? 'disabled' : ''}`} 
              id="18"
              disabled={getSpotExhibitorName('d2') !== null}
            >
              {getSpotExhibitorName('d2') || 'D2'}
            </button>
            <button 
              onClick={handleClick} 
              className={`seat-button large ${isButtonClicked('28') ? 'clicked' : ''}  ${getSpotExhibitorName('e1') !== null ? 'disabled' : ''}`} 
              id="28"
              disabled={getSpotExhibitorName('e1') !== null}
            >
              {getSpotExhibitorName('e1') || 'E1'}
            </button>
          </div>
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button vertical ${isButtonClicked('19') ? 'clicked' : ''}  ${getSpotExhibitorName('d3') !== null ? 'disabled' : ''}`} 
              id="19"
              disabled={getSpotExhibitorName('d3') !== null}
            >
              {getSpotExhibitorName('d3') || 'D3'}
            </button>
          </div>
        </div>

        <span className="empty-space"></span>

        <div className="G6 group-row">
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button vertical ${isButtonClicked('20') ? 'clicked' : ''}  ${getSpotExhibitorName('d4') !== null ? 'disabled' : ''}`} 
              id="20"
              disabled={getSpotExhibitorName('d4') !== null}
              >
              {getSpotExhibitorName('d4') || 'D4'}
            </button>
          </div>
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button small ${isButtonClicked('21') ? 'clicked' : ''}  ${getSpotExhibitorName('d5') !== null ? 'disabled' : ''}`} 
              id="21"
              disabled={getSpotExhibitorName('d5') !== null}
              >
              {getSpotExhibitorName('d5') || 'D5'}
            </button>
            <button 
              onClick={handleClick} 
              className={`seat-button small ${isButtonClicked('29') ? 'clicked' : ''}  ${getSpotExhibitorName('e2') !== null ? 'disabled' : ''}`} 
              id="29"
              disabled={getSpotExhibitorName('e2') !== null}
            >
              {getSpotExhibitorName('e2') || 'E2'}
            </button>
          </div>
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button small ${isButtonClicked('22') ? 'clicked' : ''}  ${getSpotExhibitorName('d6') !== null ? 'disabled' : ''}`} 
              id="22"
              disabled={getSpotExhibitorName('d6') !== null}
            >
              {getSpotExhibitorName('d6') || 'D6'}
            </button>
            <button 
              onClick={handleClick} 
              className={`seat-button small ${isButtonClicked('30') ? 'clicked' : ''}  ${getSpotExhibitorName('e3') !== null ? 'disabled' : ''}`} 
              id="30"
              disabled={getSpotExhibitorName('e3') !== null}
            >
              {getSpotExhibitorName('e3') || 'E3'}
            </button>
          </div>
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button vertical ${isButtonClicked('23') ? 'clicked' : ''}  ${getSpotExhibitorName('d7') !== null ? 'disabled' : ''}`} 
              id="23"
              disabled={getSpotExhibitorName('d7') !== null}
            >
              {getSpotExhibitorName('d7') || 'D7'}
            </button>
          </div>
        </div>

        <span className="empty-space"></span>

        <div className="G7">
          <button 
            onClick={handleClick} 
            className={`seat-button large ${isButtonClicked('24') ? 'clicked' : ''}  ${getSpotExhibitorName('f1') !== null ? 'disabled' : ''}`} 
            id="24"
            disabled={getSpotExhibitorName('f1') !== null}
            >
            {getSpotExhibitorName('f1') || 'F1'}
          </button>
          <button 
            onClick={handleClick} 
            className={`seat-button small ${isButtonClicked('25') ? 'clicked' : ''}  ${getSpotExhibitorName('f2') !== null ? 'disabled' : ''}`} 
            id="25"
            disabled={getSpotExhibitorName('f2') !== null}
            >
            {getSpotExhibitorName('f2') || 'F2'}
          </button>
          <button 
            onClick={handleClick} 
            className={`seat-button large ${isButtonClicked('26') ? 'clicked' : ''}  ${getSpotExhibitorName('f3') !== null ? 'disabled' : ''}`} 
            id="26"
            disabled={getSpotExhibitorName('f3') !== null}
            >
            {getSpotExhibitorName('f3') || 'F3'}
          </button>
          <button 
            onClick={handleClick} 
            className={`seat-button large ${isButtonClicked('27') ? 'clicked' : ''} ${getSpotExhibitorName('f4') !== null ? 'disabled' : ''}`} 
            id="27"
            disabled={getSpotExhibitorName('f4') !== null}
            >
            {getSpotExhibitorName('f4') || 'F4'}
          </button>
        </div>
      </div>
 
  );
};

export default MapApp;
 