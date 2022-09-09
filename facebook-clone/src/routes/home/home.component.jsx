import Header from "../../components/header/header.component";
import LeftSidebar from "../../components/left-sidebar/left-sidebar.component";
import MainContent from "../../components/main-content/main-content.component";
import RightSidebar from "../../components/right-sidebar/right-sidebar.component";

import './home.styles.scss';

const Home = () => {
  return (
    <div className="App">
      <Header />
      <div className="mainContent">
        <LeftSidebar />

        <MainContent />

        <RightSidebar />

      </div>
    </div>
  )

}

export default Home;