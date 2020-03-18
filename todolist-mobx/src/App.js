import React from 'react';
import { observer, inject } from "mobx-react";

@inject('store')
@observer
class App extends React.Component {
  render({ store: { todoStore}} = this.props) {
    const { inputChange, addItem, filterItemList, removeItem, itemContent } = todoStore;
    return (
      <div className="App" style={{ width: "600px", margin: "30px auto" }}>
        <div>
          <input type="text" style={{ padding: "4px 8px" }} onChange={inputChange} value={itemContent} />
          <button style={{ padding: "4px 8px", cursor: "pointer" }} onClick={addItem}>add</button>
        </div>
        <div className="list" style={{ border: "1px solid #cccc" }}>
          <ul>
            {
              filterItemList.map(item => {
                return <li key={item.id}>
                  <div>
                    <span>{item.content} | {item.isComplete ? "完成" : "未完成"}</span> --
                    <button onClick={() => removeItem(item.id)}>删除</button>
                  </div>
                </li>
              })
            }

          </ul>
        </div>
      </div>
    );
  }
}

export default App;
