/**
 * You are given an integer array piles where pile[i] is the number of bananas in the ith pile.
 * You also given an integer h, which represents the number of hours you have to eat all the bananas
 * 
 * You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas 
 * and eats k bananas that pile. if the pile has less than k bananas, you may finish eating the pile but 
 * you cannot eat from another pile in the same hour.
 * 
 * return the minumum integer k such that you can eat all the bananas within h hours 
 */

let piles = [1,4,3,2]
let h = 9;

let piles2 = [25,10,23,4];
let h2 = 4;

let piles3=[3,6,7,11];
let h3=8;

let piles4 = [873375536,395271806,617254718,970525912,634754347,824202576,694181619,20191396,886462834,442389139,572655464,438946009,791566709,776244944,694340852,419438893,784015530,588954527,282060288,269101141,499386849,846936808,92389214,385055341,56742915,803341674,837907634,728867715,20958651,167651719,345626668,701905050,932332403,572486583,603363649,967330688,484233747,859566856,446838995,375409782,220949961,72860128,998899684,615754807,383344277,36322529,154308670,335291837,927055440,28020467,558059248,999492426,991026255,30205761,884639109,61689648,742973721,395173120,38459914,705636911,30019578,968014413,126489328,738983100,793184186,871576545,768870427,955396670,328003949,786890382,450361695,994581348,158169007,309034664,388541713,142633427,390169457,161995664,906356894,379954831,448138536];
let h4 = 943223529;

/**Here we are doing a kind of binary search. In a binary search, we divide the array by 2 do depending
 * on the coditional we move to the right or left and continue searching from there ahead since forward or
 * backward. In this case, we're not iterating over the array we use the maximum value in the array
 * 
 * let's analyze the first example 
 * piles = [1,4,3,2] , h =9
 * In this example, we have a 4 as the maximum bananas-eating-rate 4. why?if we use 4 as k to Koko takes 
 * only 4 hours to eat all the banana piles and this is less than 9 but what we are looking for here is the
 * minumum rate and takes fewer hours than the problem allows us
 */

const minEatingSpeed = (piles,h) => {
    let l = 1;
    /**Getting the maximun value in the array */
    let r = Math.max(...piles); 
    let result = r
    /**Here we are simulating that we have a array where the fist value es 1 and the last one is the maximun 
     * value in the array with an increment by 1
    */
    while(l<=r){
        let k = Math.floor((r+l)/2);

        let horas = 0;
        for(let i = 0; i < piles.length ; i++){
            horas += Math.ceil(piles[i]/k);
        }

        if(horas <= h){
            result = k
            r = k - 1;
        }else
            l = k + 1;
    }

    return result;
}

console.log(minEatingSpeed(piles4,h4));