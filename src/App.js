import React from 'react'

import useFetch from './useFetch';


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
      <pre>{JSON.stringify(data,null, 2)}</pre>
    </div>
  );
}

export default App;