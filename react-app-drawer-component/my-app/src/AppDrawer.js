import './App.css';

export default function AppDrawer({ onPress, setHeading, header, menuItems, menuHeading }) {
  function handleClick() {
    console.log('modal clicked');
    onPress()
  }
  return (
    <>
      <div className='drawer-transp-background' onClick={handleClick}>
      </div>
      <div className='drawer' >
        <h1
          className='header'
        >{menuHeading}</h1>
        {menuItems.map((item, index) => (
            <MenuItemsList
              key={index}
              handleClick={handleClick}
              setHeading={setHeading}
              menuItem={item}
            />
        ))}
      </div>
    </>
  )
}

export function MenuItemsList({menuItems, handleClick, setHeading, menuItem}) {
  return(
    <button
      onClick={() => {
        handleClick();
        setHeading(menuItem);}}
      className='buttons'>
        {menuItem}
    </button>
  )
}
