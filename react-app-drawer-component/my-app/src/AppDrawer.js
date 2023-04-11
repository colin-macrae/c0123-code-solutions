import './App.css';

export default function AppDrawer({ onPress }) {
  function handleClick() {
    console.log('modal clicked');
    onPress()
  }
  return (
    <>
      <div className='drawer-transp-background' onClick={handleClick}>
      </div>
      <div className='drawer' >
          <DrawerHeader text='Choose a Sport' />
          <Button text='Road Cycling' />
          <Button text='MTB' />
          <Button text='Cyclocross' />
          <Button text='BMX' />
          <Button text='E-bikes' />
      </div>
    </>
  )
}

function Button({ text }) {
  function handleClick() {
    console.log('button clicked');
  }
  return (
    <button
    onClick={handleClick}
    className='buttons'
    >{text}</button>
  )
}

function DrawerHeader({ text }) {
  return (
    <h1
      className='header'
    >{text}</h1>
  )
}
