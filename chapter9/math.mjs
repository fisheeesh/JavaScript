const PI = 3.142;

let add = (a, b) => a + b;
let minus = (a, b) => a - b;

/**
 * We dun need to add default all the time
 * Only when it comes to export a specific property among all
 */
// export default add
export {add, minus, PI}