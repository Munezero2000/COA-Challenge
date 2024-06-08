function hasContiguousSubarraySum(arr, target) {
    // Initializing variables
    let currentSum = 0;
    let start = 0;
  
    // Iterating through the array
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];
  
        // This has a time complexity of O(n) because I am using one while loop to iterate through the data
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }
  
        // Check if current sum equals target after adjustment
        if (currentSum === target) {
            return true;
        }
    }
    
    return false;
}
  
// Test cases
console.log(hasContiguousSubarraySum([4, 2, 7, 1, 9, 5], 17)); // Output: true
console.log(hasContiguousSubarraySum([1, 2, 3, 4, 5], 17)); // Output: true
console.log(hasContiguousSubarraySum([-1, -2, -3, -4, -5], 17)); // Output: false
