import './App.css';
import CustomButton from './SubComponent/CustomButton'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <CustomButton size={'small'} />
          <CustomButton />
          <CustomButton size={'large'} />
        </div>
      </header>
    </div>
  );
}

export default App;
