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

export default expensesReducer;