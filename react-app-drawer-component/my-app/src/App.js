import AppDrawer from './AppDrawer';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [hideDrawer, setHideDrawer] = useState(true);

  function handleClick() {
    console.log('drawer opener clicked');
    setHideDrawer(false);
  }

  if(hideDrawer) {
    return (
      <div className='container'>
        <a
          href='#'
          className='icon'
          onClick={handleClick}
          >======== ======== ========</a>
        <h1 className='page-title'>Stuff for Cycling!</h1>
      </div>
    )
  } else {
    return (
      <div className='container'>
        <a href='#' className='icon'>Open App Drawer</a>
        <h1 className='page-title'>Stuff for Cycling!</h1>
        <AppDrawer />
      </div>
    )
  }
}

export default App;
