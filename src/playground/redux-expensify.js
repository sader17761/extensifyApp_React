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
const setTextFilter = (text = '') => ({ // if a value passed in, use it...if not, use an empty string
    type: 'SET_TEXT_FILTER',
    text: text
});

// SORT_BY_DATE (action generator)
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

// SORT_BY_AMOUNT (action generator)
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

// SET_START_DATE (action generator)
const setStartDate = (startDate) => ({ // if a value passed in, use it...if not, undefined will be used (set as default below)
    type: 'SET_START_DATE',
    startDate: startDate
});

// SET_END_DATE (action generator)
const setEndDate = (endDate) => ({ // if a value passed in, use it...if not, undefined will be used (set as default below)
    type: 'SET_END_DATE',
    endDate: endDate
});

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

// FILTERS REDUCER (based on demoState below)...these are the defaults we set
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
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state, // grabs all exsisting values from state, using the spread operator
                sortBy: 'amount' // setting 'sortBy' to the string value 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state, // grabs all exsisting values from state, using the spread operator
                sortBy: 'date' // setting 'sortBy' to the string value 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state, // grabs all exsisting values from state, using the spread operator
                startDate: action.startDate // updates/overrides 'startDate' property passed down
            };
        case 'SET_END_DATE':
            return {
                ...state, // grabs all exsisting values from state, using the spread operator
                endDate: action.endDate // updates/overrides 'startDate' property passed down
            };
        default:
            return state;
    }
};

// NOTE: startDate and endDate...are timestamps, which count in milliseconds (example: 33400, 10, -203)...0 = January 1st, 1970 (known as: unix epoch)

// GET VISIBLE EXPENSES...here we are using destructuring to sort the data...
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; // if createdAt date is greater than or equal to startDate -> SHOW
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate; // if createdAt date is less than or equal to endDate -> SHOW
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        // sorts by highest item first...
        switch (sortBy) {
            case 'date':
                return a.createdAt < b.createdAt ? 1 : -1;
            case 'amount':
                return a.amount < b.amount ? 1 : -1;   
            default:
                return 0;
        }
    });
}

// STORE CREATION...and COMBINING Reducers
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

// watches state for changes
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log('Visible Expenses: ', visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'rent', note: 'for this months rent', amount: 60000, createdAt: -21000})); 
const expenseTwo = store.dispatch(addExpense({description: 'coffee', note: 'for my morning boost', amount: 300, createdAt: -1000}));
const expenseThree = store.dispatch(addExpense({description: 'gas', note: 'for the jeep', amount: 900, createdAt: -1900}));

// store.dispatch(removeExpense({ id: expenseOne.expenses.id }));

// store.dispatch(editExpense(expenseTwo.expenses.id, {amount: 500}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));   // if createdAt(1000) >= startDate(0) ->  SHOW ALL 'createdAt' that are greater than 'startDate'
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));   // if createdAt(1000) <= endDate(999) ->  SHOW ALL 'createdAt' that are less than 'endDate'



// This is our 'STATE'...this is what we're tracking.
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