import {createStore} from 'redux';

const initialState = {
    count: 3,
    lain: 'apa'
}

const reducer = (state = initialState, action) => {
    console.log('reducer berjalan', action);
    switch (action.type){
        case 'INCREMENT':
            return Object.assign({}, state, {count: state.count + 1});
        case 'DECREMENT':
            if(state.count > 0){
                return Object.assign({}, state, {count: state.count - 1});
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;