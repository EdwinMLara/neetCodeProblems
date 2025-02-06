/**
 * There are n cars traveling to the same destination on a one-lane highway.
 * you are given two arrays of integers positions and speed, both of length n.
 *      position[i] is the position of the ith car (in miles)
 *      speed[i] is the speed of the ith car (in miles per hour)
 * the destination is at position target miles 
 * 
 * A car can not pass another car ahead of it. it can only catch up to another car and then drive at the 
 * same speed as the car ahead of it.
 * 
 * A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also
 * considered a car fleet 
 * 
 * if a car catches up to car fleet the moment the fleet reaches the destination, then the car is considered 
 * to be part of the fleet 
 * 
 * return the number of different car fleets that will arrive at the destination
 */

let position = [1, 4];
let speed = [3, 2];

let position2 = [4,1,0,7];
let speed2 = [2,2,1,1];

let position3 = [10,8,0,5,3];
let speed3 = [2,4,1,1,3];

/**As always i said, the most important thing is to understand the problem and analyze the constraints.
 * A car fleet is group of cars that get to the same destination one after another.
 * 
 * One contraint tells us that any car can pass another ahead of it, if someone behind is faster, it have
 * to slow down and carry on at the same speed that it comes ahead of it. Taking into account this constraint
 * we need to sort the position array with the closer to the target in the first position 
 */

const carFleet = (target, position, speed) =>{
    let combinations = [];
    let res = 1;
    /**
     * TO not miss the correponding speed to the position we need to merge the arrays 
     */
    for(let i=0; i<position.length; i++){
        combinations.push([position[i],speed[i]]);
    }

    /**
     * Once the array is ordered we calculate the time that takes to the car to get to the target 
     * if the time is lower it means that it goes faster so at any moment it goin to reach the one ahead.
     * So any with a minor time is going to join to the car fleet, Once we find someone that goes slowly
     * a new car fleet start
     */
    combinations.sort((a,b)=> b[0] - a[0])
    let t1 = (target - combinations[0][0]) / combinations[0][1];
    for(let i=0;i<combinations.length;i++){
        let t2 = (target - combinations[i][0])/combinations[i][1];
        if(t1 < t2){
            res++;
            t1 = t2;
        }
    }
    return res;
}

let target = 10;
let target3 = 12;

console.log("res ",carFleet(target3, position3, speed3));

console.log("===========================")

const carFleetStack = (target,position,speed) => {
    let pair = position.map((p, i) => [p, speed[i]]);
    pair.sort((a, b) => b[0] - a[0]);
    let stack = [];
    for (let [p, s] of pair) {
        let time = (target - p) / s
        stack.push(time);
        if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop()
        }
    }
    return stack.length;
} 

console.log("res2 ", carFleetStack(target3,position3,speed3));

