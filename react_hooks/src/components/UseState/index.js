import React, { memo, useState, Fragment} from 'react';

const MyUseStateChild = memo(function ({ data }) {
  console.log("enter2==>", data);
  // useState的初始值，只在第一次有效
  // const [num] = useState(data);

  return (
    <div>
      <p>count child: {data}</p>
    </div>
  )
})

const MyUseState = function({initialCount = 0}) {
  console.log("enter1==>");

  const [count, changeCount] = useState(initialCount);

  const handleChangeCount = num => num += 1;

  return (
    <Fragment>
      <p>count: {count}</p>
      <button onClick={() => changeCount(handleChangeCount(count))}>changeCount</button>
      <div>
        <MyUseStateChild data={count}/>
      </div>
    </Fragment>
  )
}

export default memo(MyUseState);