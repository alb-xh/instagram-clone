import React from 'react';

import Topbar from './Topbar/Topbar';
import Stories from './Stories/Stories';

function Feed() {
  return (
    <div className='feed flex flex-col w-2/5'>
      <Topbar />
      <Stories />
    </div>
  );
}

export default Feed;
