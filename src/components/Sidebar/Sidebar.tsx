import React from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import useIsMediumScreen from '../../hooks/use-is-medium-screen';
import Logo from '../logo';
import SidebarItem from './SidebarItem';

function Sidebar () {
  const isMediumScreen = useIsMediumScreen()

  return (
    <div className="sidebar flex flex-nowrap flex-col h-screen p-3 border-r-gray-600 border-r lg:w-80 overflow-y-auto min-w-min">
      <div className='sidebar-logo flex px-2.5 py-2 my-6'>{ isMediumScreen ? <InstagramIcon /> : <Logo /> }</div>
      <div className='sidebar-start flex flex-col'>
        <SidebarItem icon={HomeIcon} text='Home' />
        <SidebarItem icon={SearchIcon} text='Search' />
        <SidebarItem icon={ExploreIcon} text='Explore' />
        <SidebarItem icon={SlideshowIcon} text='Reels' />
        <SidebarItem icon={MessageIcon} text='Messages' />
        <SidebarItem icon={FavoriteBorderIcon} text='Notifications' />
        <SidebarItem icon={AddBoxOutlinedIcon} text='Create' />
        <SidebarItem icon={AccountCircleOutlinedIcon} text='Profile' />
      </div>
      <div className="sidebar-end flex flex-auto flex-col justify-end">
        <SidebarItem icon={AlternateEmailIcon} text='Threads' />
        <SidebarItem icon={MoreHorizIcon} text='More' />
      </div>
    </div>
  );
}

export default Sidebar;
