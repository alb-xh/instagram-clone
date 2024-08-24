import React from 'react';

type Props = {
  profileImgUrl: string,
};

function Story(props: Props) {
  return (
    <div className='feed-story flex rounded-full bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 cursor-pointer flex-shrink-0'>
      <img
        className='feed-story-img flex rounded-full w-16 h-16 m-0.5 border-black border-solid border-2 min-w-16'
        src={props.profileImgUrl}
        alt="profile-pic"
      />
    </div>
  );
}

export default Story;
