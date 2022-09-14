import ClickableSmallContainer from "../../clickable-small-container/clickable-small-container.component";

import "./post-footer.styles.scss";

const PostFooter = () => {
  return (
    <div className="post-buttons-container">
      <div className="test-class">
        <ClickableSmallContainer justifyContent="center">
          <i class="fa-regular fa-thumbs-up"></i>
          <p>Like</p>
        </ClickableSmallContainer>
      </div>
      <div className="test-class">
        <ClickableSmallContainer justifyContent="center">
          <i class="fa-regular fa-message"></i>
          <p>Comment</p>
        </ClickableSmallContainer>
      </div>
      <div className="test-class">
        <ClickableSmallContainer justifyContent="center">
        <i class="fa-solid fa-share"></i>
        <i class="fa-regular fa-share-from-square"></i>
      
        
          <p>Share</p>
        </ClickableSmallContainer>
      </div>
    </div>
  );
};

export default PostFooter;
