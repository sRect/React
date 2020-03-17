import React from 'react';
import { observable, computed, action } from "mobx";
import { observer } from "mobx-react";



function App() {
  return (
    <div className="App" style={{width: "600px",margin: "30px auto"}}>
      <div>
        <input type="text" style={{ padding: "4px 8px" }} /><button style={{ padding: "4px 8px", cursor: "pointer"}}>add</button>
      </div>
      <div className="list" style={{border: "1px solid #cccc"}}>
        <ul>
          <li>
            <div>
              <span>洗衣</span> 
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
