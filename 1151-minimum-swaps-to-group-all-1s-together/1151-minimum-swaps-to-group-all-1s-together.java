class Solution {
    public int minSwaps(int[] data) {
        int numOfOnes = 0;
        for(int num : data) {
            if(num == 1) {
                numOfOnes++;
            }
        }
        
        int slow = 0, fast = 0, counter = 0, max = 0;   // max # of 1s in current window
        while(fast < data.length) {
            while(fast < data.length && fast - slow < numOfOnes) {  // window size of numOfOnes
                if(data[fast++] == 1) {
                    counter++;
                }
            }
            max = Math.max(max, counter);
            if(fast == data.length) {
                break;
            }
            
            if(data[slow++] == 1) {
                counter--;
            }
        }
        return numOfOnes - max;
    }
}