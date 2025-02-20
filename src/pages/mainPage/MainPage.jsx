import classes from "./MainPage.module.scss";
import Section1 from "./sections/section1/Section1";
import { Qualified } from "../../components/Qualified/Qualified";
import Start from "../../components/Start/Start";
import Faq from "../../components/Faq/Faq";
import Table from "../../components/Table/Table";

const MainPage = () => {
  return (
    <div className="main-page">
      <Start />
      <Section1 />
      {/* <div className={classes.noiseBg}></div> */}
      <Faq />
      <Qualified />
    </div>
  );
};

export default MainPage;
