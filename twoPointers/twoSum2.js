/**
 * Given an array of integers numbers that is sorted in no-decreasing order
 * retunr the indeces of two numbers,[index1, index2] such that they add up to a given number target 
 * and the index1 < index2. Note that index1 and index2 cannot be equeal, thefore you may not use the
 * same element
 * 
 * there will always be exactly one valid solution
 */

let numbers = [1,2,3,4];
let target = 3
const twoSum = (numbers,target) =>{
    let size = numbers.length
    for(let i=0; i<size; i++){
        let l = i + 1;
        let r = size - 1;
        let tmp = target - numbers[i];
        while(l<=r){
            let mid = 1 + Math.floor((r-l)/2);
            if(numbers[mid] === tmp)
                return [i+1,mid+1]
            else if(numbers[mid] < tmp)
                l = mid + 1;
            else
                r = mid - 1;
        }
    }
    return [];
}

console.time("binarySearch")
console.log(twoSum(numbers,target));
console.timeEnd("binarySearch")

/**
 * time complexity O(nlogn)
 * space complexity O(1)
 */

const twoSum2TwoPointers = (numbers, target) => {
    let l=0;
    let r=numbers.length - 1;

    while(l<r){
        const sum = numbers[l] + numbers[r];

        if(sum > target)
            r--;
        else if(sum < target)
            l++;
        else
            return [l+1,r+1];
    }
    return [];
}

console.time("twoSum2TwoPointers")
console.log(twoSum2TwoPointers(numbers,target));
console.timeEnd("twoSum2TwoPointers");