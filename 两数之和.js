// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target
// 的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// 示例 1：

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// 示例 2：

// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
// 示例 3：

// 输入：nums = [3,3], target = 6
// 输出：[0,1]

// 提示：

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// 只会存在一个有效答案

const woSum = (nums, target) => {
  // 创建一个空对象
  const number = {}
  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    // 让总合减去当前值 拿到差值
    let tag = target - nums[i]
    // 如果当前对象内存在这个属性则直接返回说明有与当前值相加为target的数字
    if (number.hasOwnProperty(tag)) {
      return [number[tag], i]
    } else {
      // 如果没有就添入到对象内
      number[nums[i]] = i
    }
  }
}
