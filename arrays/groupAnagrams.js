/**
 * Given an array of string strs, group all anagrams together into sublist.
 * you may return the output in any order 
 */

const strs = ["act","pots","tops","cat","stop","hat"];

const groupAnagrams = (strs) => {
    const res = {}
    /**
     * Every string in the array strings must be sorted, just after, we need to 
     * verify if there is a key on the hashmap with the string ordered, if it does not exits 
     * we create one with a empty array, and the string should be pushed to the array 
     * Finally, return the values in the object ar hashmap
     */

    for (let str of strs){
        const sortedS = str.split('').sort().join('');
        if(!res[sortedS]){
            res[sortedS] = [];
        }
        res[sortedS].push(str);
    }
    return Object.values(res)
}

console.time("groupAnagramsSorting");
console.log(groupAnagrams(strs));
console.timeEnd("groupAnagramsSorting");

/**
 * Time complexity O(m*nlogn)
 * Space complexity O(m*n)
 * where m is the number of stringd and n is the length of the longest string
 */ 

const groupAnagramJustHasMap = (strs) =>{
    const res = {}
    /**
     * An array with 26 elements filled with zeros is initialized. the array size is due to 
     * the English alphabet only having 26 letters. For each string in the array, a key will be 
     * created based on the voted array.  it adds to 1 every time the same letter appears, 
     * to know the index array that will increment the char-code is used we can map the 
     * index's array by subtracting the character in the string minus the char-code of the
     * character a
     */
    for(let str of strs){
        const count = new Array(26).fill(0);

        for(let c of str)
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;

        const key = count.join(',');

        !res[key] ? res[key] = [] : null
        res[key].push(str)
    }
    return Object.values(res);
}

console.time("groupAnagramHashMap")
console.log(groupAnagramJustHasMap(strs));
console.timeEnd("groupAnagramHashMap");