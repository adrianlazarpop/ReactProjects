import { currentUser, hoverData, POST_DATA } from "../../assets/dummyData";
import HoverIcon from "../shared/icon/HoverIcon/HoverIcon";
import Newsfeed from "./Newsfeed/Newsfeed";
import classes from "./StartingPage.module.scss";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
import Card from "../shared/Card/Card";
import CircleIcon from "../shared/icon/CircleIcon/CicleIcon";
import HorizontalLine from "../shared/HorizontalLine/HorizontalLine";
import RoundedInput from "../shared/Input/RoundedInput/RoundedInput";
import ClickableSmallContainer from "../shared/ClickableSmallContainer/ClickableSmallContainer";



const StartingPage = () => {
  return (
    <div className={classes.mainContainer}>

      <div className={classes.leftContent}>
        <LeftSidebar className={classes.leftContent} />
      </div>



      <div className={classes.newsfeed}>

        {/* Stories Section */}
        <Card padding="min" flex="stories">
          {hoverData.map((data) => {
            return <HoverIcon key={data.id} img={data.img} />;
          })}
        </Card>

        {/* Create aPost Section */}
        <Card padding="min" flex="column">
          <div className={classes.postInputContainer}>
            <CircleIcon img={currentUser.img} isActive="no" />
            <RoundedInput placeholder="What's on your mind?" />
          </div>
          <HorizontalLine />
          <div className={classes.postButtonsContainer}>
            <div className={classes.testClass}>
              <ClickableSmallContainer justifyContent="center">
                <i className="fa-solid fa-video"></i>
                <p>Live Video</p>
              </ClickableSmallContainer>
            </div>
            <div className={classes.testClass}>
              <ClickableSmallContainer justifyContent="center">
                <i className="fa-solid fa-file-image"></i>
                <p>Photo/Video</p>
              </ClickableSmallContainer>
            </div>
            <div className={classes.testClass}>
              <ClickableSmallContainer justifyContent="center">
                <i className="fa-solid fa-face-laugh"></i>
                <p>Feeling/activity</p>
              </ClickableSmallContainer>
            </div>
          </div>
        </Card>

        {/* Posts Section */}
        {POST_DATA.map((post) => {
          return (
            <Card padding="no" flex="column" key={post.id}>
              <Newsfeed postData={post} ></Newsfeed>
            </Card>
          );
        })}

      </div>
      <div className={classes.rightContent}>
        <RightSidebar />
      </div>

    </div>
  );
};

export default StartingPage;
