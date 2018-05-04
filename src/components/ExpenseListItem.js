/* --> CHALLENGE <-- */

// Export a stateless functional component
// Render: description, amount, createdAt

import React from 'react'; // importing this because we're using jsx
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;