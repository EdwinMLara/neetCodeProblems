/**
 * Imnplement a time-base key-value data structure that supports 
 *      -- Storing multiple values for the same key at specified time stamps
 *      -- Retrieving the key values at a speciefied timestamp
 * 
 * Implement the TimeMap class:
 * 
 *      -- TimeMap() initialize the object.
 *      -- void set(String key, String value, int timestamp) stores the key (key) with the value (value) at the given time timestamp
 *      -- String get(String key, int timestamp) returns the most recent value of the key if set was previuosly callet on it and the most recent
 *  timestamp fo the key prev_timestamp is less than or equeal to the given timestamp (prev_timestamp <= timestamp). if there are no values, it 
 *  return ""
 * 
 * Note : For all call to set, the timestamps are in strictly incresing order  
 */


/**
 * There are two main things in this problem to be focused. 
 * if there is not a key, so  we return an empty string, besides a key can have multiple  
 * values and these have an timestamp. so when we call the get method if the key exist 
 * we return the most recent value base on the timetamp. but if the timestamp does not exist 
 * we return the last create taking account the timestamp value.  
 */

class TimeMap {
    constructor(){
        this.keyStore = new Map();
    
    
    }

    /**
     * 
     * @param {string} key 
     * @param {string} value 
     * @param {int} timestamp 
     * 
     * here we verify if the key doesn't exist in the map at this case we create a new key-value pair with the key and an empty array
     * once the key is created we added a another array with the value and the timestamp 
     */
    set(key, value,timestamp){
        if(!this.keyStore.has(key))
            this.keyStore.set(key,[]);
        this.keyStore.get(key).push([value,timestamp]);
    }

    /**
     * 
     * @param {string} key 
     * @param {int} timestamp 
     * @returns {string}
     * 
     * here we're appliying a binary search 
     */
    get(key, timestamp){
        const values = this.keyStore.get(key) || [];
        console.log(values);
        let left = 0;
        let right = values.length - 1;
        let result = "";
 
        while(left <= right){
            let mid = Math.floor((left + right)/2);
            console.log(mid);
            /**
             * any value that is less than the timestamp is taking as valid result. 
             * but we need to keep running the loop just in case there is another value 
             * with a bigger timestamp. this is because we are applying a binary search so when we reduce the search space 
             * there is a posibility that we can jump a valid value
             */
            if(values[mid][1] <= timestamp){
                result = values[mid][0];
                left = mid + 1;
            }else
                right = mid - 1;
        }

        return result;
    }
}

const timeMap = new TimeMap();
timeMap.set("alice", "happy", 1);
timeMap.set("alice", "sad", 3);



console.log(timeMap.get("alice",3))