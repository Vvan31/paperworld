import { useEffect, useState } from 'react';
import './mapapp.css';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
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
    const isButtonDisabled = e.currentTarget.className.includes('disabled')
    if (isButtonDisabled) {
      setAnchorEl(e.currentTarget);
      setanchorElTitle(e.currentTarget.title)
      setButtonCoordinates({ x: e.currentTarget.offsetLeft, y: e.currentTarget.offsetTop });
      console.log(buttonCoordinates)
    } else {
      const selectedSpot = e.currentTarget.id;
      setSpot(selectedSpot);
      setClickedButton(selectedSpot);
    }
  };

  const getSpotExhibitorName = (slug) => {
    const spotData = spotsData.find((spot) => spot.attributes.slug === slug);
    if (!spotData || !spotData.attributes.exhibitor.data) {
      return null;
    } else {
      const companyName = spotData.attributes.exhibitor.data.attributes.company;
      if (companyName.length <= 8 || companyName.indexOf(' ') === -1) {
        return [companyName.substring(0, 8), companyName];
      } else {
        const words = companyName.split(' ');
        return [words.map((word) => word.charAt(0)).join(''), companyName];
      }
    }
  };

  //popover 
    const isButtonClicked = (buttonId) => buttonId === clickedButton;
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElTitle, setanchorElTitle] = useState(null);
    const [buttonCoordinates, setButtonCoordinates] = useState({ x: 0, y: 0 });
    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  return (

      <div className="seat-selection">
         <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>{anchorElTitle}</Typography>
        </Popover>
        <div className="G1">
          <button 
            onClick={handleClick} 
            className={`seat-button large ${isButtonClicked('1') ? 'clicked' : ''}  ${getSpotExhibitorName('a1') !== null ? 'disabled' : ''}`} 
            id="1"
            title={getSpotExhibitorName('a1') ? getSpotExhibitorName('a1')[1] : 'A1'}
            >
              {getSpotExhibitorName('a1') ? getSpotExhibitorName('a1')[0] : 'A1'}
          </button>
          <button 
            onClick={handleClick} 
            className={`seat-button small ${isButtonClicked('3') ? 'clicked' : ''}  ${getSpotExhibitorName('a2') !== null ? 'disabled' : ''}`}
            id="3"
            title={getSpotExhibitorName('a2') ? getSpotExhibitorName('a2')[1] : 'A2'}
            >
              {getSpotExhibitorName('a2') ? getSpotExhibitorName('a2')[0] : 'A2'}
          </button>
          <button 
            onClick={handleClick} 
            className={`seat-button small ${isButtonClicked('4') ? 'clicked' : ''}  ${getSpotExhibitorName('a3') !== null ? 'disabled' : ''}`}
            id="4"
            title={getSpotExhibitorName('a3') ? getSpotExhibitorName('a3')[1] : 'A3'}
            >
              {getSpotExhibitorName('a3') ? getSpotExhibitorName('a3')[0] : 'A3'}
          </button>
          <button 
            onClick={handleClick} 
            className={`seat-button small ${isButtonClicked('5') ? 'clicked' : ''}  ${getSpotExhibitorName('a4') !== null ? 'disabled' : ''}`}
            id="5"
            title={getSpotExhibitorName('a4') ? getSpotExhibitorName('a4')[1] : 'A4'}
            >
             {getSpotExhibitorName('a4') ? getSpotExhibitorName('a4')[0] : 'A4'}
          </button>
          <button 
            onClick={handleClick} 
            className={`seat-button small ${isButtonClicked('6') ? 'clicked' : ''}  ${getSpotExhibitorName('a5') !== null ? 'disabled' : ''}`}
            id="6"
            title={getSpotExhibitorName('a5') ? getSpotExhibitorName('a5')[1] : 'A5'}
            >
              {getSpotExhibitorName('a5') ? getSpotExhibitorName('a5')[0] : 'A5'}
          </button>
          <button 
            onClick={handleClick} 
            className={`seat-button large ${isButtonClicked('7') ? 'clicked' : ''}  ${getSpotExhibitorName('a6') !== null ? 'disabled' : ''}`}
            id="7"
            title={getSpotExhibitorName('a6') ? getSpotExhibitorName('a6')[1] : 'A6'}
            >
              {getSpotExhibitorName('a6') ? getSpotExhibitorName('a6')[0] : 'A6'}
          </button>
          <button 
            onClick={handleClick} 
            className={`seat-button large ${isButtonClicked('8') ? 'clicked' : ''}  ${getSpotExhibitorName('a7') !== null ? 'disabled' : ''}`}
            id="8"
            title={getSpotExhibitorName('a7') ? getSpotExhibitorName('a7')[1] : 'A7'}
            >
             {getSpotExhibitorName('a7') ? getSpotExhibitorName('a7')[0] : 'A7'}
          </button>
        </div>

        <div className="G2 group-row">
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button large ${isButtonClicked('12') ? 'clicked' : ''}  ${getSpotExhibitorName('b1') !== null ? 'disabled' : ''}`}
              id="12"
              title={getSpotExhibitorName('b1') ? getSpotExhibitorName('b1')[1] : 'B1'}
            >
              {getSpotExhibitorName('b1') ? getSpotExhibitorName('b1')[0] : 'B1'}
            </button>
            <button 
              onClick={handleClick} 
              className={`seat-button large ${isButtonClicked('10') ? 'clicked' : ''}  ${getSpotExhibitorName('c2') !== null ? 'disabled' : ''}`}
              id="10" 
              title={getSpotExhibitorName('c2') ? getSpotExhibitorName('c2')[1] : 'C2'}
              >
              {getSpotExhibitorName('c2') ? getSpotExhibitorName('c2')[0] : 'C2'}
            </button>
          </div>
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button vertical ${isButtonClicked('13') ? 'clicked' : ''}  ${getSpotExhibitorName('b2') !== null ? 'disabled' : ''}`}
              id="13"
              title={getSpotExhibitorName('b2') ? getSpotExhibitorName('b2')[1] : 'B2'}
              >
              {getSpotExhibitorName('b2') ? getSpotExhibitorName('b2')[0] : 'B2'}
            </button>
          </div>
        </div>

        <div className="G3 group-row">
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button vertical ${isButtonClicked('14') ? 'clicked' : ''}  ${getSpotExhibitorName('b3') !== null ? 'disabled' : ''}`}
              id="14"
              title={getSpotExhibitorName('b3') ? getSpotExhibitorName('b3')[1] : 'B3'}
              >
                {getSpotExhibitorName('b3') ? getSpotExhibitorName('b3')[0] : 'B3'}
            </button>
          </div>
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button small ${isButtonClicked('15') ? 'clicked' : ''}  ${getSpotExhibitorName('b4') !== null ? 'disabled' : ''}`}
              id="15"
              title={getSpotExhibitorName('b4') ? getSpotExhibitorName('b4')[1] : 'B4'}
              >
               {getSpotExhibitorName('b4') ? getSpotExhibitorName('b4')[0] : 'B4'}
            </button>
          </div>
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button large ${isButtonClicked('16') ? 'clicked' : ''}  ${getSpotExhibitorName('b5') !== null ? 'disabled' : ''}`}
              id="16"
              title={getSpotExhibitorName('b5') ? getSpotExhibitorName('b5')[1] : 'B5'}
              >
                {getSpotExhibitorName('b5') ? getSpotExhibitorName('b5')[0] : 'B5'}
            </button>
            <button 
              onClick={handleClick} 
              className={`seat-button large ${isButtonClicked('11') ? 'clicked' : ''}  ${getSpotExhibitorName('c3') !== null ? 'disabled' : ''}`}
              id="11"
              title={getSpotExhibitorName('c3') ? getSpotExhibitorName('c3')[1] : 'C3'}
              >
                {getSpotExhibitorName('c3') ? getSpotExhibitorName('c3')[0] : 'C3'}
            </button>
          </div>
        </div>

        <div className="G4 group-row">
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button vertical ${isButtonClicked('9') ? 'clicked' : ''}  ${getSpotExhibitorName('c1') !== null ? 'disabled' : ''}`} 
              id="9"
              title={getSpotExhibitorName('c1') ? getSpotExhibitorName('c1')[1] : 'C1'}
              >
                {getSpotExhibitorName('c1') ? getSpotExhibitorName('c1')[0] : 'C1'}
            </button>
            <button 
              onClick={handleClick} 
              className={`seat-button vertical ${isButtonClicked('17') ? 'clicked' : ''}  ${getSpotExhibitorName('d1') !== null ? 'disabled' : ''}`} 
              id="17"
              title={getSpotExhibitorName('d1') ? getSpotExhibitorName('d1')[1] : 'D1'}
            
            >
               {getSpotExhibitorName('d1') ? getSpotExhibitorName('d1')[0] : 'D1'}
            </button>
          </div>
        </div>

        <div className="G5 group-row">
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button large ${isButtonClicked('18') ? 'clicked' : ''}  ${getSpotExhibitorName('d2') !== null ? 'disabled' : ''}`} 
              id="18"
              title={getSpotExhibitorName('d2') ? getSpotExhibitorName('d2')[1] : 'D2'}
            >
              {getSpotExhibitorName('d2') ? getSpotExhibitorName('d2')[0] : 'D2'}
            </button>
            <button 
              onClick={handleClick} 
              className={`seat-button large ${isButtonClicked('28') ? 'clicked' : ''}  ${getSpotExhibitorName('e1') !== null ? 'disabled' : ''}`} 
              id="28"
              title={getSpotExhibitorName('e1') ? getSpotExhibitorName('e1')[1] : 'E1'}
            >
              {getSpotExhibitorName('e1') ? getSpotExhibitorName('e1')[0] : 'E1'}
            </button>
          </div>
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button vertical ${isButtonClicked('19') ? 'clicked' : ''}  ${getSpotExhibitorName('d3') !== null ? 'disabled' : ''}`} 
              id="19"
              title={getSpotExhibitorName('d3') ? getSpotExhibitorName('d3')[1] : 'D3'}
            >
              {getSpotExhibitorName('d3') ? getSpotExhibitorName('d3')[0] : 'D3'}
            </button>
          </div>
        </div>

        <div className="G6 group-row">
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button vertical ${isButtonClicked('20') ? 'clicked' : ''}  ${getSpotExhibitorName('d4') !== null ? 'disabled' : ''}`} 
              id="20"
              title={getSpotExhibitorName('d4') ? getSpotExhibitorName('d4')[1] : 'D4'}
              >
              {getSpotExhibitorName('d4') ? getSpotExhibitorName('d4')[0] : 'D4'}
            </button>
          </div>
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button small ${isButtonClicked('21') ? 'clicked' : ''}  ${getSpotExhibitorName('d5') !== null ? 'disabled' : ''}`} 
              id="21"
              title={getSpotExhibitorName('d5') ? getSpotExhibitorName('d5')[1] : 'D5'}
              >
              {getSpotExhibitorName('d5') ? getSpotExhibitorName('d5')[0] : 'D5'}
            </button>
            <button 
              onClick={handleClick} 
              className={`seat-button small ${isButtonClicked('29') ? 'clicked' : ''}  ${getSpotExhibitorName('e2') !== null ? 'disabled' : ''}`} 
              id="29"
              title={getSpotExhibitorName('e2') ? getSpotExhibitorName('e2')[1] : 'E2'}
              
              >
                {getSpotExhibitorName('e2') ? getSpotExhibitorName('e2')[0] : 'E2'}
              </button>
          </div>
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button small ${isButtonClicked('22') ? 'clicked' : ''}  ${getSpotExhibitorName('d6') !== null ? 'disabled' : ''}`} 
              id="22"
              title={getSpotExhibitorName('d6') ? getSpotExhibitorName('d6')[1] : 'D6'}
              >
                {getSpotExhibitorName('d6') ? getSpotExhibitorName('d6')[0] : 'D6'}
              </button>
            <button 
              onClick={handleClick} 
              className={`seat-button small ${isButtonClicked('30') ? 'clicked' : ''}  ${getSpotExhibitorName('e3') !== null ? 'disabled' : ''}`} 
              id="30"
              title={getSpotExhibitorName('e3') ? getSpotExhibitorName('e3')[1] : 'E3'}
            >
              {getSpotExhibitorName('e3') ? getSpotExhibitorName('e3')[0] : 'E3'}
            </button>
          </div>
          <div className="group">
            <button 
              onClick={handleClick} 
              className={`seat-button vertical ${isButtonClicked('23') ? 'clicked' : ''}  ${getSpotExhibitorName('d7') !== null ? 'disabled' : ''}`} 
              id="23"
              title={getSpotExhibitorName('d7') ? getSpotExhibitorName('d7')[1] : 'D7'}
            >
              {getSpotExhibitorName('d7') ? getSpotExhibitorName('d7')[0] : 'D7'}
            </button>
          </div>
        </div>

        <span className="empty-space"></span>

        <div className="G7">
          <button 
            onClick={handleClick} 
            className={`seat-button large ${isButtonClicked('24') ? 'clicked' : ''}  ${getSpotExhibitorName('f1') !== null ? 'disabled' : ''}`} 
            id="24"
            title={getSpotExhibitorName('f1') ? getSpotExhibitorName('f1')[1] : 'F1'}
            >
           {getSpotExhibitorName('f1') ? getSpotExhibitorName('f1')[0] : 'F1'}
          </button>
          <button 
            onClick={handleClick} 
            className={`seat-button small ${isButtonClicked('25') ? 'clicked' : ''}  ${getSpotExhibitorName('f2') !== null ? 'disabled' : ''}`} 
            id="25"
            title={getSpotExhibitorName('f2') ? getSpotExhibitorName('f2')[1] : 'F2'}
            >
           {getSpotExhibitorName('f2') ? getSpotExhibitorName('f2')[0] : 'F2'}
          </button>
          <button 
            onClick={handleClick} 
            className={`seat-button large ${isButtonClicked('26') ? 'clicked' : ''}  ${getSpotExhibitorName('f3') !== null ? 'disabled' : ''}`} 
            id="26"
            title={getSpotExhibitorName('f3') ? getSpotExhibitorName('f3')[1] : 'F3'}
            >
            {getSpotExhibitorName('f3') ? getSpotExhibitorName('f3')[0] : 'F3'}
          </button>
          <button 
            onClick={handleClick} 
            className={`seat-button large ${isButtonClicked('27') ? 'clicked' : ''} ${getSpotExhibitorName('f4') !== null ? 'disabled' : ''}`} 
            id="27"
            title={getSpotExhibitorName('f4') ? getSpotExhibitorName('f4')[1] : 'F4'}
            >
            {getSpotExhibitorName('f4') ? getSpotExhibitorName('f4')[0] : 'F4'}
          </button>
        </div>
      </div>
 
  );
};

export default MapApp;
 