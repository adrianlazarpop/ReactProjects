import "./post-header.styles.scss";
import CircleIcon from "../../icon/circle-icon/cicle-icon.component";
import { currentUser } from "../../../assets/dummyData";

const PostHeader = () => {
  return (
    <div className="post-header">
      <div className="profile-user-info">
        <CircleIcon img={currentUser.img} isActive="no" />

        <div className="profile-name">
          <span>Username 1</span>
          <span>06 iun 2022</span>
        </div>
      </div>

      <a href="#" className="profile-options">
        <i class="fas fa-ellipsis-h"></i>
      </a>
    </div>
  );
};

export default PostHeader;
