import { useState } from 'react';

export default function ToggleButton ({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    console.log('before', isClicked);
    setIsClicked(!isClicked);
    console.log('after', isClicked);
  }
  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: isClicked ? color : 'white' }}>{text}
    </button>
  )
}
