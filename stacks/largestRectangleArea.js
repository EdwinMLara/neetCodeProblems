/** 
 * You are given an array of integers heights where height[i] represents the height of a bar.
 * The width of each bar 1.
 * 
 * Return the area of the largest rectangle that can be formed amoung the bars
 * 
 * Note: This chart is known as a histogram
 */

let heights = [7,1,7,2,2,4,1];
let heights2 = [1,3,7];
let heights3 = [0];
let heights4 = [9,0];
let heights5 = [1,2,3,4,5];

const largestRectangleArea = (heights) =>{
    let maxArea = 0;
    let stack = [];
    /**
     * Here we are interating over the array, we use an auxiliary variable that helps us yo know where
     * the area of the reactangle starts
     */
    for(let i=0; i < heights.length; i++){
        let start = i;

        /**
         * Under this condition, we verify that the stack isn't empty. Otherwise, we push 
         * to the array with two values start and height
         */
        while(stack.length > 0 && stack[stack.length - 1][1] > heights[i]){
            /**
             * At this point, we can infer that the stack is not empty. What this is telling us is that
             * we find a bigger hieght and all in the stack are less than the current. The important thing
             * to focus on in here is the start value stored in the stack, because this can create a bigger area
             * 
             * To calculate the area we need the width fo the rectangle and we get it by subtraction the current
             * index minus the stored. At the last, we just review if the obtained area is bigger than the stored
             * if this is true we swap the value.  
             */
            const [index,height] = stack.pop();
            maxArea = Math.max(maxArea,height*(i-index));
            start = index;
            
        }
        stack.push([start,heights[i]]);
        console.log(stack);
    }
    console.log(heights.length);
     for (const [index, height] of stack) {
            maxArea = Math.max(maxArea, height * (heights.length - index));
        }
    return maxArea;
}

console.log(largestRectangleArea(heights));

