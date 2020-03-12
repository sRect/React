import React, { useState, useEffect, memo, Fragment } from 'react';

const MyUseEffect = ({initData = 1}) => {
  console.log("MyUseEffect==>");

  const [num, setNum] = useState(initData);
  const [age, setAge] = useState(18);

  useEffect(() => {
    document.querySelector("#num2").innerText = num;
  })

  useEffect(() => { // 只执行一次
    document.querySelector("#num3").innerText = num;
  }, [])

  useEffect(() => { // 只有当age被改变时执行
    document.querySelector("#num4").innerText = age;
  }, [age])

  useEffect(() => { // willUnMount中取消订阅
    console.log('use effect...', num);
    const timer = setInterval(() => {
      console.log('timer...count:', num);
      // setNum(num + 1);

      return () => clearInterval(timer);
    }, 2000)
  })

  return (
    <Fragment>
      <p>num: { num }, age: { age }</p>
      <div style={{border: "1px solid #ccc", display: "inline-block"}}>
        num2:<p id="num2"></p>
        num3(只执行一次):<p id="num3"></p>
        num4(只在age改变的时候执行)): <p id="num4"></p>
      </div>
      <button onClick={() => setNum(num + 1)}>setNum</button>
      <button onClick={() => setAge(age + 1)}>setAge</button>
    </Fragment>
  );
}

export default memo(MyUseEffect)
