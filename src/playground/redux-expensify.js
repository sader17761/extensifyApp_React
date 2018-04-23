import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'; // to use, npm install uuid

// ADD_EXPENSE (action generator)
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expenses: {
        id: uuid(), // to use, npm install uuid
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE (action generator)
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

// EDIT_EXPENSE (action generator)
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates
});

// SET_TEXT_FILTER (action generator)
const setTextFilter = (text = '') => ({ // if value passed in, use that...if not, use an empty string
    type: 'SET_TEXT_FILTER',
    text: text
});

// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE


// EXPENSES REDUCER (based on demoState below)...
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            //return state.concat(action.expenses); // don't use 'push', use 'concat'
            return [ // this uses 'spread operators' to add expenses to an array, you can also use the above 'concat'
                ...state,
                action.expenses
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => { // filter - returns a new array with the subset of the values
                return id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id){
                    return {
                        ...expense, // grabs all exsisting properties
                        ...action.updates // updates/overrides any properties passed down
                    }
                } else {
                    return expense;
                }
                
            });
        default: 
            return state;
    }
};

// FILTERS REDUCER (based on demoState below)...
const filtersReducersDefaultStore = { 
    text: '', 
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined
};

const filtersReducer = (state = filtersReducersDefaultStore, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state, // grabs all exsisting properties
                text: action.text // updates/overrides 'text' property passed down
            }
        default:
            return state;
    }
};

// STORE CREATION
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

// watches state for changes
store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'rent', note: 'for this months rent', amount: 60000}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', note: 'for my morning boost', amount: 300}));
const expenseThree = store.dispatch(addExpense({description: 'gas', note: 'for the jeep', amount: 4550}));

store.dispatch(removeExpense({ id: expenseOne.expenses.id }));

store.dispatch(editExpense(expenseTwo.expenses.id, {amount: 500}));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());


// what we're tracking...
const demoState = {
    expenses: [{
        id: 'abc',
        description: 'January Rent',
        note: 'This is the final payment.',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};


/* OBJECT SPREAD EXAMPLE */
// const user = {
//     name: 'Jen',
//     age: 34
// };

// console.log({
//     ...user,
//     location: 'Minnesota',
//     age: 43
// });