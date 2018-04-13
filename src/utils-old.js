console.log('utils.js is running!');

export const square = (x) => {
    return x * x;
}

export const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

export default subtract;

// exports - default export(can only have one) - named exports(can have as many as we like)

// use the following if you don't export individually as we did above
// export { square, add, subtract as default };

