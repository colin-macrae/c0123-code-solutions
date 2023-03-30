export default function RegistrationFormUncontrolled() {

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formEntries = Object.fromEntries(formData.entries())
    console.log(formData, formEntries);
}

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label>Username
        <input type="text" name="username"></input>
      </label>

      <label>Password
        <input type="password" name="password"></input>
      </label>

      <button>Sign in</button>
    </form>
  )
}
