import './App.css';

export default function AppDrawer() {
  return (
    <div className='container'>
      <a href='#' className='icon'>Open App Drawer</a>
      <h1 className='header'>Choose a Sport</h1>
      <button className='buttons'>Road Cycling</button>
      <button className='buttons'>MTB</button>
      <button className='buttons'>Cyclocross</button>
      <button className='buttons'>BMX</button>
      <button className='buttons'>E-bikes</button>
    </div>
  )
}

// export default function AppDrawer({ heading, items, onClick }) {
//   const list = items.map((item) => <button onClick={() => onClick(item)}>{item}</button>)

//   return (
//     <div className="drawer">
//       <h2>{heading}</h2>
//       {list}
//     </div>
//   )
// }
