import "./main-content.styles.scss";
import { hoverData } from "../../assets/dummyData";
import HoverIcon from "../icon/hover-icon/hover-icon.component";
import Card from "../card/card.component";

import icont from "../../assets/images/img4.png";

const MainContent = () => {
  return (
    <div className="mainContentComponent">
      <h1> Main Component not rendered!!!!</h1>

      {/* <Card padding="min" flex="row">
        <HoverIcon img={icont} />
        <HoverIcon img={icont} />
        <HoverIcon img={icont} />
        <HoverIcon img={icont} />
        <HoverIcon img={icont} />
      </Card> */}

      <Card padding="min" flex="row">
        {hoverData.map((data) => {
          return <HoverIcon key={data.id} img={data.img} />;
        })}
      </Card>
      <i className="fa-solid fa-circle-plus"></i>


      <p>test</p>
    </div>
  );
};

export default MainContent;
