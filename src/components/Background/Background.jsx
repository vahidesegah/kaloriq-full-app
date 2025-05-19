import { useLocation } from "react-router";
import strawberry from "../../assets/svg/background/strawberry.svg";
import backshadow from "../../assets/svg/background/shadow.svg";
import banana from "../../assets/svg/Background/banana.svg";
import leaf from "../../assets/svg/background/leaf.svg";
import leafAlt from "../../assets/svg/background/leaf.svg";
import style from "./Background.module.css";

const Background = () => {
  const location = useLocation();
  const showLeafContainer = location.pathname === "/diary" || location.pathname === "/calculator";
  const showContainer = location.pathname === "/" || location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className={style.background}>
      {showContainer && (
      <div className={style.container}>
      <img src={strawberry} alt="strawberry" width="286" height="279" className={style.strawberry} />
      <img src={backshadow} alt="backshadow" width="603" height="816" className={style.backshadow} />
      <img src={banana} alt="banana" width="773" height="552" className={style.banana} />
      <img src={leaf} alt="leaf" width="980" height="820" className={style.leaf} />
      </div>
      )}

      {showLeafContainer && (
        <div className={style.leafcontainer}>
          <img src={leafAlt} alt="leafAlt" width="980" height="820" className={style.leafAlt} />
        </div>
      )}
    </div>
  );
};

export default Background;
