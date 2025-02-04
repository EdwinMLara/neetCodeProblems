/**
 * you are given an integer array heights where heights[i] represents the height of the ith bar
 * 
 * you may choose any two bars to form a container. return the maximum amount 
 */

let heights = [1,7,2,5,4,7,3,6]
let heights2 = [2,2,2]

/**
 * For this problem, we're going to apply a two pointers reference what we need is to find the biggest 
 * container that can be formed using two heights values. One thing to take into account is that the 
 * container cannot spill the water that's whay to get the area we used the smallest value of the two
 * selected. This value is multiplied by the distance between pointers right and left. Finally, it's 
 * verify which of the two selected values is bigger so that we can decide if we increment the left or 
 * decrement the right
 * 
 * @param {interger []} heights 
 * @returns {boolean}
 */

const maxArea = (heights) =>{
    let l = 0;
    let r = heights.length - 1;
    let area = 0;
    while(l<r){
        let min = Math.min(heights[l],heights[r]);
        area = Math.max(area,min*(r-l));
        if(heights[l]<heights[r])
            l++;
        else
            r--;
    }
    return area
}

console.log(maxArea(heights2))