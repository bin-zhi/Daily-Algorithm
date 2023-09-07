// 搜索插入位置
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。
// nums 为 无重复元素 的 升序 排列数组
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 第一种：时间：52ms 内存：40.08MB
  // const a = nums.findIndex((item) => item >= target)
  // return a != -1 ? a : nums.length
  // 第二种:时间：60ms 内存：40.12MB
  for (i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i
    }
  }
  return nums.length
}
