import React, { useState,useEffect} from 'react';

export const UseStateComponent = ({intialMsg}) => {
  let [msg, changeMsg] = useState(intialMsg);
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
