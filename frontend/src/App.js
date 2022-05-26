import './App.css';
import React, { useState, useEffect } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Records from './pages/Records';

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
            <Records/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
