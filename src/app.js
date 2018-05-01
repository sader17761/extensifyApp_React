import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // 'Provider' will allow us to provide the 'store' to all of our components that make up our application.
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore(); // this will retrieve our current 'state' from the store in 'configureStore'

/* --> CHALLENGE <-- */
// addExpense -> water bill
// addExpense -> gas bill
// getTextFilter -> bill ( 2 items ) -> water ( 1 item )
// getVisibleExpenses -> print visible ones to the screen

// watches 'STATE' for changes...NOTE: this MUST come before the creation of expenses...OR, without the subscribe we can add the contents below the dispatch calls
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log('Visible Expenses: ', visibleExpenses);
});

store.dispatch(addExpense({description: 'Water Bill', amount: 4500, note: '1st quarter 2018 water bill', createdAt: 0}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 0, note: 'April 2018 gas bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500, note: 'April bill', createdAt: 0}));
//store.dispatch(setTextFilter('bill'));

// NOT NEEDED FOR OUR FINAL CODE...
// this is just an example using time.
// setTimeout(() => {
//     store.dispatch(setTextFilter('gas'));
// }, 3000);


// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log('Visible Expenses: ', visibleExpenses);
/* --> END OF CHALLENGE <-- */

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
