import "./main-content.styles.scss";
import { currentUser, hoverData } from "../../assets/dummyData";
import HoverIcon from "../icon/hover-icon/hover-icon.component";
import Card from "../card/card.component";
import CircleIcon from "../icon/circle-icon/cicle-icon.component";

// import icont from "../../assets/images/img4.png";
import HorizontalLine from "../horizontal-line/horizontal-line.component";
import ClickableSmallContainer from "../clickable-small-container/clickable-small-container.component";

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

      <Card padding="min" flex="column">
        <div>
          <CircleIcon img={currentUser.img} isActive="no" />
        </div>
        <HorizontalLine />
        <div className="post-actions-container">
          <div className="test-class">
            <ClickableSmallContainer>
              <p>test</p>
            </ClickableSmallContainer>
          </div>
          <div className="test-class">
            <ClickableSmallContainer>
              <p>test</p>
            </ClickableSmallContainer>
          </div>
          <div className="test-class">
            <ClickableSmallContainer>
              <p>test</p>
            </ClickableSmallContainer>
          </div>
        </div>
      </Card>

      <p>test</p>
    </div>
  );
};

export default MainContent;
