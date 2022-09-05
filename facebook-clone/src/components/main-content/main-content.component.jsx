import LeftSidebar from "../left-sidebar/left-sidebar.component";
import RightSidebar from "../right-sidebar/right-sidebar.component";

import './main-content.styles.scss';

const MainContent = () => {
  return (
    <div className="mainContent">
      <LeftSidebar />
      <div className="centralContent">
        <h1>Central Content</h1>
        <h1>Central Content</h1>
        <h1>Central Content</h1>
      </div>
      <RightSidebar />

    </div>

  )
}

export default MainContent;