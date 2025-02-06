/**
 * Evaluate Reverse Polish Notation
 * 
 * You're given an array of strings tokens that represents a valid arithmetic expression in Reverse
 * Polish Notation.
 * 
 *  return the expresion that represents the evaluations of the expression.
 *  The operants may be integers of the results of the others operations.
 *  The operators include '+', '-', '*' and '/'
 *  Assume that the division between integers always trucantes towards zero (truns means to delete 
 * al fraction numbers )
 */

let tokens = ["1","2","+","3","*","4","-"]
/**
 * This array of RPN can be read in mathematical as: ((1 + 4) * 3) - 4
 */
let tokens2 = ["4","13","5","/","+"]
/**
 * (13 / 5 ) + 4
 */
let tokens3 = ["4","-2","/","2","-3","-","-"];
/**
 * (4 / -2) - (2 - -3) 
 * 
 * @param {string []} tokens 
 * @returns {integer}
 */

const evalRPM = (tokens) =>{
    const operators = {
        "+" : "+",
        "*" : "*",
        "-" : "-",
        "/" : "/"
    }
    const operants = []
    /**
     * We're going to iterate over the elements in the array. Using a hash map with the 
     * operators as keys. For each element, we verfy if it's an operator: otherwise we push the 
     * character onto the stack. When an operator appears, we take the last two values from the stack 
     * and perform the operation. Just in case that the operant is division, we truncate the
     * result, at the end; the result will be added to the stack
     */
    for(let token of tokens){
        if(operators[token] !== undefined){
            let op1 = operants.pop();
            let op2 = operants.pop();
            let res = eval(op2 + " " +token + " " + op1);
            if(operants[token] === "/");
                res = Math.trunc(res);
            operants.push(res);
         }else
            operants.push(token);
    }

    // finally the last value on the stack is turned into a integer a returned 
    return parseInt(operants.pop());
}

console.log(evalRPM(tokens3));