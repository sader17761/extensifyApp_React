import { createStore } from 'redux';

// passing current state '(state)'
const store = createStore((state = { count: 0 }) => {
    return state;
});

console.log(store.getState());