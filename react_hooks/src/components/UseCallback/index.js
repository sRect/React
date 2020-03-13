import React, { useCallback, useState, memo, Fragment } from 'react';

const MyUseCallbackChild = memo(({ text, onChange}) => {
  console.log("MyUseCallbackChild render====>");

  return (
    <div>
      data: {text}
      <input type="text" onChange={onChange} />
    </div>
  )
});

const MyUseCallback = () => {
  console.log("MyUseCallback render====>")
  const [num, setNum] = useState(18);
  const [text, setText] = useState("default text...");

  // const handleInputChange = e => setText(e.target.value);

  // useMemo 是缓存值的
  // useCallback 是缓存函数的
  const handleInputChange = useCallback((e) => {
      setText(e.target.value);
    },
    [text],
  )

  return (
    <Fragment>
      <span>num: {num}</span>
      <span>text: {text}</span>
      <button onClick={() => setNum(num + 1)}>setNum</button>
      <MyUseCallbackChild text={text} onChange={handleInputChange}/>
    </Fragment>
  )
}

export default memo(MyUseCallback)
