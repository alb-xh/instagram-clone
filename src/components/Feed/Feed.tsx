import React from 'react';

import Topbar from './Topbar';
import Stories from './Stories';

function Feed() {
  return (
    <div className='feed flex flex-col w-2/5'>
      <Topbar />
      <Stories />
      <h1>HEY</h1>
    </div>
  );
}

export default Feed;
