import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
        <NavBar />
        <AppRoutes />

        <Footer fixed="bottom" />

    </div>
  );
}

export default App;
