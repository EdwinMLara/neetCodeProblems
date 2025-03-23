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

class TimeMap {
    constructor(){
        this.keyStore = new Map();
    }

    set(key, value,timestamp){
        if(!this.keyStore.has(key))
            this.keyStore.set(key,[]);
        this.keyStore.get(key).push([value,timestamp]);
    }

    get(key, timestamp){
        const values = this.keyStore.get(key) || [];
        console.log(values);
        let left = 0;
        let right = values.length - 1;
        let result = "";
 
        while(left <= right){
            let mid = Math.floor((left + right)/2);
            console.log(mid);
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