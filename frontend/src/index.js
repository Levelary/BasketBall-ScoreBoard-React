import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import Login from './Register/Login/Login';
import Signup from './Register/Signup/Signup';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const NotFound = () => {<h2>Page not found (404)</h2>}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Router>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route element={<NotFound/>}/>
        </Routes>
    </Router>
  </React.StrictMode>
);
