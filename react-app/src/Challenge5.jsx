function sum(x, y){
    let c = x + y;
    return c;
}

function sub(x, y){
    let c = x - y;
    return c;
}

function div(x, y){
    let c = x / y;
    c = c.toFixed(2);
    return c;
}

function mult(x, y){
    let c = x * y;
    return c;
}

export default sum;
export {sub, div, mult};