import { useState } from 'react';
export default function RegistrationFormControlled() {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username, password);
  }

  return (
    <form
      onSubmit={handleSubmit}
    >

      <label>Username
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
      </label>

      <label>Password
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      </label>

      <button>Sign in</button>

    </form>
  )
}
