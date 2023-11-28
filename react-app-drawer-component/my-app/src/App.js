import AppDrawer from './AppDrawer';
import './App.css';
import React from 'react';
import { useState } from 'react';



function App() {
  const [ hideDrawer, setHideDrawer ] = useState(true);
  const [ heading, setHeading ] = useState('Stuff for Cycling!')

  const menuHeading = "Choose a Sport"
  const menuItems = ['Road Cycling', 'MTB', 'Cyclocross', 'BMX', 'E-bikes']

  function handleClick() {
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
        <h1 className='page-title'>{heading}</h1>
      </div>
    )
  } else {
    return (
      <div className='container'>
        <a href='#' className='icon'></a>
        <h1 className='page-title'>{heading}</h1>
        <AppDrawer
        onPress={handleClick}
          setHeading={setHeading}
          header={heading}
          menuItems={menuItems}
          menuHeading={menuHeading}
        />
      </div>
    )
  }
}

export default App;
