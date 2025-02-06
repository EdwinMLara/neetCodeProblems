/**
 * You are given an integer n. return all well-formed parentheses string that you can generate with n
 * pairs of parenthesis
 * 
 * Backtracking is a solved-problem algorithm used when it's need to explore multiple choices
 * options and undo them if they lead us to a dead-end.
 * To apply a bracktracking algorithm we need two things: a set of choices and a group of constraints 
 * 
 * In this case, we need to explore all sorts of combinations. The choices are where we can put the
 * parenthesis so that we form a valid string. For example, the string could be "()" an open 
 * parenthesis at the first followed by a close parenthesis and what would happened if we swap the 
 * positions perenthesis so we get something like ")(" and this is not a valid string.
 * 
 */

const backtracking = (openN,closeN,n,res,str) =>{
    console.log(str);
    /**
     * Here comes the first constraint, to get a valid string we have to have the same amount 
     * of open an close parenthesis. With the if conditional we are making sure we have the same 
     * amount of open and close parenthesis in addition we verify when we reach the limit of 
     * characters we need to acomplish the objetive. 
     */

    if(openN === closeN && closeN === n){
        res.push(str);
        return
    }

    /**
     * At this point, we check whether the amount of open parenthesis is less than N, where N is 
     * the limit of open and close parenthesis that should be appear in the string, so if the open 
     * parenthesis in the string are minor we make recursivity adding an open parenthesis to the
     * string
     */

    if(openN < n)
        backtracking(openN + 1,closeN, n, res, str + "(" );

    /**
     * At the last verifications point we review of the number of open parenthesis
     * is less than the close. At this case we added to the string a close parenthesis
     * calling the itself function as we said before this is well-known as recursivity.  
     */

    if(closeN < openN){
        backtracking(openN, closeN + 1, n, res, str + ")")
    }

    console.log("=====")
}

const generateParenthesis = (n) =>{
    const res = []
    backtracking(0,0,n,res,'');
    return res;
}

console.log(generateParenthesis(3));