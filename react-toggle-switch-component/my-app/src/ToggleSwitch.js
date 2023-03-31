import { useState } from "react";
import './ToggleSwitch.css';

export default function ToggleSwitch() {
 const [isOnOff, setIsOnOff] = useState(false)

 function handleClick() {
   setIsOnOff(!isOnOff);
 }

 let text = ''
  if (isOnOff === true) {
  text = "On 😁"
  } else if (isOnOff === false) {text = "Off 😪"}

 return (
  <>
     <label className="switch">
       <input
       type="checkbox"
       onClick={handleClick}
        />
       <span className="slider round"></span>
     </label>
     <div>{text}</div>
  </>
 )
}
