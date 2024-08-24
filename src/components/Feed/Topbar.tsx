import React, { useState } from 'react';

type TopbarItem = {
  id: string,
  text: String,
  selected: Boolean
}

function Topbar() {
  const [ items, setItems ] = useState<TopbarItem[]>([
    { id: 'topbar-item-1', text: 'For you', selected: true },
    { id: 'topbar-item-2', text: 'Following', selected: false },
  ])

  function onClickHandler (id: string) {
    setItems((items) => items.map((item) => ({ ...item, selected: item.id === id })));
  }

  return (
    <div className='feed-topbar flex flex-row border-b-gray-800 border-b mt-8'>
      {
        items.map((item) => (
          <button
            key={item.id}
            className={`flex p-2 font-medium ${!item.selected ? 'text-gray-500' : ''}`}
            onClick={() => onClickHandler(item.id)}
          >
            {item.text}
          </button>
        ))
      }
    </div>
  );
}

export default Topbar;
