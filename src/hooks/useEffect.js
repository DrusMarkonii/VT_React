import React, {useState, useEffect} from 'react'


function App() {       

  const [type, setType] = useState('users')
  const [data, setData] = useState()
  
 
  

  useEffect(() => {
   setTimeout( () => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
   }, 2000)
  })
  

  return (
    <div className="App">
      <h1>Resource: {type}</h1>
      <button onClick={() => {setType('users')}}>users</button>
      <button onClick={() => {setType('todos')}}>todos</button>
      <button onClick={() => {setType('posts')}}>posts</button>
      
      <pre>{JSON.stringify(data, null, 2)}</pre>
      
    </div>
  );
}

export default App;