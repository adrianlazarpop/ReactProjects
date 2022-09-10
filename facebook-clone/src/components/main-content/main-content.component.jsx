import './main-content.styles.scss';

import { shortcutsData } from '../../assets/dummyData';

import icont from '../../assets/images/img4.png';
import iconm from '../../assets/images/user-icon.png';
import SquareIcon from '../icon/square-icon/square-icon.component';
import HoverIcon from '../icon/hover-icon/hover-icon.component';
import Card from '../card/card.component';

const MainContent = () => {
  console.log(icont);
  console.log(shortcutsData[0].img);
  return (

    <div className="mainContentComponent">
      <h1> Main Component not rendered!!!!</h1>

      <Card padding='min'>
        <HoverIcon imgSrc={icont} />
      </Card>

      <p>test</p>
      <img alt='img' src={icont} />
      <img alt='img' src={shortcutsData[0].img}></img>
      <SquareIcon img={shortcutsData[0].img} />


      <img src={iconm} />


    </div>

  )
}

export default MainContent;