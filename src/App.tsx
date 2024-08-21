import React from 'react';

import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app flex flex-row h-screen bg-black text-white">
      <Sidebar />
      <div className="main flex flex-row w-5/6 justify-center">
        <div className='feed flex flex-col w-2/5'> Feed </div>
        <div className='suggestions flex-col w-1/5'>Suggestion</div>
      </div>
    </div>
  );
}

export default App;
