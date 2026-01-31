import styles from "./style.module.scss";
import Header from "../../layout/Header";
import SideBar from "../../layout/SideBar";
import News from "../../components/News";
import CalendarItem from "../../components/CalendarItem";
import useForm from "../../hooks/useForm";

const Home = () => {
  const { data } = useForm();

  // console.log("data", data);

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
