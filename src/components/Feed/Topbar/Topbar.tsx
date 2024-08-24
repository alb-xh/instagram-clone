import React, { useState } from 'react';

import TopbarItem, { TopbarItemType } from './TopbarItem';

function Topbar() {
  const [ items, setItems ] = useState<TopbarItemType[]>([
    { id: 'topbar-item-1', text: 'For you', selected: true },
    { id: 'topbar-item-2', text: 'Following', selected: false },
  ])

  function onClick (targetItem: TopbarItemType) {
    setItems((items) => items.map((item) => ({ ...item, selected: item.id === targetItem.id })));
  }

  return (
    <div className='feed-topbar flex flex-row border-b-gray-800 border-b mt-8'>
      {items.map((item) => <TopbarItem key={item.id} item={item} onClick={onClick} />)}
    </div>
  );
}

export default Topbar;
