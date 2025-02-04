/**
 * Given an integer array nums, return all the triplets [nims[i], nums[j], nums[k]]
 * where nums[i] + nums[j] + nums[k] == 0, and the indices i,j y k are all distinct 
 * 
 * the output should not contain any duplicate triplets. you may return the output and
 * triplets in any order
 */

let nums = [-1,0,1,2,-1,-4,-5,5,2,1,3,4]

/**
 * One important thing about this problem is that the outcome won't have any duplicates
 * what it means we need to focus on the indices array. For example, let's analyze the next
 * array [-1, 0, 1, 2, -1, -4].
 * In this case, one combination could be [-1,0,1] and their indices values are [0,1,2],
 * and another combination is [0,1,-1] and the indices are [2,1,0]. However, the seem different
 * but are the triplet. Their indices are the same in distinct order though.
 * 
 * @param {interger []} nums 
 * @returns 
 * 
 */

const threeSum = (nums) =>{
    /**
     * To solve the problem of repeating indices the input array is 
     * sorted in an increasing way
     */
    nums.sort((a,b) => a -b);
    let res = [];
    let resInd = [];
    /**
     * With the for loop, we're going to get through for all over array
     * starting with the lowest value 
     */
    for(let i=0;i<nums.length;i++){

        /**
         * The first thing to check is i f the value es bigger than 0, since in this case there
         * is no way to get a set of values whose sum is equal to 0 
         */
        if(nums[i] > 0)
            break;
        /**This conditional helps to avoid repeated values */
        if(i > 0 && nums[i] === nums[i-1])
            continue;
        /**
         * Using the current value in the array, we will make a two-dot search starting with the left
         * reference at the current position plus one and the right with the last index.
         */
        let l = i + 1;
        let r = nums.length - 1;

        /**
         * We get the sum of the current values and varify if the sum is bigger than 0, we decrement 
         * the right position in one, otherwise if the sum is smaller than =, we increment the left position
         * in one too.
         * Now if none of the past conditions are succesful it means that the sum is 0, So an array with 
         * the values is added to the array result. Once the values are store the left and right position are
         * moved to the next values.Finally, we carry moving on until find a new value on the left.
         */
        while(l < r){
            const sum = nums[i] + nums[l] + nums[r];
            if(sum > 0)
                r--;
            else if (sum < 0)
                l++;
            else{
                res.push([nums[i],nums[l],nums[r]]);
                resInd.push([i,l,r]);
                l++;
                r--;
                while(l < r && nums[l] === nums[l-1])
                    l++;
            } 
        }
    }
    return res
}

console.log(threeSum(nums))