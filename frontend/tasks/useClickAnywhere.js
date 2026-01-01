import { useCallback, useEffect } from "react";

export default function useClickAnywhere(handler) {
  const memoizedHandler = useCallback(
    (event) => {
      handler(event);
    },
    [handler]
  );

  useEffect(() => {
    window.addEventListener("click", memoizedHandler);

    return () => {
      window.removeEventListener("click", memoizedHandler);
    };
  }, [memoizedHandler]);
}



//example component :
export default function MyComponent () {
  const handleClick = (event) => {
    console.log('clicked anywhere', event.target)
  }

  useClickAnywhere(handleClick)

  return (
    <>
     <h1>Click Anywhere !</h1>
    </>
  )
}
