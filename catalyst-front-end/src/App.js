import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <input placeholder='Search here...'></input><Button>Search</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React. Ideally before next week when this project is due.
        </a>
      </header>
    </div>
  );
}

export default App;
