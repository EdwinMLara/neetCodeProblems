/**
 * SEARCH IN A ROTATED SORTED ARRAY
 * 
 * You're given an array length n which was originally sorted in ascending order.it has now been rotated
 * between 1 and n times. For example, the arrays nums = [1,2,3,4,5,6] might become:
 * 
 *      [3,4,5,6,1,2] if it was rotated 4 times.
 *      [1,2,3,4,5,6] if it was rotated 6 times.
 * 
 * Given the rotated sorted array nums and the integer target, return the index of target within nums, or -1 if
 * it is not present.
 * 
 * you may assume all elements in the sorted rotated array nums are unique,
 * 
 * A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(lon n)
 */

let nums  = [3,4,5,6,1,2];
let target = 1;

let nums2 = [3,5,6,0,1,2];
let target2 = 4;


const search = (nums,target) => {
    let l = 0;
    let r = nums.length - 1;

    while(l<=r){
        let m = Math.floor((r+l)/2)
        if(nums[m] === target)
            return m

        if(nums[l] <= nums[m]){
            if(target > nums[m] || target < nums[l] )
                l = m + 1
            else
                r = m - 1
        }else{
            if(target < nums[m] || target > nums[r])
                r = m - 1
            else
                l = m + 1;
        }
    }
    return -1;
}

console.log(search(nums2,target2));