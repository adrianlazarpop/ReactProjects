import './right-sidebar.styles.scss';
import ClickableSmallContainer from '../clickable-small-container/clickable-small-container.component';
import BulletPointIcon from '../bullet-point-icon/bullet-point-icon.component';
import { usersData } from '../../assets/dummyData';

const RightSidebar = () => {

  return (
    <div className='rightSidebar'>
      <h3>Contacts</h3>
      <ClickableSmallContainer imgLink={usersData[2].img} firstName={usersData[0].firstName} lastName={usersData[0].lastName} />
      {usersData.map((data) => {
        return (
          <ClickableSmallContainer key={data.id} imgLink={data.img}>
            <BulletPointIcon imgLink={data.img} />
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