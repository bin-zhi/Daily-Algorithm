//现有一台饮水机，可以制备冷水、温水和热水。每秒钟，可以装满 2 杯 不同 类型的水或者 1 杯任意类型的水。

//给你一个下标从 0 开始、长度为 3 的整数数组 amount ，其中 amount[0]、amount[1] 和 amount[2] 分别表示需要装满冷水、温水和热水的杯子数量。返回装满所有杯子所需的 最少 秒数。

/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
  // 将数组从小到大排序
  amount.sort((a, b) => a - b)
  let seconds = 0

  // 当至少有两种杯子的数量大于0时，尽量每次减两个
  while (amount[1] > 0) {
    // 每次从数量最多的两个类别中各取一杯
    amount[2]--
    amount[1]--
    // 重新排序，确保数组是有序的
    amount.sort((a, b) => a - b)
    // 计时器增加
    seconds++
  }

  // 最后可能剩下单一类型的杯子，直接加上它的数量
  seconds += amount[2]

  return seconds
}
