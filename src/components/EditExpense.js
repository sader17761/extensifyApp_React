import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

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
                    // dispatch action to edit the expense
                    // redirect to the dashboard
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            <button onClick={(expense) => { 
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push('/');
            }}>Remove</button>
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