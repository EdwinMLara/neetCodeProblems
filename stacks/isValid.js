/**
 * You're given a string s consisting of the following characters '(', ')', '{', '}', and '[', ']'
 * 
 * The input string s is valid if and only if
 * 1.- Every open bracket is closet by the same type of close bracket 
 * 2.- Open bracket are closed in the corret order 
 * 3.- Every close bracket has a correponding open bracket of the same type
 * 
 * return true if s is valid string, and false otherwise
 */

let s = "[]"
let s2 = "([{}])"
let s3 = "[(])"

/**
 * 
 * @param {string} s 
 * @returns {boolean}
 * 
 * The simplest way to solve this problem is using the brute force.
 * Let's analyze two examplaes so that we can se what is a correct strig and what is not
 * 
 * Examples #1 s2 = "([{}])"  -------- Correct string
 * This is a correct string because the open and close brackets are in the proper order
 * 
 * Example #2 s3 = "([)]"
 * This one is wrong string as we can see they are not in the correct order because in the middle
 * of te parenthesis, there is a close bracket. To be correct an open bracket is needed before the
 * close one, in addtion, we need another extra next to the close parenthesis.
 * it should be as this: "([()])"
 */

const isValidBruteForce = (s) => {
    /**
     *what we are doing here is searching for patterns, let's focus on the s2 example.
     The while loop will be executed as long as there is a pattern like: curly brakets "{}", 
     brackets "[]" or parentheses.

     At the first iteration we have a string like this "([{}])", so in the middle of the string
     we find a pair of curly brackets "{}" the we get rid of them a the new string looks like "([])".

     Once there are not more patters in the string we verify if the string is empty otherwise
     we return false which means that is not a valid string.
     
     * */    
    while(s.includes("{}") || s.includes("[]") || s.includes("()")){
        s.replace("{}","");
        s.replace("[]","");
        s.replace("()","");
    }
    return s === "";

}

//isValidBruteForce(sTest,10);


/**
 * This approach is a little more complicated,
 * @param {string} s 
 * @returns {boolean}
 */
const isValidStack = (s) => {
    const stack = [];
    /**
     * What we are doing here is using a hash map where the close brackets are the keys and
     * the open brackets are the values 
     */
    const closeToOpen = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }

    /**
     * Here we're going to iterate from all over the string character by character checking if the current
     * character is a close bracket otherwise the character will be stored in a stack.
     * 
     * When the conditional is true we verify if the last value in te stack is equal to the current 
     * character which is an open bracket so if they are equal it wll be taken out from the stack 
     * 
     * With the stack, we are making sure of the order of the brackets once all the open brackets are stored
     * we start to analyze all the closed ones when one of them appear the last in the stack should be the
     * open one otherwise we return false
     * 
     * One interesting thing here is that we are mapping the close ones to the open ones
     */

    for(let c of s ){
        if(closeToOpen[c]){
            if(stack.length > 0 && stack[stack.length-1] === closeToOpen[c])
                stack.pop();
            else
                return false;
        } else
            stack.push(c);
    }

    return stack.length === 0;
}

console.log(isValidStack(s2));
