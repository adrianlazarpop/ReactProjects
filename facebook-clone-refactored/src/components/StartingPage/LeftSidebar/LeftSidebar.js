import SquareIcon from '../../shared/icon/SquareIcon/SquareIcon';
import ClickableSmallContainer from '../../shared/ClickableSmallContainer/ClickableSmallContainer';
import { shortcutsData, leftNavData } from "../../../assets/dummyData";
import HorizontalLine from "../../shared/HorizontalLine/HorizontalLine";

import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupsIcon from '@mui/icons-material/Groups';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EventIcon from '@mui/icons-material/Event';
import StarIcon from '@mui/icons-material/Star';
import UpdateIcon from '@mui/icons-material/Update';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import classes from "./LeftSidebar.module.scss";
import { useState } from 'react';
import React from 'react';



const getIcon = (icon) => {
  switch (icon) {
    case 'Article':
      return (<ArticleIcon className={classes.icon} />);
    case 'People':
      return (<PeopleIcon className={classes.icon} />);
    case 'Groups':
      return (<GroupsIcon className={classes.icon} />);
    case 'ShoppingCart':
      return (<ShoppingCartIcon className={classes.icon} />);
    case 'SmartDisplay':
      return (<SmartDisplayIcon className={classes.icon} />);
    case 'Bookmark':
      return (<BookmarkIcon className={classes.icon} />);
    case 'Event':
      return (<EventIcon className={classes.icon} />);
    case 'Star':
      return (<StarIcon className={classes.icon} />);
    case 'Update':
      return (<UpdateIcon className={classes.icon} />);
    case 'Bloodtype':
      return (<BloodtypeIcon className={classes.icon} />);
    case 'VolunteerActivism':
      return (<VolunteerActivismIcon className={classes.icon} />);
    default:
      return;
  }

}



const LeftSidebar = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpandNavigation = () => {
    setIsExpanded((prevState) => {
      return !prevState;
    })

  }
  return (

    <div className={classes.leftSidebar}>

      <ul className={`${classes.leftNavigation} ${isExpanded && classes.expanded}`}>

        {leftNavData.map((data) => (
          <li className={classes.headerButton} key={data.id}>
            {getIcon(data.icon)}
            <p>{data.text}</p>
          </li>)
        )}




      </ul>

      {/* See more tag */}
      <div className={classes.expandTrigger}
        onClick={handleExpandNavigation}>
        {isExpanded ?
          (<div className={classes.triggerContainer}>
            <ExpandLessIcon className={classes.icon} />
            <p>See less</p>
          </div>)
          :
          (<div className={classes.triggerContainer}>
            <ExpandMoreIcon className={classes.icon} />
            <p>See more</p>
          </div>)}
      </div>

      <HorizontalLine margin='topMin'/>

      <p>Your Shortcuts</p>

      {shortcutsData.map((shortcut) => {
        return (
          <ClickableSmallContainer
            key={shortcut.id}
          >
            <SquareIcon img={shortcut.img} />
            <p>{shortcut.name}</p>
          </ClickableSmallContainer>
        );
      })}
    </div>
  );
};

export default LeftSidebar;
