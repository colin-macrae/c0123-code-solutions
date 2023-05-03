import AppDrawer from './AppDrawer';
import './App.css';
import React from 'react';
import { useState } from 'react';



function App() {
  const [hideDrawer, setHideDrawer] = useState(true);
  const [ header, setHeader ] = useState('Stuff for Cycling!')

  function handleClick() {
    console.log('drawer opener clicked');
    setHideDrawer(!hideDrawer);
  }

  if(hideDrawer) {
    return (
      <div className='container'>
        <a
          href='#'
          className='icon'
          onClick={handleClick}
          >======== ======== ========</a>
        <h1 className='page-title'>{header}</h1>
      </div>
    )
  } else {
    return (
      <div className='container'>
        <a href='#' className='icon'>Open App Drawer</a>
        <h1 className='page-title'>{header}</h1>
        <AppDrawer onPress={handleClick} />
      </div>
    )
  }
}

export default App;
