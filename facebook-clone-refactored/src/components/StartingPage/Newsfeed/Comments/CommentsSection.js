import classes from "./CommentsSection.module.scss";
import { Link } from "react-router-dom";
// import profilePic from "../../../../assets/images/profileImg1.jpg";
import CircleIcon from "../../../shared/icon/CircleIcon/CicleIcon";

const CommentsSection = (props) => {

 
  return (
    <div className={classes.comments}>
      <Link to="/">
        <div className={classes.userInfo}>
          <CircleIcon className={classes.profilePic} img={props.src} isActive='no' />
          {/* <img className={classes.profilePic} src={profilePic} alt='ProfilePic'></img> */}
          <div className={classes.commentInfo}>
            <p className={classes.author}>{props.commentData.username}</p>
            <p className={classes.comment}>{props.commentData.comment}</p>
          </div>
        </div>
      </Link>


    </div>
  );
};

export default CommentsSection;
