import { useRef, useEffect} from "react";



function useEventListener(eventName, handler, element = window) {
  
  const savedHandler = useRef();
  
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(
    () => {
      
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      
      const eventListener = (event) => savedHandler.current(event);
      
      element.addEventListener(eventName, eventListener);
      
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] 
  );
}

export default useEventListener



//MarkUP for APP 

// import useEventListener from './useEventListener'
// import react, { useCallback, useState } from 'react'


// function App() {
  
//   const [coords, setCoords] = useState({ x: 0, y: 0 });
  
//   const handler = useCallback(
//     ({ clientX, clientY }) => {
      
//       setCoords({ x: clientX, y: clientY });
//     },
//     [setCoords]
//   );
  
//   useEventListener("mousemove", handler);
//   return (
//     <h1>
//       The mouse position is ({coords.x}, {coords.y})
//     </h1>
//   );
// }

// export default App;