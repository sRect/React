import React, { Fragment, useState, useEffect, memo } from "react";
// useEffect 是专门用来处理副作用的，获取数据、创建订阅、手动更改 DOM 等这都是副作用。
// 你可以想象它是 componentDidMount 和 componentDidUpdate 及 componentWillUnmount 的结合。
// https://juejin.im/post/5c8918ca6fb9a049f572023e?utm_source=gold_browser_extension#comment

const UseStateTest = ({ intialState, changeMsg }) => {
  let [username, handleChangeName] = useState(intialState);

  useEffect(() => { // 副作用
    changeMsg(username);
  }, [username])

  return (
    <Fragment>
      <p>{username}</p>
      <label htmlFor="username">username: </label>
      <input type="text" id="username" onChange={e => handleChangeName(e.target.value)} />
    </Fragment>
  )
}

export default memo(UseStateTest);