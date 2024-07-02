import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import data from "../data.json";

import "./countdown.css"
// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = "10/31/2024";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const ShiftingCountdown = ({language}) => {

  const intervalRef = useRef(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { countdown } = data[language]; // Access the corresponding language data

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);

    const now = new Date();

    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div className="mainCountdown">
      <div className="numbersContainer">
        <CountdownItem num={remaining.days} text={countdown.days} />
        <CountdownItem num={remaining.hours} text={countdown.hours} />
        <CountdownItem num={remaining.minutes} text={countdown.minutes}/>
        <CountdownItem num={remaining.seconds} text={countdown.segundos} />
      </div>
    </div>
  );
};

const CountdownItem = ({ num, text }) => {
  return (
    <div className="numberCountdown">
      <div className="numberContainer">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="number"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs md:text-sm lg:text-base font-light text-slate-500">
        {text}
      </span>
    </div>
  );
};

export default ShiftingCountdown;