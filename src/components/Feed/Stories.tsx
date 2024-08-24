import React, { useState } from 'react';

function Stories() {
  const [ stories ] = useState([ ...Array(10) ].map((_, i) => ({ profileImg: `https://loremflickr.com/200/200/people?random=${i + 1}` })))

  return (
    <div className='feed-stories flex flex-row m-4 gap-3 flex-wrap max-h-20 overflow-hidden'>
      {
        stories.map((story, i) => (
          <div key={i} className='feed-story flex rounded-full bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 cursor-pointer flex-shrink-0'>
            <img
              className='feed-story-img flex rounded-full w-16 h-16 m-0.5 border-black border-solid border-2 min-w-16'
              src={story.profileImg}
              alt="profile-pic"
            />
          </div>
        ))
      }
    </div>
  );
}

export default Stories;
