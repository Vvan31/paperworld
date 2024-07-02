
import AnimatedBack from '../components/animatedBack';

import '../../styles/gradient.css';
import '../../styles/schedule.css';
import CardFlip from '../components/cardFlip.js';
const Schedule = () => {

  return (
    <div className='schedule'>
        <div className='paperContainer'>
        <CardFlip  dateNum={1} />
        <CardFlip  dateNum={2} />
        </div>
        <AnimatedBack />
    </div>
  );
};

export default Schedule;
