/**
 * You are given an array of integers temperatures where tempetures[i] represents the daily 
 * temperatures on the ith day
 * 
 * return an array result where the result[i] is the number of the days after the ith day before
 * a warmer temperature appears on the future day. if there not day in the future where the warmer 
 * temperature will appear for the ith day, set the result to 0 istead. 
 */

const temperatures = [30, 38, 30, 36, 35, 40, 28]

const dailyTemperatures = (temperatures) => {
    /**
     * we're going to create an array filled with zeros 
     */
    const results = new Array(temperatures.length).fill(0);
    const stack = [];
    let tam = temperatures.length;
    /**
     * Here we're going to iterate over the array and use an axiliary stack. In the inside loop
     * we're going to check if the stack is empty, if it's not empty we verify if the current temperature 
     * is less than what is at the top stack is that true we will pop the last value in the stack, the 
     * stack is storing the index and the value in the temperatures array, now to know how many days in 
     * the future the temperature is warmer just substract the index of the current temperature with the
     * one we got from the stack. The while loop will continue iterating until the stack is empty. Once
     * the while loop breaks we push the current value to the stack
     */
    for(let i=0; i< tam ; i++){
        let t = temperatures[i];
        while(stack.length > 0 && stack[stack.length-1][1] < t){
            const [stackInd,stackValue] = stack.pop();
            results[stackInd] = i - stackInd;
        }
        stack.push([i,temperatures[i]]);
        console.log(stack);
    }

    return results;
}

console.log(dailyTemperatures(temperatures));