import React, { useState, useEffect } from 'react';
import RecordsList from './components/RecordsList'

function Orders() {

  const [records, setRecords] = useState([])

  useEffect(() => {
    fetch('/get_records?table=order', {}).then(
      response => response.json()
    ).then(
      response => {
        setRecords(response.records)
      }
    ).catch((error) => console.log(error));
  }, []);

  console.log(records)

  return (
    <section className="section">
      <table className="table">
        <RecordsList records={records}/>
      </table>
    </section>
  );
} 

export default Orders;