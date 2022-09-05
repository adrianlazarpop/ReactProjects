import './left-sidebar.styles.scss';

const LeftSidebar = () => {
  return (
    <div className="leftSidebar">
      <h2> Left Sidebar</h2>

      <ul className="leftNavigation">
        <li className="header-button"><a href=''><i class="leftIcons fas fa-user-friends"></i>Latest News</a></li>
        <li className="header-button"><a href=''><i class="leftIcons fa-solid fa-users"></i>Friends</a></li>
        <li className="header-button"><a href=''><i class="leftIcons fa-solid fa-cart-shopping"></i>Groups</a></li>
        <li className="header-button"><a href=''><i class="leftIcons fa-regular fa-circle-play"></i>Marketplace</a></li>
        <li className="header-button"><a href=''><i class="leftIcons far fa-window-maximize"></i>Watch</a></li>
        <li className="header-button"><a className='seeMore' href=''>See More</a></li>
        


      </ul>

    </div>

  )
}

export default LeftSidebar;