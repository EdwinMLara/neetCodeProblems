/**You are given an array of length n which was originally sorted in ascending order. It has now been rotated
 * between 1 and n  times. For example, the array nums = [1,2,3,4,5,6] might become;
 *  1.- [3,4,5,6,1,2] if it was rotated 4 times
 *  2.- [1,2,3,4,5,6] if it was rotated 6 times
 * 
 * Notice that rotating the array 4 times moves the last four elements of the array to the beginning. Rotating 
 * the array 6 times produces the original array.
 * 
 * Assuming all the elements in the rotated sorted array nums are unique, return the minumum element if this
 * array.
 * 
 * A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time? 
 */

const nums = [3,4,5,6,1,2];
const nums2 = [4,5,6,1,2,3];

const nums3 = [6,2,3,4,5,1];
const nums4 = [1,2,3,4,5,6];

const nums5 = [4,5,6,7,1,2,3]

const findMin = (nums) =>{
    console.log(nums)
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        console.log("left: ", l, "right: ", r);
        let m = l + Math.floor((r - l) / 2);
        console.log("       Mov: ", m);
        console.log("min: ",nums[m],"value: ",nums[r]);
        if (nums[m] < nums[r]) {
            r = m;
        } else {
            l = m + 1;
        }
        console.log("==============================");
    }
    return nums[l];
}

console.log(findMin(nums));