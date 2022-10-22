import classes from "./Newsfeed.module.scss";
// import profilePic from "../../../assets/images/profileImg1.jpg";
// import postPic from "../../../assets/images/profileImg2.jpg";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InfoIcon from "@mui/icons-material/Info";
import RecommendIcon from "@mui/icons-material/Recommend";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import { useState, useRef } from "react";
import CommentsSection from "./Comments/CommentsSection";
import CircleIcon from "../../shared/icon/CircleIcon/CicleIcon";
import { currentUser } from "../../../assets/dummyData";
// import RoundedInput from "../../shared/Input/RoundedInput/RoundedInput";
import HorizontalLine from "../../shared/HorizontalLine/HorizontalLine";

const Newsfeed = (props) => {


  const [visibleComments, setVisibleComments] = useState(false);

  const handleCommentsVisibility = () => {
    setVisibleComments((prevState) => {
      return !prevState;
    })
  }

  const [isLiked, setIsLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(
    props.postData.numberOfLikes
  );

  const [comments, setComments] = useState(() => props.postData.comments);
  const inputRef = useRef();

  const likesReactionAction = () => {
    setIsLiked((prevState) => {
      return !prevState;
    });
    if (!isLiked) {
      setNumberOfLikes((prevState) => {
        return ++prevState;

      });
    } else {
      setNumberOfLikes((prevState) => {
        return --prevState;
      });
    }
  };

  const handleCommentClick = () => {
    inputRef.current.focus();
  }


  const handleInputKeyUp = (event) => {
    if (event.key === 'Enter' && event.target.value) {
      if (!visibleComments) {
        handleCommentsVisibility();
      }


      const commentValue = inputRef.current.value;
      console.log(`VAL Ref1 este #${commentValue}#`)

      setComments((comments) => {
        // const commentValue2 = inputRef.current.value;
        // console.log(`VAL Ref2 este #${commentValue2}#`)

        return ([
          {
            id: `D${comments.length}`,
            profileImg: "post1.png",
            username: 'Adrian Pop',
            date: '12/10/2022',
            comment: commentValue
          },
          ...comments,
        ])

      })
      event.target.value = '';
    }


  }

  return (

    <article className={classes.post}>

      {/* Post Header */}
      <div className={classes.postHeader}>
        <div className={classes.profileUserInfo}>
          <CircleIcon img={currentUser.img} isActive="no" />
          {/* <Link to="/">
            <img
              src={profilePic}
              alt="User Profile"
              className={classes.profileImage}
            />
          </Link> */}
          <div className={classes.profileName}>
            <span>{props.postData.username}</span>
            <span className={classes.postInfoDate}>
              {props.postData.postDate}
            </span>
          </div>
        </div>

        <Link to="/" className={classes.profileOptions}>
          <MoreHorizIcon></MoreHorizIcon>
        </Link>
      </div>

      {/* Photo +Title + Description */}
      {/* const src = require(`../../../assets/images/${img}`); */}
      <div className={classes.content}>
        <div className={classes.imgWrapper}>
          <img src={require(`../../../assets/images/${props.postData.profileImg}`)} alt="post img" className={classes.imgContent} />
          <div className={classes.infoIcon}>
            <InfoIcon></InfoIcon>
          </div>
        </div>

        <strong className={classes.postTitle}>{props.postData.title}</strong>
        <p className={classes.postDescription}>{props.postData.text}</p>
      </div>

      {/* Reacts current*/}
      <div className={classes.reacts}>
        <div className={classes.likesNumber}>
          <RecommendIcon className={classes.icon}></RecommendIcon>
          <span className={classes.reactsCount}>
            {numberOfLikes} likes
          </span>
        </div>
        <div className={classes.commentsNumber}>
          <CommentIcon className={classes.icon}></CommentIcon>
          <span className={classes.reactsCount} onClick={handleCommentsVisibility}>
            {props.postData.numberOfComments} comments
          </span>
        </div>
      </div>

      <HorizontalLine margin='no' />

      {/* Reacts */}
      <div className={classes.reactsActions}>
        <ul className={classes.actions}>
          {/* Like Action onClick */}
          <li
            className={`${classes.reaction} ${isLiked && classes.blue}`}
            onClick={likesReactionAction}
          >
            <RecommendIcon></RecommendIcon>
            <span>Like</span>
          </li>
          <li className={classes.reaction} onClick={handleCommentClick}>
            <CommentIcon />
            <span>Comment</span>
          </li>
          <li className={classes.reaction}>
            <ShareIcon></ShareIcon>
            <span>Share</span>
          </li>
        </ul>
      </div>

      {/* Write Comments Input */}
      <div className={classes.commentBoxContainer}>
        <div className={classes.insertComentField}>
          <input
            className={classes.input}
            ref={inputRef}
            type="text"
            placeholder="Write a comment..."
            onKeyUp={handleInputKeyUp}
          />
        </div>

        <HorizontalLine margin='min' />

        <div className={visibleComments ? classes.commentsContainer : classes.commentsContainerHidden}>
          {comments.map((comment) =>
            <CommentsSection key={comment.id} commentData={comment} src={comment.profileImg} />
          )}
        </div>



      </div>
    </article>


  );
};

export default Newsfeed;
