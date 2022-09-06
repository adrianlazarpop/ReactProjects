import Header from "../../components/header/header.component";
import MainContent from "../../components/main-content/main-content.component";
import LeftSidebar from "../../components/left-sidebar/left-sidebar.component";
import RightSidebar from "../../components/right-sidebar/right-sidebar.component";

import './home.styles.scss';

const Home = () => {
  return (
    <div className="App">
      <h1>Home Component React router test</h1>
      <Header />
      <div className="mainContent">
      <LeftSidebar />
      <div className="centralContent">
        <h1>Central Content not c</h1>
        <h1>Central Content</h1>
        <h1>Central Content</h1>
      </div>
      <RightSidebar />

    </div>
    </div>
  )

}

export default Home;