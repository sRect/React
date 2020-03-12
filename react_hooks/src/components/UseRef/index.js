import React, { useState, useEffect, useRef, memo, Fragment } from 'react';

const MyUseRef = () => {
  console.log("MyUseRef render ==>");
  const [num, setNum] = useState(100);
  const [num2, setNum2] = useState(100);
  const countRef = useRef(200);
  const btnRef = useRef(null);

  useEffect(() => {
    document.title = num;
  })

  useEffect(() => {
    console.log('use effect...', num);
    const timer = setInterval(() =>{
      console.log('timer...num1:', countRef.current);
      setNum(countRef.current + 1);
    }, 2000)

    return () => clearInterval(timer);
  }, [num])

  useEffect(() => {
    console.log('use effect...', num2);
    const timer = setInterval(() => {
      console.log('timer...num2:', num2);
      setNum2(num2 + 1);
    }, 2000)

    return () => clearInterval(timer);
  }, [num2])

  useEffect(() => {
    const handleClick = () => {
      setNum(num + 2);
    }

    btnRef.current.addEventListener('click', handleClick, false);

    return () => btnRef.current.removeEventListener('click', handleClick, false);
  })

  return (
    <Fragment>
      <p>num: {num}</p>
      <p>num2: {num2}</p>
      <button onClick={() => setNum(num + 1)}>setNum</button>
      <button ref={btnRef}>useRef</button>
    </Fragment>
  )
}

export default memo(MyUseRef)
