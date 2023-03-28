import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import JobCard from './components/JobCard';
import MockJobCard from './components/MockJobCard';
import { mockData } from './components/mockData';
import Footer from './components/Footer';


import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        {/* <JobCard /> */}
        <MockJobCard />
        <Footer fixed="bottom" />

    </div>
  );
}

export default App;
