/* 
Q1. Kth Smallest Element

Problem Description
Find the Bth smallest element in given array A .

NOTE: Users should try to solve it in less than equal to B swaps.



Problem Constraints
1 <= |A| <= 100000

1 <= B <= min(|A|, 500)

1 <= A[i] <= 109



Input Format
The first argument is an integer array A.

The second argument is integer B.



Output Format
Return the Bth smallest element in given array.



Example Input
Input 1:

A = [2, 1, 4, 3, 2]
B = 3
Input 2:

A = [1, 2]
B = 2


Example Output
Output 1:

 2
Output 2:

 2


Example Explanation
Explanation 1:

 3rd element after sorting is 2.
Explanation 2:

 2nd element after sorting is 2.

*/

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  kthsmallest: function (A, B) {
    for (let i = 0; i < B; i++) {
      let index = i;

      for (let j = i + 1; j < A.length; j++) {
        if (A[j] < A[index]) {
          index = j;
        }
      }

      [A[i], A[index]] = [A[index], A[i]];
    }

    return A[B - 1];
  },
};
