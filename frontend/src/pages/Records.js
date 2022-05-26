import { useState, useEffect, useReducer } from 'react';
import RecordsList from './components/RecordsList';
import useFetch from '../hooks/useFetch';

function Records() {

  const [table, setTable] = useState('order')
  const url = '/get_records?table=' + table
  const { data, loading, error } = useFetch(url, {})

  console.log('data in records.js ' + data.records)

  return loading ? (
    <div>loading</div>
    ) : (
    <section className="section">
      <RecordsList records={data.records}/>
    </section>
  )
} 

export default Records;