import "./main-content.styles.scss";
import { currentUser, hoverData } from "../../assets/dummyData";
import HoverIcon from "../icon/hover-icon/hover-icon.component";
import Card from "../card/card.component";
import CircleIcon from "../icon/circle-icon/cicle-icon.component";
import RoundedInput from "../input/rounded-input/rounded-input.component";
import { postsData } from "../../assets/dummyData";

// import icont from "../../assets/images/img4.png";
import HorizontalLine from "../horizontal-line/horizontal-line.component";
import ClickableSmallContainer from "../clickable-small-container/clickable-small-container.component";

const MainContent = () => {
  const src = require(`../../assets/images/${postsData[0].img}`);
  return (
    <div className="mainContentComponent">
      {/* Stories Sextion */}
      <Card padding="min" flex="row">
        {hoverData.map((data) => {
          return <HoverIcon key={data.id} img={data.img} />;
        })}
      </Card>
      <i className="fa-solid fa-circle-plus"></i>
      {/* Create aPost Section */}
      <Card padding="min" flex="column">
        <div className="post-input-container">
          <CircleIcon img={currentUser.img} isActive="no" />
          <RoundedInput placeholder="What's on your mind?" />
        </div>
        <HorizontalLine />
        <div className="post-buttons-container">
          <div className="test-class">
            <ClickableSmallContainer justifyContent="center">
              <i className="fa-solid fa-video"></i>
              <p>Live Video</p>
            </ClickableSmallContainer>
          </div>
          <div className="test-class">
            <ClickableSmallContainer justifyContent="center">
              <i className="fa-solid fa-file-image"></i>
              <p>Photo/Video</p>
            </ClickableSmallContainer>
          </div>
          <div className="test-class">
            <ClickableSmallContainer justifyContent="center">
              <i className="fa-solid fa-face-laugh"></i>
              <p>Feeling/activity</p>
            </ClickableSmallContainer>
          </div>
        </div>
      </Card>
      <p>test</p>
      <i class="fas fa-ellipsis-h"></i>
      {/* Posts Section */}
      <Card padding="no" flex="column">
        <img alt="img" className="post-img" src={src} />

        <p>test</p>
      </Card>
    </div>
  );
};

export default MainContent;
