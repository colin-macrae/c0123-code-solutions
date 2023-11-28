import './App.css';

export default function AppDrawer({ onPress, setHeader, header }) {
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
        >Choose a Sport</h1>
        <button
          onClick={() => {
            handleClick()
            setHeader('Road Cycling')
          }
            }
          className='buttons'
        >Road Cycling</button>
        <button
          onClick={() => {
            handleClick()
            setHeader('MTB')
          }
          }
          className='buttons'
        >MTB</button>
        <button
          onClick={() => {
            handleClick()
            setHeader('Cyclocross')
          }
          }
          className='buttons'
        >Cyclocross</button>
        <button
          onClick={() => {
            handleClick()
            setHeader('BMX')
          }
          }
          className='buttons'
        >BMX</button>
        <button
          onClick={() => {
            handleClick()
            setHeader('E-bikes')
          }
          }
          className='buttons'
        >E-bikes</button>

      </div>
    </>
  )
}
