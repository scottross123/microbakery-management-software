import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [table, setTable] = useState('customer')
  const [records, setRecords] = useState([])

  useEffect(() => {
    fetch('/get_records?table=' + table, {}).then(
      response => response.json()
    ).then(
      response => {
        setRecords(response.records)
      }
    ).catch((error) => console.log(error));
  }, [table]);

  console.log(records)

  return (
    <div>
      {
        (typeof records === 'undefined') ? (
          <p>error</p>
        ) : (
          records.map((record) => (
            <div>
              {
                Object.entries(record).map((e) => (
                  <p>{e[0]}: {e[1]}</p>
                ))
              } <br/>
            </div>
          ))
      )}
    </div>
  );
}

export default App;
