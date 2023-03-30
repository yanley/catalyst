import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import JobCard from './components/JobCard';
import MockJobCard from './components/MockJobCard';
import { mockData } from './components/mockData';
import Footer from './components/Footer';
import { Register } from './components/Register';
import { Login } from './components/Login';


import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
        <NavBar />
        {
          currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
        {/* <JobCard /> */}
        <MockJobCard />
        <Footer fixed="bottom" />

    </div>
  );
}

export default App;
