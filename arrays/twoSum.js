/**
 * Given an array of integers nums and an integer targer, return 
 * the indices i and j such that nums[i] + nums[j] == target and i != j 
 * 
 * you may assume that every input has exactly one pair of indices i and j
 * that satisfy the condition 
 */

const twoSumBruteForce = (nums, target) => {
    for(let i=0; i<nums.length ; i++){
        for(let j=0; j<nums.length ; j++){
            if(nums[i] + nums[j] === target)
                return [i,j];
        }
    }
    return []
}

let nums = [6,3,5,4];
let target = 7;

console.time("twoSum BruteForce")
console.log(twoSumBruteForce(nums, target))
console.timeEnd("twoSum BruteForce");

/**
 * time complexity O(n^2)
 * space complexity O(1)
 */

const twoSumSorting = () => {
    let A = [];
    /**
     * here we are creating and two dimensional array it contains 
     * the value at the first position and the second one is the index array 
     */
    for(let i=0; i < nums.length; i++){
        A.push([nums[i],i]);
    }

    /**
     * we need to order the array in an ascending way base on the values
     */
    A.sort((a,b) => a[0] - b[0])

    let i=0; j=nums.length -1;

    /**
     * At this point, we gonna throught the array from the first an last position 
     * simultaneously. Suppose the sum of both is equal to the target so it retunrs 
     * an array with the index's values.
     * 
     * One constraint is that the return array has the values with the smaller first,
     * so we need to check what is the smaller at the sum in the fist position, therefore 
     * in the second position we need to get the bigger. Now if the value's sum is not equal 
     * to the target we verify if the sum is smaller than the targer. if the sum is smaller 
     * we increment the fisrt position on the order hand the last value must be decrement 
     */
    
    while (i < j){
        let cur = A[i][0] + A[j][0];
        if(cur === target){
            return [Math.min(A[i][1], A[j][1]), Math.max(A[i][1], A[j][1])];
        }else if(cur <  target){
            i++;
        }else{
            j--;
        }
    }
    return [];
}

console.time("twoSumSorting")
console.log(twoSumSorting(nums,target));
console.timeEnd("twoSumSorting")

/**
 * Time complexity O(nlogn)
 * space complexity O(n) 
 */

const twoSumHashMapTwoPass = (nums, target) => {
    const indices = {};

    for(let i=0; i < nums.length ; i++){
        indices[nums[i]] = i;
    }

    console.log(indices);

    for(let i=0;i < nums.length; i++){
        let diff = target - nums[i];
        if(indices[diff] !== undefined && indices[diff] !== i)
            return[i, indices[diff]];
    }

    return [];
}

console.time("hashMap two pass");
console.log(twoSumHashMapTwoPass(nums,target));
console.timeEnd("hashMap two pass");

/**
 * Time complexity O(n)
 * Space complexity O(n)
 */

const twoSumHashMapOnePass = (nums,target) => {
    const prevMap = new Map(); 

    for(let i=0; i<nums.length; i++){
        const diff = target - nums[i];
        if(prevMap.has(diff))
                return [prevMap.get(diff),i];
        prevMap.set(nums[i],i);
    }

    return [];
}

console.time("HashMap one pass")
console.log(twoSumHashMapOnePass(nums,target))
console.timeEnd("HashMap one pass");


/**
 * Time complexity O(n)
 * Space complexity O(n)
 */

