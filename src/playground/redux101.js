import { createStore } from 'redux';

// Action Generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy  // for short you can just use 'decrementBy' only
    };
};

const setCount = ({ count } = {}) => {
    return {
        type: 'SET',
        count: count
    };
};

const resetCount = () => {
    return {
        type: 'RESET'
    };
};

// REDUCERS
    // 1. Reducers are pure functions
    // 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    //better to use a switch statement than an if/else
    switch (action.type) {
        case 'INCREMENT':
            // OLD - const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            // OLD - const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: state.count = 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default: 
            return state;    
    }
};

const store = createStore(countReducer);

// allows us to watch the state...it lets us know every single time the store changes.
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - objects that get sent to the store to update state over time.

// OLD 
// Increment the count (Action Object)
// store.dispatch({
//     type: 'INCREMENT', // 'type' MUST be provided, but you can add as many other arguments as you like.
//     incrementBy: 5
// });

// unsubscribe(); // this will 'end' the subscribe

// Reset the count (Action Object)
// store.dispatch({
//     type: 'RESET'
// });

// Decrement the count (Action Object)
// store.dispatch({
//     type: 'DECREMENT'
// });

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

// store.dispatch({
//     type: 'SET',
//     count: 101
// });



// NEW - USING ACTION GENERATORS
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
