import { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  let text = ''
  let checkbox = ''
  if (password.length > 0 && password.length < 3) {
    text = 'Your password is WAY too short!';
    checkbox = '❌'
  } if (password.length > 2 && password.length < 8) {
    text = 'Your password is still too short!  Gettin there!';
    checkbox = '❌'
  } if (password.length === 0) {
    text = 'A password is required!';
    checkbox = '❌'
  } else if (password.length > 7) {
    checkbox = '✔️'
  }

  return (
    <>
    <form>
      <label>Password</label>
      <div>
        <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        // {handleChange}
        value={password}
        placeholder="enter your password"
        onSubmit={handleSubmit}></input>
        <button>Submit</button>
        <span
        style={{marginLeft:10}}>{checkbox}</span>
      </div>
    </form>
    <p
    style={{color: "red"}}>{text}</p>
    </>
  )
}
