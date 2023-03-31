import { useState } from 'react';
export default function HotButton() {

  const [timesClicked, setTimesClicked] = useState(0);

  function handleClick() {
    setTimesClicked(timesClicked + 1)
    console.log(timesClicked)
  }

  let color = "purple"
  if (timesClicked >= 3) {
    color = "maroon"
  }
  if (timesClicked >= 6) {
    color = "red"
  }
  if (timesClicked >= 9) {
    color = "orange"
  }
  if (timesClicked >= 12) {
    color = "yellow"
  }
  if (timesClicked >= 15) {
    color = "white"
  }

  return (
    <button
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >HotButton</button>
  )
}
