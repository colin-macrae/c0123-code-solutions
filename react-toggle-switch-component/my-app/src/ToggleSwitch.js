import { useState } from "react";
import './ToggleSwitch.css';

export default function ToggleSwitch() {
 const [isOn, setIsOn] = useState(false)

 function handleClick() {
   setIsOn(!isOn);
 }

 let text = ''
  if (isOn === true) {
  text = "On 😁"
  } else if (isOn === false) {text = "Off 😪"}

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
