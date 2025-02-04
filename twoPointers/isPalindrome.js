/**
 * Given an string s, return true if it is a palindrome, otherwise return false.
 * 
 * a palindrome is a string that reads the same forward and backwards. it is also
 * case-insensitive and ignores all non-alphanumeric characters.
 */

let s = "Was it a car or a cat I saw?"
let s2 = "tab a cat";

/**
 * This funciton is used to know if the character is alphanumeric
 */
const isAlfanimeric = (c) => {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')
}

/**
 * 
 * @param {*} string 
 * @returns boolean
 * 
 * in this approach, we analyze each character to determine if it is
 * alphanumeric if the conditional is true the character will be turned into a 
 * lowercase and storage in a new string
 */
const isPalindrome = (string) =>{
    let newString = ''
    for(let c of string){
        if(isAlfanimeric(c))
            newString += c.toLowerCase();
    }

    /**
     * With the spread operator, we will create a new array where each character is a value in the array.
     * The reverse method is going to help us to invert the array now the last value will be the first
     * one. Finally, with the join method and the empty string as parameter, it will return a string 
     * at this point just left to check if the new string is equal to the input string.
     */
    let reversedString = [...newString].reverse().join('');
    return newString === reversedString;
}

/**
 * Time complexity O(n)
 * Space complexity O(n)
 */

console.time("isPalindrome")
console.log(isPalindrome(s));
console.timeEnd("isPalindrome");

/**
 * 
 * @param {*} s 
 * @returns 
 * this approach is cheaper in time complexity
 * 
 * here we're going to use two points of reference the first and last index
 * and we will get trought the array from the first and last index at the same time.
 */

const isPalindromeTwoPointers = (s) => {
    console.log(s);
    let l = 0 , r = s.length -1;

    /**
     * The loop will be keeping run until the last and first values are the same.
     * Inside of the first, there are two more loops, the first one checks if the left values
     * are not alphanumeric and it will continue until it find and alphanumeric, the second loop
     * does the same but with the right values
     */

    while(l<r){
        while((l < r) && !isAlfanimeric(s[l]))
            l++;
        while( (r > l) && !isAlfanimeric(s[r]))
            r--;

        /**
         * Once we make sure the values right and left are alphanumeric we verify that both are equal 
         * otherwise the function will return false wich implies isn't a palindrome
         */

        if(s[l].toLowerCase() !== s[r].toLowerCase())
            return false
        l++;
        r--;
    }
    return true;
}

console.time("isPalindromeTwoPointers")
console.log(isPalindromeTwoPointers(s))
console.timeEnd("isPalindromeTwoPointers")

/**
 * Time complexity O(n)
 * Space complexity O(1)
 */