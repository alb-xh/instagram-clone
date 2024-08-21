import React from 'react';

import useIsMediumScreen from '../../hooks/use-is-medium-screen';

type Props = {
  icon: any,
  text: string,
};

function SidebarItem (props: Props) {
  const isMediumScreen = useIsMediumScreen();

  return (
    <div className="sidebar-item flex flex-row p-2 my-1.5 items-center cursor-pointer hover:bg-gray-600 hover:bg-opacity-30 rounded">
      <props.icon sx={{ width: '1.75rem', height: '1.75rem' }}/>
      { !isMediumScreen ? <span className='sidebar-item-text px-3'>{props.text}</span> : '' }
    </div>
  );
}

export default SidebarItem;

