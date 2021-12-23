


const usePrevState = () => {
    const [value, setValue] = useState('initial')
    const prevValue = useRef('')

    const showPrevValue = () => {
        useEffect(() => {
            prevValue.current = value
        },[value])
    }

    const writePrevValue = () => {

    }

    return {
        prevValue,
        showPrevValue,
        writePrevValue
    }
}

export default usePrevState