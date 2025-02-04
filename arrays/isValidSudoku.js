const board = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]];

 const isValidSudoku = (board) => {
    const rows = new Map();
    const cols = new Map();
    const squares = new Map();
    
    for(let r =  0 ; r < 9; r++){
        for(let c = 0; c < 9 ; c++){
            if(board[r][c] === '.')
                continue;

            const squaresKey = `${Math.floor(r/3)},${Math.floor(c/3)}`;

            if( (rows.get(r) && rows.get(r).has(board[r][c])) ||
                (cols.get(c) && cols.get(c).has(board[r][c])) ||
                (squares.get(squaresKey) && squares.get(squaresKey).has(board[r][c]))){
                    return false;
                }

            if(!rows.has(r))
                rows.set(r,new Set());
            if(!cols.has(c))
                cols.set(c,new Set());
            if(!squares.has(squaresKey))
                squares.set(squaresKey,new Set());

            rows.get(r).add(board[r][c]);
            cols.get(c).add(board[r][c]);
            squares.get(squaresKey).add(board[r][c]);
        }
    } 

    return true;
 }

/* console.time("isValidSudoku");
 console.log(isValidSudoku(board));
 console.timeEnd("isValidSudoku");*/

 /**
  * Time complexity O(n^2)
  * Space complexity O(n^2)
  */

 let aux = '1' - '1';
 console.log(1 << aux);