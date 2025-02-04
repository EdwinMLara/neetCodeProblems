const hasDuplicatesBruteForce = (nums) => {
    let length = nums.length                //O(1)
    for(let i=0;i<length;i++){              //O(n)
        for(let j=1;j<nums.length;j++){     //O(n) 
            if(nums[i] ===  nums[j])        //O(1)
                return true;
        } 
    }
    return false;
}

/**
 * This approach is using brute force
 * Time complexity: O(n^2)
 * space complexity: O(1)
 */

let nums = [1,2,3,1];

console.time("Brute force");
hasDuplicatesBruteForce(nums) ? console.log("dulicates") : console.log("no duplicates");
console.timeEnd("Brute force");


const hasDuplicatesSorting = (nums) => {
    let length = nums.length;
    nums.sort((a,b) => a -b);
    for(let i=1; i<length ; i++){
        if(nums[i] === nums[i-1])
            return true;
    }
    return false;
}

/**
 * The second approach is with sorting the array before check if a dulicate number exist
 * time complexity O(nlogn)
 * space complexity O(n)
 * 
 */

console.time("Sorting")
hasDuplicatesSorting(nums) ? console.log("dulicates") : console.log("no duplicates");
console.timeEnd("Sorting");


const hasDuplicatesHashSet = (nums) => {
    let set = new Set(nums);
    return set.size < nums.length
}

/**
 * this approach is using the hashset
 * the main feature of the hash set is it not allowed the duplicate values 
 * so if there are duplicate values the size of the hash set should be smaller than the length of the array
 * time complexity = O(n)
 * space complexity = O(n) 
 */

console.time("Hashset")
hasDuplicatesHashSet(nums) ? console.log("duplicates") : console.log("no duplicates");
console.timeEnd("Hashset")