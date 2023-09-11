// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 拿到数组得长度
  const n = digits.length
  //  从最后一位开始变量
  for (let i = n - 1; i >= 0; --i) {
    // 如果不等于9进入判断
    if (digits[i] !== 9) {
      // 当前位加一
      ++digits[i]
      // 当前为后面得全变为0
      for (let j = i + 1; j < n; ++j) {
        digits[j] = 0
      }
      // 返回出去
      return digits
    }
  }

  // digits 中所有的元素均为 9
  const ans = new Array(n + 1).fill(0)
  ans[0] = 1
  return ans
}
