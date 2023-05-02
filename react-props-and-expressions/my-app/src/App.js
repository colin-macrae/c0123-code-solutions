import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <CustomButton color='red' text='i'/>
          <CustomButton color='blue' text='know' />
          <CustomButton color='white' text='react' />
        </div>
      </header>
    </div>
  );
}

export default App;
