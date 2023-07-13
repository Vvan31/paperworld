
import './mapapp.css';
const MapApp = () => {
  return (
    <div className="seat-selection">
        <div className="G1">
            <button className="seat-button large">A1</button>
            <button className="seat-button small">A2</button>
            <button className="seat-button small">A3</button>
            <button className="seat-button small">A4</button>
            <button className="seat-button small">A5</button>
            <button className="seat-button large">A6</button>
            <button className="seat-button large">A7</button>
        </div>
   
        <div className="G2 group-row">
            <div className="group">
                <button className="seat-button large">B1</button>
                <button className="seat-button large">C2</button>
            </div>
            <div className="group">
                <button className="seat-button vertical">B2</button>
            </div>
        </div>
        <div className="G3 group-row">
            <div className="group">
                <button className="seat-button vertical">B3</button>
            </div>
            <div className="group">
                <button className="seat-button small">B4</button>
            </div>
            <div className="group">
            <button className="seat-button large">B5</button>
            <button className="seat-button large">C3</button>
            </div>
        </div>

        <div className="G4 group-row">
            <div className="group">
            <button className="seat-button vertical">C1</button>
            <button className="seat-button vertical">D1</button>
            </div>
        </div>
        <div className="G5 group-row">
            <div className="group">
                <button className="seat-button large">D2</button>
                <button className="seat-button large">E1</button>
            </div>
            <div className="group">
                <button className="seat-button vertical">D3</button>
            </div>
        </div>
        <span className="empty-space"></span>


        <div className="G6 group-row">
            <div className="group">
                <button className="seat-button vertical">D4</button>
            </div>
            <div className="group">
                <button className="seat-button small">D5</button>
                <button className="seat-button small">E2</button>
            </div>
            <div className="group">
                <button className="seat-button small">D6</button>
                <button className="seat-button small">E3</button>
            </div>
            <div className="group">
                <button className="seat-button vertical">D7</button>
            </div>
        </div>
        <span className="empty-space"></span>

        <div className="G7">
            <button className="seat-button large">F1</button>
            <button className="seat-button small">F2</button>
            <button className="seat-button large">F3</button>
            <button className="seat-button large">F4</button>
        </div>
    </div>
  );
};

export default MapApp;
