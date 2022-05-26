import { useState, useEffect, useReducer } from 'react';
import RecordsList from './components/RecordsList';
import useFetch from '../hooks/useFetch';

function Records() {

  const [table, setTable] = useState('order')
  const url = '/get_records?table=' + table
  const { data, loading, error } = useFetch(url, {})

  if (error) {
    console.log(error)
  }

  return (
    <section className="section">
      {
        loading ? (
          <p>loading</p>
        ) : Object.values(data).map(records => (
          <RecordsList records={records}/>
        ))
      }
    </section>
  );
} 

export default Records;