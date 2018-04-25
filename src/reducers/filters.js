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

export default filtersReducer;