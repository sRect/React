import React, { Fragment, memo, useReducer } from 'react';
import {connect} from "react-redux";
import { handleAdd, handleDelete, handleCountAdd, handleCountDelete } from "../../store/actions";
import { defaultCount } from "../../store/state";
import { countReducer } from "../../store/reducer";

const MyUseReducer = (props) => {
  const [count, dispatch] = useReducer(countReducer, defaultCount);
  const { num, handleAddClick, handleDeleteClick} = props;
  
  return (
    <Fragment>
      num: {num} | count: {count}
      <div>
        <button onClick={handleAddClick}>handleAddClick</button>
        <button onClick={handleDeleteClick}>handleDeleteClick</button>

        <button onClick={() => dispatch(handleCountAdd())}>count++</button>
        <button onClick={() => dispatch(handleCountDelete())}>count--</button>
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    num: state.numReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAddClick() {
      dispatch(handleAdd())
    },
    handleDeleteClick() {
      dispatch(handleDelete())
    }
  }
}

const connectMyUseReducer = connect(mapStateToProps, mapDispatchToProps)(MyUseReducer);

export default memo(connectMyUseReducer)