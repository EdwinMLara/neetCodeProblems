/**
 * Desing an algorithm to encode a list of strings to a single string.
 * The encode string is then decoded back to the original list of strings
 */

let strs = ["neet","code","love","you"];
let strs2 = [""];
let strs3 =["we","say",":","yes","!@#$%^&*()"];
let strs4 = [];

const encode = (strs) => {
    if(strs.length === 0) return ""
    let res = ""

    for (let str of strs){
        res += str.length + "#" + str
    }

    return res;

}

const decode = (str) =>{
    if (str.length === 0) return []
    let res = [], i =0;
    let j = i;
    while(i < str.length){    
        if(str[i] === '#' ){
            let length = str.substr(j,i);
            let size = parseInt(length)
            res.push(str.substr(i+1,size));
            i = i + size + 1;
            j = i ;
        }else{
            i++;
        }
    }
    return res;
}

console.log(encode(strs4))
console.log(decode(encode(strs4)));