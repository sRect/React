import React, { useState, useMemo, memo } from 'react';

const MyUseMemoChild = memo(({obj}) => {
  console.log('child render...', obj.name);

  return (
    <div>child: {obj.name}</div>
  )
})

const MyUseMemo = () => {
  console.log("MyUseMemo render ==>");
  const [num, setNum] = useState(100);
  const name = "hello"

  // const obj = {
  //   num
  // }

  const obj = useMemo(() => {
    return {
      name
    }
  }, [name])

  return (
    <div>
      <div>num: {num}</div>
      <button onClick={() => setNum(num + 1)}>setNum</button>
      <MyUseMemoChild obj={obj}/>
    </div>
  )
}

export default memo(MyUseMemo);
