import SquareIcon from "../icon/square-icon/square-icon.component";
import ClickableSmallContainer from "../clickable-small-container/clickable-small-container.component";
import { shortcutsData } from "../../assets/dummyData";

import "./left-sidebar.styles.scss";

const LeftSidebar = () => {
  return (
    <div className="leftSidebar">
      <h2> Left Sidebar</h2>

      <ul className="leftNavigation">
        <li className="header-button">
          <a href="">
            <i className="leftIcons fas fa-user-friends"></i>Latest News
          </a>
        </li>
        <li className="header-button">
          <a href="">
            <i className="leftIcons fa-solid fa-users"></i>Friends
          </a>
        </li>
        <li className="header-button">
          <a href="">
            <i className="leftIcons fa-solid fa-cart-shopping"></i>Groups
          </a>
        </li>
        <li className="header-button">
          <a href="">
            <i className="leftIcons fa-regular fa-circle-play"></i>Marketplace
          </a>
        </li>
        <li className="header-button">
          <a href="">
            <i className="leftIcons far fa-window-maximize"></i>Watch
          </a>
        </li>
        <li className="header-button">
          <a href="">
            <i className="leftIcons fa-solid fa-chart-simple"></i>Ads Manager
          </a>
        </li>
        <li className="header-button">
          <a href="">
            <i className="leftIcons fa-solid fa-flag"></i>Pages
          </a>
        </li>
        {/* <li className="header-button"><a href=''><i className="leftIcons fa-solid fa-droplet"></i>Blood Donations</a></li>
        <li className="header-button"><a href=''><i className="leftIcons fa-solid fa-credit-card"></i>Facebook Pay</a></li>
        <li className="header-button"><a href=''><i className="leftIcons fa-solid fa-star"></i>Favorites</a></li>
        <li className="header-button"><a href=''><i className="leftIcons fa-brands fa-facebook-messenger"></i>Messenger</a></li>
        <li className="header-button"><a href=''><i className="leftIcons fa-solid fa-gamepad"></i>Play Games</a></li>
        <li className="header-button"><a href=''><i className="leftIcons fa-sharp fa-solid fa-clock"></i>Memories</a></li>
        <li className="header-button"><a href=''><i className="leftIcons fa-solid fa-heart"></i>Fundraiser</a></li> */}

        <li className="header-button">
          <a className="seeMore" href="">
            See More
          </a>
        </li>
      </ul>

      <div className="horizontalLine"></div>

      <p>Your Shortcuts</p>

      {
        shortcutsData.map((shortcut) => {
          return (
            <ClickableSmallContainer key={shortcut.id}>
              <SquareIcon  img={shortcut.img} />
              <p>{shortcut.name}</p>
            </ClickableSmallContainer>
          )
        })
      }






    </div>
  );
};

export default LeftSidebar;
