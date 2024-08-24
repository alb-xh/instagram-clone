import React from 'react';

export type TopbarItemType = {
  id: string,
  text: String,
  selected: Boolean
}

export type Props = {
  item: TopbarItemType,
  onClick: (item: TopbarItemType) => void,
}

function TopbarItem (props: Props) {
  return (
    <button
      className={`flex p-2 font-medium ${!props.item.selected ? 'text-gray-500' : ''}`}
      onClick={() => props.onClick(props.item)}
    >
      {props.item.text}
    </button>
  );
}

export default TopbarItem;
