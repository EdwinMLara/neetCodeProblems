/**
 * You're given an array m x n 2-D integet array matrix and an integer target 
 *  1.- Each row in matrix is sorted in non-decreasing order 
 *  2.- The First integer of every row is grather than the last integer of the previous row
 * 
 * Return true if target exists within matrix or false otherwise
 * 
 * Can you write a solution that runs in O(log(m * n))
*/

const search = require('./search');

let matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]];
let target = 10;


/**
 * What are doing here is getting each row in the matrix and applaying a 
 * binary search to each one this is a solution that runs in O(n*log(m))
 * 
 * This is not what we looking for later we are going to try another approach
 * 
 * @param {number[][]} matrix 
 * @param {number} target 
 * @returns 
 */
const searchMatrix = (matrix, target) => {
    for(let i=0;i<matrix.length;i++){
        let auxSearch = search(matrix[i],target);
        if(auxSearch !== -1 && target === matrix[i][auxSearch])
            return true;
    }
    return false;
}

console.log(searchMatrix(matrix,target))