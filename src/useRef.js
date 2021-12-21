import React, {useState, useRef, useEffect} from 'react'

function App() {

  const [inputValue, setInputValue] = useState({
    firstName: '',
    lastName: '',
    age: '',
    phone: '',
    job: '',
    country: '',
    city: ''
  })

  const inputRef = useRef(null)

  const styles = {
    color:'red'
  }

  const handleOnChangeInput = e => {
    const {name, value} = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    })
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  
  useEffect(() => {
    inputRef.current.style.color = 'red'
  },[])

  return (
    <div className="App">
      <form >
        <div>
          <input type="text" onChange={handleOnChangeInput}  name="firstName" placeholder='firstName'/>
        </div>
        <div>
          <input type="text" onChange={handleOnChangeInput}  name="lastName" placeholder='lastName'/>
        </div>
        <div>
          <input type="text" onChange={handleOnChangeInput}  name="age" placeholder='age'/>
        </div>
        <div>
          <input type="text" onChange={handleOnChangeInput}  name="phone" placeholder='phone'/>
        </div>
        <div>
          <input type="text" onChange={handleOnChangeInput}  name="job" placeholder='job'/>
        </div>
        <div>
          <input type="text" style={{color: 'null'}} ref={inputRef} onChange={handleOnChangeInput}  name="country" placeholder='country'/>
        </div>
        <div>
          <input type="text" onChange={handleOnChangeInput}  name="city" placeholder='city'/>
        </div>

      </form>

      
      <h1>Entered date:</h1>
      <p>firstName: {inputValue.firstName} </p>
      <p>lastName: {inputValue.lastName} </p>
      <p>age: {inputValue.age} </p>
      <p>phone: {inputValue.phone} </p>
      <p>job: {inputValue.job} </p>
      <p>country: {inputValue.country} </p>
      <p>city: {inputValue.city} </p>
    </div>
  );
}

export default App;
