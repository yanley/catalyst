import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import JobCard from './components/JobCard';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <JobCard />

    </div>
  );
}

export default App;
