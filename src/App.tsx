import React from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <div className="app flex flex-row h-screen bg-black text-white">
      <Sidebar />
      <div className="main flex flex-row w-5/6 justify-center">
        <Feed />
        <div className='suggestions flex-col w-1/5'>Suggestion</div>
      </div>
    </div>
  );
}

export default App;
