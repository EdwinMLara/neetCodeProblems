/**
 * Desing a stack class that supports the push, pop, top, and getMin operations
 * 1.- MinStack() initializes the stack object.
 * 2.- void push(int val) pushes the element val onto the stack
 * 3.- void pop() removes the element on the top the stack
 * 4.- int top() gets the top element of the stack 
 * 5.- int getMin() retrieves the minimun element in the stack 
 * 
 * In programming only there are two basic data structures: arrays and linkend list.
 * A stack can be implemented with two both of them in this case we're going to use the arrays
 */

class MiniStack {
    // create an empty array
    constructor(){
        this.stack = []
    }

    /**
     * The push method add a value to the array in the last index  
     * @param {integer} val
     * @return {void} 
     */
    push(val){
        this.stack.push(val);
    }

    /**
     * The pop method extracts the last value in the array
     */
    pop(){
        this.stack.pop();
    }

    /**
     * In base of the lenght of the array return the value in that pocisition 
     * @returns {integer}
     */
    top(){
        return this.stack[this.stack.length -1];
    }

    /**
     * we make a copy of the array on the method min of the class Math 
     * this function return the min value of the array
     * @returns {interger} 
     */
    getMin(){
        return Math.min(...this.stack);
    }
}

const ministack = new MiniStack();
ministack.push(1);
ministack.push(2);
ministack.push(0);
console.log(ministack.getMin());
ministack.pop();
console.log(ministack.top());
console.log(ministack.getMin());