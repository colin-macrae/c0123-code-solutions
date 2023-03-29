import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <ToggleButton text="click me" color="lightBlue" />
          <ToggleButton text="click me" color="grey" />
          <ToggleButton text="click me" color="red" />
        </div>

      </header>
    </div>
  );
}

export default App;
