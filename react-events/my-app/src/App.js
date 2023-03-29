import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <CustomButton text="I think..." color="red" onCustomClick={() => alert('hello')}/>
          <CustomButton text="I might be .." color="green" onCustomClick={() => alert('hi')} />
          <CustomButton text="getting it?" color="lightblue" onCustomClick={() => alert('how are you?')} />
        </div>

      </header>
    </div>
  );
}

export default App;
