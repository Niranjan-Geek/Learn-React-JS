import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import 'react-clock/dist/Clock.css';

const NPMClock = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <h2>NPM Clock</h2>
      <Clock value={value} />
    </>
  );
};

export default NPMClock;
