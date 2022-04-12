class Solution {
    public int minProductSum(int[] nums1, int[] nums2) {
        int ans = 0;
        // Sort nums1 and nums2 in ascending order.
        Arrays.sort(nums2);
        Arrays.sort(nums1);
        
        int i = 0;
        int j = nums2.length-1;
        // Iterate over two sorted arrays and calculate the 
        // cumulative product sum.        
        while(i < nums1.length && j >= 0)
        {
            ans += nums1[i] * nums2[j];
            i++;
            j--;
        }
        
        return ans;
    }
}
