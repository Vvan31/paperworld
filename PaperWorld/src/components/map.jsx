
import map from "../assets/map.png";
import MapApp from "../components/mapapp"
import "./mapSecction.css"
import Typography from '@mui/material/Typography';

import data from "../data.json";
const Map = ({ language }) => {
    const { exhibitor } = data[language];
    const handleSelection = (spot) => {
        // console.log(spot)
        };
        
    return (
        <div className="mapcontainer">
            <MapApp setSelection={handleSelection}  />
          {/*   <div className="information">

            <Typography variant="h4" gutterBottom className='title'>
                    {exhibitor.selectPackage}
                </Typography>
                <Typography variant="h10" gutterBottom className='sub'>
                    {exhibitor.packageInfo}
                </Typography>
                <div className='stands'>
                    <div className='stand'>
                        <div className='standSquare white' />
                        <Typography variant="h10" gutterBottom className='standName'>
                            {exhibitor.whiteStand}
                        </Typography>
                        <Typography variant="h10" gutterBottom className='standPrice'>
                            {exhibitor.whiteStandPrice}
                        </Typography>
                        <Typography variant="h10" gutterBottom className='standSize'>
                            {exhibitor.whiteStandSize}
                        </Typography>
                    </div>
                    <div className='stand'>
                        <div className='standSquare blue' />
                        <Typography variant="h10" gutterBottom className='standName'>
                            {exhibitor.blueStand}
                        </Typography>
                        <Typography variant="h10" gutterBottom className='standPrice'>
                            {exhibitor.blueStandPrice}
                        </Typography>
                        <Typography variant="h10" gutterBottom className='standSize'>
                            {exhibitor.blueStandSize}
                        </Typography>
                    </div>
                    <div className='stand'>
                        <div className='standSquare pink' />
                        <Typography variant="h10" gutterBottom className='standName'>
                            {exhibitor.pinkStand}
                        </Typography>
                        <Typography variant="h10" gutterBottom className='standPrice'>
                            {exhibitor.pinkStandPrice}
                        </Typography>
                        <Typography variant="h10" gutterBottom className='standSize'>
                            {exhibitor.pinkStandSize}
                        </Typography>
                    </div>
                    <div className='stand'>
                        <div className='standSquare green' />
                        <Typography variant="h10" gutterBottom className='standName'>
                            {exhibitor.greenStand}
                        </Typography>
                        <Typography variant="h10" gutterBottom className='standPrice'>
                            {exhibitor.greenStandPrice}
                        </Typography>
                        <Typography variant="h10" gutterBottom className='standSize'>


                            {exhibitor.greenStandSize}
                        </Typography>
                    </div>

                </div>

                <Typography variant="h10" gutterBottom className='sub'>
                    {exhibitor.standInclusions}
                </Typography>
                </div> */}
        </div>

    );
};

export default Map;
