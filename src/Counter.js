import React from 'react';
import { connect } from 'react-redux';

function  Counter (props) {
    console.log('render => ', props);
    return (
        <div>
            <h1>Hello from Counter</h1>
            <p>Count: {props.count}</p>
            <button onClick={props.onIncrementClick}>Increment</button>
            <button onClick={props.onDecrementClick}>Increment</button>
        </div>
    );
}

function mapStateToProps(state) {
    console.log('mapStateToProps', state);
    return {
      count: state.count
    }
  }

function mapDispatchToProps(dispatch) {
    return {
        onIncrementClick : () => {
            // count= state.count + 1
            console.log('tombol klicked');
            const action = { type: 'INCREMENT'};
            dispatch(action);
        },
        onDecrementClick: () => {
            console.log('dikurang.!');
            const action = {type: 'DECREMENT'};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);