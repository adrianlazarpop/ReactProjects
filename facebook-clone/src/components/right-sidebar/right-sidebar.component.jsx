import './right-sidebar.styles.scss';
import ClickableSmallContainer from '../clickable-small-container/clickable-small-container.component';
import { usersData } from '../../assets/dummyData';
import CircleIcon from '../icon/circle-icon/cicle-icon.component';

const RightSidebar = () => {

  return (
    <div className='rightSidebar'>
      <h3>Contacts</h3>
      
      {usersData.map((data) => {
        return (
          <ClickableSmallContainer key={data.id} imgLink={data.img}>
            <CircleIcon img={data.img} />
            <div className='name'>
              <p>{data.firstName} {data.lastName}</p>
            </div>
          </ClickableSmallContainer>
        )
      })}



    </div>

  )
}

export default RightSidebar;