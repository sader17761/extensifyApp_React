// NOTE: startDate and endDate...are timestamps, which count in milliseconds (example: 33400, 10, -203)...0 = January 1st, 1970 (known as: unix epoch)
import moment from 'moment';

// GET VISIBLE EXPENSES...here we are using destructuring to sort the data...
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; // if createdAt date is greater than or equal to startDate -> SHOW
        // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate; // if createdAt date is less than or equal to endDate -> SHOW

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
};

export default getVisibleExpenses;