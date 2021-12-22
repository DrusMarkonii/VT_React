import {useState, useRef, useEffect } from "react"

function usePrevValue() {
    const prevValue = useRef('')
    const [currentValue, setCurrentValue] = useState('initial')
    
    useEffect(() => {
        prevValue.current = currentValue
    })

    return (
        <div>
             <form>
                <label>Current Sate: 
                    <input value={currentValue} onChange={e => setCurrentValue(e.target.value)} />
                </label>
             </form>
            <p>Prev State: {prevValue.current}</p>
        </div>
    )
}


export default usePrevValue