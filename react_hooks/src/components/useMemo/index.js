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
  const name = "hello";

  // 当我们点击按钮更新count的时候，Effect组件会render，一旦render，回重新执行下面这行代码
  // 这一行代码会生成有新的内存地址的对象，那么就算带着memo的Child组件，也会跟着重新render
  // 尽管最后其实Child使用到的值没有改变
  // const obj = {
  //   name
  // }

  // useMemo有暂存功能，会将name值与上一次进行对比
  // 如果name没有改变，name这次的obj就不重新赋值生成新的对象了
  const obj = useMemo(() => {
    return {
      name
    }
  }, [name]);

  return (
    <div>
      <div>num: {num}</div>
      <button onClick={() => setNum(num + 1)}>setNum</button>
      <MyUseMemoChild obj={obj}/>
    </div>
  )
}

export default memo(MyUseMemo);
