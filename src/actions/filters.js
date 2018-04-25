// SET_TEXT_FILTER (action generator)
export const setTextFilter = (text = '') => ({ // Checks 'description', if a value passed in, use it...if not, use an empty string
    type: 'SET_TEXT_FILTER',
    text: text
});

// SORT_BY_DATE (action generator)
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

// SORT_BY_AMOUNT (action generator)
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

// SET_START_DATE (action generator)
export const setStartDate = (startDate) => ({ // if a value passed in, use it...if not, undefined will be used (set as default below)
    type: 'SET_START_DATE',
    startDate: startDate
});

// SET_END_DATE (action generator)
export const setEndDate = (endDate) => ({ // if a value passed in, use it...if not, undefined will be used (set as default below)
    type: 'SET_END_DATE',
    endDate: endDate
});