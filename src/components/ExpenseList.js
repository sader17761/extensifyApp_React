import React from 'react';
import { connect } from 'react-redux'; // connects your component to the 'redux store'

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.filters.text}
        {props.expenses[1].note}
    </div>
);

// HOC - this will get passed to 'ExpenseList' via the 'props'
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseList);

