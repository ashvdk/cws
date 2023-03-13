import { createStore } from 'redux';

const initialState = {
  // initial state of your application
  count: 0
};

const reducer = (state = initialState, action) => {
  // update state based on the action
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;