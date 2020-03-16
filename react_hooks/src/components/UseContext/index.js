import React, { Fragment, memo, useReducer, useContext } from 'react';
import { defaultCount } from "../../store/state";
import { countReducer } from "../../store/reducer";
import { handleCountAdd, handleCountDelete } from "../../store/actions";

const Context = React.createContext(null);

const MyUseContextChild = () => {
  const [count, dispatch] = useContext(Context);
  return (
    <div>
      child... {count}
      <button onClick={() => dispatch(handleCountAdd())}>setCount++</button>
      <button onClick={() => dispatch(handleCountDelete())}>setCount--</button>
    </div>
  )
}

const MyUseContext = () => {
  const [count, dispatch] = useReducer(countReducer, defaultCount);

  return (
    <Context.Provider value={[count, dispatch]}>
      <Fragment>
        <p>count: {count}</p>
        <button onClick={() => dispatch(handleCountAdd())}>setCount++</button>
        <button onClick={() => dispatch(handleCountDelete())}>setCount--</button>
        <MyUseContextChild />
      </Fragment>
    </Context.Provider>
    
  );
}

export default memo(MyUseContext)
