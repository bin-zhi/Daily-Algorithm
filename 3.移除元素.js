// 移除元素
/* 
给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

*/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
  }
  return i
}
// 这道题很简单，也是用到的指针，首先呢哪一个慢指针和快指针同时指向了索引0
// 如果是快指针的值不等于传进来的val的话那么慢指针指向的值就变为了快指针当前执行的值
// 最后索引不等于val的就到了最前面，然后返回 i
