/**
 * 杨辉三角
 *给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 * 示例 1:
 * 输入: numRows = 5
 * 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * * */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let triangle = []

  if (numRows === 0) {
    return triangle
  }

  // 第一行
  triangle.push([1])

  for (let i = 1; i < numRows; i++) {
    // 上一行的数据
    let prevRow = triangle[i - 1]
    // 当前行的数据
    let currRow = []

    // 开头和结尾都是1
    currRow.push(1)

    // 计算中间的数字
    for (let j = 1; j < i; j++) {
      currRow.push(prevRow[j - 1] + prevRow[j])
    }

    // 结尾也是1
    currRow.push(1)

    triangle.push(currRow)
  }

  return triangle
}
