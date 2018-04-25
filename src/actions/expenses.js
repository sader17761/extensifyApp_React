import uuid from 'uuid';

// ADD_EXPENSE (action generator)
export const addExpense = (
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
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

// EDIT_EXPENSE (action generator)
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates
});