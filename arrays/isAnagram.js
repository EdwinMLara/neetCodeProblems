/**
 * Given two strings s and t return true if the two strings are anagrams
 * of each other, otherwise return false 
 * 
 * An anagram is an string that contains the exact same characters as another 
 * string, but the order of the characters can be different
 * 
 * @param {string} s 
 * @param {string} t 
 * @returns {boolean}
 * 
 * 
 * Constrainst
 * s and t consist of lowercase English letters
 */

const isAnagramSorting = (s,t) => {
    if(s.length !== t.length)
        return false;

    let sortS = s.split("").sort().join()
    let sortT = t.split("").sort().join()

    return sortS === sortT;
}


let s = "racecar"
let t = "carrace"


console.time("Sorting")
console.log(isAnagramSorting(s,t));
console.timeEnd("Sorting")

/**the time complexity of a sorting algorithm is O(nlogn)
 * Time complexity O(nlogn + mlogm)
 * Space complexity is O(1) or O(n+m) depending of sorting algorithm 
 * n and m are the length of string
 */

const isAnagramHashTable = (s,t) =>{
    if(s.length !== t.length)
        return false;
    
    const countS = {}
    const countT = {}

    for(let i=0; i < s.length ; i++){
        countS[s[i]] = ( countS[s[i]] || 0) + 1;
        countT[t[i]] = ( countT[t[i]] || 0) + 1;
    }

    console.log(countS);
    console.log(countT);

    for(const key in countS){
        if(countS[key] !== countT[key])
            return false 
    }

    return true;
}

console.time("HashTable");
console.log(isAnagramHashTable(s,t));
console.timeEnd("HashTable");

/**
 * Time complexity O(n + m)
 * space complexity O(1) since we have at most 26 characters 
 */

const isAnagramHashTableOptimal = (s,t) => {
    if(s.length !== t.length)
        return false
    
    const count = new Array(26).fill(0);

    for(let i=0; i<s.length ; i++){
        count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    return count.every(val => val === 0)
}

console.time("HashTable Optimal")
console.log(isAnagramHashTableOptimal(s,t));
console.timeEnd("HashTable Optimal");