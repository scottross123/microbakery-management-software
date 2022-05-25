import './App.css';
import React, { useState, useEffect } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Tables from './components/Tables';
import Orders from './pages/Orders';

function App() {
  return (
    <div className="columns">
      <div className="column">
        <Topbar/>
        <div className="columns">
          <div>
            <Sidebar/>
          </div>
          
          <div>
            <Orders/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
