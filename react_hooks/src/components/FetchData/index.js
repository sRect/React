import React, { useState,useEffect, memo} from 'react';

const UseStateComponent = ({username}) => {
  console.log(username)
  let [msg, changeMsg] = useState(username);
  let [uuid, changeData] = useState('');

  const fetchData = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url).then(res => {
        if(res.ok) {
          resolve(res.json())
        }
      }).catch(error => {
        reject(error)
      })
    })
  }

  async function getData() {
    let [error, data] = await fetchData('https://httpbin.org/uuid').then(res => [null, res]).catch(error => [error, null]);
    console.log(error);
    console.log(data)

    uuid = data.uuid;
    changeData(uuid);
  }

  useEffect(() => {
    document.title = uuid;
  })


  return(
    <div>
      <label htmlFor="msg">msg: {msg}</label>
      <input type="text" name="msg" id="msg" onChange={e => changeMsg(e.target.value)}/>
      <br />
      <button onClick={() => getData()}>fetchData</button>
      <br />
      <p id="p">请求的结果：{uuid}</p>
    </div>
  )
  
}

// React.memo 是 React 16.6 新的一个 API，用来缓存组件的渲染，避免不必要的更新，其实也是一个高阶组件，与 PureComponent 十分类似，但不同的是， React.memo 只能用于函数组件
export default memo(UseStateComponent)
