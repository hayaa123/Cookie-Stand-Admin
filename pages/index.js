import { useState } from "react";
import CookieStandAdmin from "./components/CookieStandAdmin";
import Header from "./components/Header";
import hours from "./data";
const Home = () => {
  const openHours = hours;
  const [stand, setStand] = useState([]);
  const [latestStand, SetLatestStand] = useState();

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };

  const generateData = (openHours, min, max, avg) => {
    let sales = [];
    openHours.map((hr) => {
      let temp_sale = avg * getRandomInt(min, max);
      sales.push(temp_sale);
    });
    return sales;
  };

  const SubmitHandeler = (e) => {
    e.preventDefault();
    let tempStand = {
      location: e.target.location.value,
      minCustomer: e.target.min.value,
      maxCustomer: e.target.max.value,
      avgCookies: e.target.avg.value,
      sales: generateData(hours, e.target.min.value,e.target.max.value,e.target.avg.value),
    };
    setStand([...stand, tempStand]);
    SetLatestStand(tempStand);
  };

  return (
    <>
      <CookieStandAdmin
        SubmitHandeler={SubmitHandeler}
        latestStand={latestStand}
        stand={stand}
      />
    </>
  );
};
export default Home;
