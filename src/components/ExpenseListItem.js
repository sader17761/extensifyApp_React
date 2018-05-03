/* --> CHALLENGE <-- */

// Export a stateless functional component
// Render: description, amount, createdAt

import React from 'react'; // importing this because we're using jsx
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => { dispatch(removeExpense({ id })) }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);