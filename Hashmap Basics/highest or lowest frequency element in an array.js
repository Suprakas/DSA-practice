/*
Find the highest/lowest frequency element
Problem Statement: Problem Statement: Given an array of size N. Find the highest and lowest frequency element.
*/

class FrequencyCounter {
    Frequency(arr) {
        const freqMap = new Map(); // Stores element -> frequency

        // Count the frequencies
        for (let num of arr) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1); // Increment frequency count for the number
        }

        let maxFreq = 0, minFreq = arr.length;
        let maxEle = 0, minEle = 0;

        // Iterate through map to find max and min frequency elements
        for (let [element, count] of freqMap.entries()) {
            if (count > maxFreq) { 
                maxFreq = count; 
                maxEle = element;
            }

            if (count < minFreq) {
                minFreq = count;
                minEle = element;
            }
        }

        // Print results
        console.log("The highest frequency element is:", maxEle);
        console.log("The lowest frequency element is:", minEle);
    }
}

// Create an instance and test
const fc = new FrequencyCounter();
const arr = [10, 5, 10, 15, 10, 5];
fc.Frequency(arr);
