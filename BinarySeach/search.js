/**
 * you are given an array of distinc integers nums, sorted in ascending order, and an integer target.
 * Implement a function to search for target within nums. if it exists, the return its index, otherwise
 * return -!
 * 
 * your solution must run in O(logn) time  
 */

let nums = [-1,0,2,4,6,8]
let target = 4;
let nums2 = [-1,0,3,5,9,12];
let target2 = 9;
let nums3 = [-1,0,2,4,6,8]
let target3 = 3
let nums4 = [5];
let target4 = 5;

/**
 * A binary search is a fast way to make a search over an array
 * @param {number []} nums 
 * @param {number} target 
 * @returns 
 */

const search = (nums,target) => {
    let l = 0;
    let r = nums.length;
    /**
     * What we are doing here is taking the length of the array and dividing by two,
     * the result of the substract is the index we are going to check. if the value of the this 
     * index array is equal to the target so return the index. Otherwise, we verify if the value is 
     * smaller than the target if this is the case move the left variable to the index if review.
     * On the order hand, we move the right to the current index   
     */
    console.log(nums);
    while(l < r){
        console.log('left :',l,'Right',r);
        let mov = l + Math.floor((r-l)/2);
        console.log('Mov :', mov);
        console.log('target: ',target,'value: ',nums[mov]);
        if(target === nums[mov])
            return mov;
        nums[mov] < target ? l = mov + 1 : r = mov
        console.log("============================")
    }
    return -1;
} 
//console.log(search(nums2,target2))

module.exports = search;