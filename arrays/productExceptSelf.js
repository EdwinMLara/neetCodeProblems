/**
 * Given a integer array nums return an array output where output[i]
 * is the product of all the elements of nums except nums[i]
 * 
 * The solution to this problem could be relatively easy just getting the product 
 * of the whole array and dividing the result by the the value of the index array.
 * However, the problem has a constraint which does not use the division operator. 
 * So the problem is getting intesresting.
 */

let nums = [3,2,4,6]


/**
 * @param {number []} nums 
 * @returns {number []}
 * 
 * One way to solve is to use the prefix and suffix values array. The result is equal 
 * to the producto of the values from the prefix and suffix array. To get a better understanding 
 * of the idea i'm going to show an example below.
 * 
 * the input array is [1,2,3,6] but to get the prefix array we need to simulate that the array 
 * has a number 1 before, since the prefis array is composed of the multiplications of the previous
 * values to its index and it looks like shows next
 * 
 * 1 [1,2,4,6] the prefix array is like [1,2,8,48]
 * 
 * now to get the suffix array now we going to put a number 1 after the array and we
 * iterate the array backwards
 * 
 * [1,2,4,6] 1 the suffix array is like [6,24,48,48]
 * 
 * Finally to get the result values we need to multiply the values before and after of each
 * index position for example 
 * res[0] = 1 * suffix[1] 
 * res[0] = 2;
 * 
 * and 
 * re
 * 
 * res[1] = prefix[0] * suffix[2]
 * res[1] = 24
 * 
 * and so on   
 */
const productExceptSelf = (nums) =>{
    const n = nums.length;
    const res = new Array(n)
    const pref = new Array(n)
    const posf = new Array(n);

    let prev = 1;
    for(let i=0;i<n;i++){
        pref[i] = nums[i] * prev;
        prev= pref[i];
    }
    let post = 1;
    for(let i=n-1; i >= 0; i--){
        posf[i] = nums[i] * post;
        post = posf[i]
    }
    prev = 1, post = 1;
    for(let i=0;i<n-1;i++){
        res[i] = prev*posf[i+1]
        prev = pref[i];
    }
    res[n-1]=pref[n-2]*post;
    return res;
}

/**
 * Time complexity O(n)
 * Space complexity O(n)
 */

console.time("productExceptSelf");
console.log(productExceptSelf(nums));
console.timeEnd("productExceptSelf");
console.log("=========================")

/**
 * 
 * @param {number []} nums 
 * @returns {number []}
 * Now we gonna try to do it without using the array space just in one pass
 */
const productExceptSelfOptimal = (nums) =>{
    const n = nums.length;
    const res = new Array(n).fill(1);

    let prev = 1;
    for(let i=1;i<=n;i++){
        res[i-1] = prev*nums[i-1]
        prev= res[i-1];
    }
    let post = 1;
    for(let i=n-1; i >= 0; i--){
        pref = i > 0 ? res[i-1] : 1 
        res[i] = post*pref;
        suff = post*nums[i];
        post=suff;
    }
    console.log(res);
}

console.time("seldOptimal")
productExceptSelfOptimal(nums);
console.timeEnd("seldOptimal")
console.log("===================================");

/**
 * 
 * @param {number []} nums
 * 
 * One interesting thing about this approach that i dont realiza is that there is not 
 * need to calculate the last value for the prefix values. On the order hand, for the suffix
 * the first value is not needed 
 */

const productSolutionNeetCode = (nums) =>{
    const n = nums.length;
    const res = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    console.log(res);
    
    let postfix = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }
    console.log(res);
}

console.time("neetCode")
productSolutionNeetCode(nums);
console.timeEnd("neetCode")
