//https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree
  // Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }

var maxLevelSum = function(root) {
  var queue = [root];
  var childQueue = [];
  level = 1;
  resultLevel = 1;

  sum = null;
  maxSum = null;
  while(queue.length != 0 || childQueue.length != 0){
    if(queue.length == 0){
      queue = childQueue;
      childQueue = [];
      if(maxSum < sum){
        maxSum = sum;
        resultLevel = level;
      }

      sum = null;
      level++;
    }

    nodeToProcess = queue.shift(); // This would be better with a ring structure in an array, is the cause of performance delay.
    sum = (sum == null) ? nodeToProcess.val : sum + nodeToProcess.val

    leftChild = nodeToProcess.left;
    rightChild = nodeToProcess.right;

    if(leftChild != null) childQueue.push(leftChild);
    if(rightChild != null) childQueue.push(rightChild);
  }

  if(maxSum < sum){
    return level;
  } else {
    return resultLevel
  }
};

var a = new TreeNode(1);
var b = new TreeNode(7);
var c = new TreeNode(0);
var d = new TreeNode(7);
var e = new TreeNode(-8);

a.left = b;
a.right = c;
b.left = d;
b.right = e;

console.log(maxLevelSum(a));
