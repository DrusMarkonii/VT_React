import React from 'react'
import PrevState from './usePrevValue'
import useFetch from './useFetch';
import { useState } from 'react/cjs/react.development';


function App() {       
  
  const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/todos')

  if(loading) return 'Loading....'

  if(error) {
    console.log('error___', error)
    return null
  }

  return (
    <div className="App">
     
      <h1>hello</h1>
      {/* <pre>{JSON.stringify(data,null, 2)}</pre> */}
      <PrevState />
    </div>
  );
}

export default App;