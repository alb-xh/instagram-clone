import React, { useState } from 'react';
import Story from './Story';

function Stories() {
  const [ stories ] = useState([ ...Array(10) ].map((_, i) => ({ profileImgUrl: `https://loremflickr.com/200/200/people?random=${i + 1}` })))

  return (
    <div className='feed-stories flex flex-row m-4 gap-3 flex-wrap max-h-20 overflow-hidden'>
      {stories.map((story, i) => <Story key={i} profileImgUrl={story.profileImgUrl} />)}
    </div>
  );
}

export default Stories;
