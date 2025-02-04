/**
 * you are given an array non-negative integers heights which represents an elevation
 * map. Each value height[i] represents the heights of a bar, which has a witdh of 1 
 * 
 * return the maximum area the water that can be trapped between the bars
 */ 

let heights = [0,2,0,3,1,0,1,3,2,1]

const trap = (heights) => {
    /**
     * To solve this problem, we gonna use a two-pointer approach, we start with the left pointer at
     * posicion 0 and the right pointer position at the end of the array. 
     * 
     *  l                 r 
     * [0,2,0,3,1,0,1,3,2,1]
     */
    let l = 0;
    let r = heights.length - 1;
    let maxLeftHeight = heights[l];
    let maxRightHeigh = heights[r];
    let res = 0;
    /**
     * With the while loop condition, we ensure which column is bigger between right or left
     * let's analyze an example.
     * Firs iterations
     *  
     * maxLeftHeight = 0
     * maxRightHeight = 1
     * =====================================
     *  l                 r 
     * [0,2,0,3,1,0,1,3,2,1]
     * maxLeftHeight is smaller
     * l++ =  1
     * maxLeftHeight = 0 , 2 = 2
     * res = maxHeightLeft - height[l] = 2 - 2 = 0
     * 
     * At this column any water can be storage
     * 
     * =====================================
     *    l               r 
     * [0,2,0,3,1,0,1,3,2,1]
     * maxLeftHeigh = 2
     * maxRightHeight = 1
     * 
     * maxLeftHeight is bigger 
     * r-- = 8
     *    l             r 
     * [0,2,0,3,1,0,1,3,2,1]
     * 
     * maxRightHeight = 2 , 2 = 2
     * res = maxRighHeight - heights[r] = 2 - 2 = 0
     * 
     * ============================================
     * at this point the values are the same, so we increment the left
     *    l             r 
     * [0,2,0,3,1,0,1,3,2,1]
     * l++ = 2
     * maxLeftHeight = 0 , 2 = 2
     * res = maxLeftHeight - heights[l] = 2 - 0 = 2;
     * 
     * At this point is where we can see the magic. Base on the right column is the same
     * that the left and the current column is zero. In that column we can store 2 units
     */
    
    while(l<r){
        if(maxLeftHeight<=maxRightHeigh){
            l++;
            maxLeftHeight = Math.max(maxLeftHeight,heights[l]);
            res += maxLeftHeight - heights[l];
        }else{
            r--;
            maxRightHeigh = Math.max(maxRightHeigh,heights[r]);
            res += maxRightHeigh - heights[r];
        }
    }
    return res;
}

trap(heights);