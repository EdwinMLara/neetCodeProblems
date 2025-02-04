/**
 * Given an array of integers nums, return the length of the longest consecutive sequence of elements
 * that can be formed 
 * 
 * a consecutive sequence is a sequece of elements in which each element is exactly 1 grather than
 * the previous element. The element do not have to be consecutive in the original array.
 */

let nums = [2,20,4,10,3,4,5];


/**
 * 
 * @param {*} nums 
 * @returns
 * 
 * to find the longest-consecutive sequence of elements first a new set is
 * created to get rid of the duplicate values. we going to iterate the array 
 * checking if the the current value minus one exists in the new set if it exists 
 * we are going to start a count to check how many number consecutive exist in the 
 * set based on the first value then it going to pass to the next until find the 
 * longest sequence   
 */
const longestConsecutive = (nums) => {
    const numSet = new Set(nums);
    let longest = 0;

    for(let num of numSet){
        if(!numSet.has(num-1)){
            let length = 1;
            while(numSet.has(num+length)){
                length++;
            }
            longest = Math.max(longest,length);
        }

    }
    return longest;
}

console.log(longestConsecutive(nums));
