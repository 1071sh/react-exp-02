import React, { useState } from "react";
import styles from "./style.module.scss";
import Header from "../../layout/Header";
import SideBar from "../../layout/SideBar";
import News from "../../components/News";
import CalendarItem from "../../components/CalendarItem";

const Home = () => {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      console.log("response", response);
      const json = await response.json();
      console.log("json", json);
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.home}>
        <SideBar />
        <div className={styles.contents}>
          <News />
          <CalendarItem />
        </div>
      </div>
    </>
  );
};

export default Home;
