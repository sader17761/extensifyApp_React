import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

// const EditExpensePage = () => (
//     <div>This is from my Edit component.</div>
// );

// this will allow us to view 'props' that react router has available to us.
const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log('Updated: ', expense);
                }}
            />
        </div>
    );
};

// this gives us access to the expense we clicked on...
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    };
};

export default connect(mapStateToProps)(EditExpensePage);