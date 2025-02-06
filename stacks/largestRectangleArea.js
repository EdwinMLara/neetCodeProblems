/** 
 * You are given an array of integers heights where height[i] represents the height of a bar.
 * The width of each bar 1.
 * 
 * Return the area of the largest rectangle that can be formed amoung the bars
 * 
 * Note: This chart is known as a histogram
 */

let heights =[7,1,7,2,2,4];

const largestRectangleArea = (heights) =>{
    let maxArea = 0;
    let witdh = 0;
    let min = heights[0];
    for(let i=1;i<heights.length - 1; i++){
        let area = 0;
        if(min < heights[i]){
            witdh++;
            area = heights[i]*witdh 
        }
        else
            witdh++;

        if(area > maxArea)
            maxArea = area;
            
    }
    return maxArea;
}

console.log(largestRectangleArea(heights));

