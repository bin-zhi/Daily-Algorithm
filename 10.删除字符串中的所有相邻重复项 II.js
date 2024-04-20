// 给你一个字符串 s，「k 倍重复项删除操作」将会从 s 中选择 k 个相邻且相等的字母，并删除它们，使被删去的字符串的左侧和右侧连在一起。

//你需要对 s 重复进行无限次这样的删除操作，直到无法继续为止。

//在执行完所有删除操作后，返回最终得到的字符串。

// 本题答案保证唯一。
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const stack = [] // 使用栈来存储字符及其出现次数
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (stack.length && stack[stack.length - 1][0] === char) {
      stack[stack.length - 1][1]++ // 增加字符出现次数
      if (stack[stack.length - 1][1] === k) {
        stack.pop() // 如果达到 k 次，则删除字符
      }
    } else {
      stack.push([char, 1]) // 将字符加入栈中，并记录出现次数为 1
    }
  }

  let result = ''
  // 从栈中构建最终字符串
  for (let i = 0; i < stack.length; i++) {
    const [char, count] = stack[i]
    result += char.repeat(count)
  }

  // 如果最终字符串与原字符串相同，则返回结果，否则继续递归调用直到无法再删除为止
  return result.length === s.length ? result : removeDuplicates(result, k)
}
