// 某班级学号记录系统发生错乱，原整数学号序列 [0,1,2,3,4,...] 分隔符丢失后变为 01234... 的字符序列。请实现一个函数返回该字符序列中的第 k 位数字。
function findKthDigit(k) {
  let digitCount = 1 // 初始化为个位数
  let numbersCount = 9 // 一位数有9个数字
  let startNumber = 1 // 起始数字为1

  // 计算第 k 位数字所在的数字范围和位数
  while (k > digitCount * numbersCount) {
    k -= digitCount * numbersCount
    digitCount++ // 位数加1
    numbersCount *= 10 // 数字范围扩大10倍
    startNumber *= 10 // 起始数字也扩大10倍
  }

  // 确定第 k 位数字所在的数字
  let targetNumber = startNumber + Math.floor((k - 1) / digitCount)

  // 确定第 k 位数字在该数字中的位置
  let remainder = (k - 1) % digitCount

  // 将数字转换为字符串，然后返回第 k 位数字
  return parseInt(targetNumber.toString()[remainder])
}
