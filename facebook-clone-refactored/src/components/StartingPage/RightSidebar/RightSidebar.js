import classes from './RightSidebar.module.scss';
import ClickableSmallContainer from '../../shared/ClickableSmallContainer/ClickableSmallContainer';
import { usersData } from '../../../assets/dummyData';
import CircleIcon from '../../shared/icon/CircleIcon/CicleIcon';
import RoundedInput from '../../shared/Input/RoundedInput/RoundedInput';
import { useState } from 'react';

const RightSidebar = () => {

  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(() => {
      return searchFieldString;
    });
  };

  const filteredUsers = usersData.filter((user) => {
    const val = `${user.firstName} ${user.lastName}`;
    return val.toLocaleLowerCase().includes(searchField);
  })

  return (
    <div className={classes.rightSidebar}>
      <h3 className={classes.rightSidebarTitle}>Contacts</h3>

      <div className={classes.searchBoxContainer}>
        <RoundedInput className={classes.searchBox} onChangeHandler={onSearchChange} placeholder='Search friends' />
      </div>

      {filteredUsers.map((data) => {
        return (
          <ClickableSmallContainer key={data.id} justifyContent='flex-start'>
            <CircleIcon img={data.img} isActive='yes' />
            <div>
              <p>{data.firstName} {data.lastName}</p>
            </div>
          </ClickableSmallContainer>
        )
      })}

    </div>
  )
}

export default RightSidebar;