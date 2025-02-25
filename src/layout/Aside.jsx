import Yoga from "/yoga.svg";
import Swim from "/swim.svg";
import Bike from "/bike.svg";
import Muscu from "/muscu.svg";

const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside__icons">
        <img src={Yoga} alt="Yoga" />
        <img src={Swim} alt="Swim" />
        <img src={Bike} alt="Bike" />
        <img src={Muscu} alt="Muscu" />
      </div>
      <p>Copyright, SportSee 2020</p>
    </aside>
  );
};

export default Aside;
