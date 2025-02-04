/**
 * Given an integer array nums and an integer k, return the k most 
 * frequent elements within the array 
 */

let nums = [1,2,2,2,3,3,3], k = 2;
const topKFrecuent = (nums, k) => {
    const count = {}
    /**
     * First, we need to create a hashmap with the number as the key 
     * and its frecuency as a value. 
     */
    for (const num of nums){
        count[num] = (count[num] || 0 ) + 1;
    }

    /**
     * the second step is to order the hashmap in a descending way. To
     * apply a sort algorithm we need an array therefore we have to turn hashmap into 
     * an array. Finally, we make a sub-array with the only top k frecuent values which can 
     * be easily obtain just by dividing the ordered array from the start to the k values  
     */

    let array = Object.entries(count);
    
    array.sort((a,b) => b[1] - a[1]);

    return array.slice(0,k).map(pair => parseInt(pair[0]))
}

console.time("topKFrecuentSorting");
console.log(topKFrecuent(nums, k));
console.timeEnd("topKFrecuentSorting");

/**
 * Time complexity O(nlogn)
 * Space complexity O(n);
 */


const topKFrecuentBucketSort = (nums,k) => {
    /**
     * This approach is much better than the sorting approach. To get it,
     * we need to apply the bucket sort algorithm.
     * 
     *  we create an array with the length of the num's array plus one because 
     * there is not a number with a frecuency 0. The array will be used as a bucket where 
     * the index is the frecuency with the number appearing in the array.
     */
    const count = {};
    const freq = Array.from({length: nums.length + 1}, ()=>[])
    
    /*its haspmap with the frequency of numbers in the array */
    for(const n of nums){
        count[n] = (count[n] || 0) + 1;
    }


    /**
     * Here we going to iterate the hashmap where we will push every key in the respective 
     * index based on the frequency value
     */
    for(let c in count){
        freq[count[c]].push(parseInt(c));
    }

    const res = []

    /**
     * here we going to iterate backwards over the frequency array to get the top k numbers
     */
    for(let i = freq.length-1; i > 0; i--){
        for(let n of freq[i]){
            res.push(n)
            if(res.length === k)
                return res;
        }
    }
}

console.time("topKFrecuentBucketSort")
console.log(topKFrecuentBucketSort(nums,k));
console.timeEnd("topKFrecuentBucketSort");
