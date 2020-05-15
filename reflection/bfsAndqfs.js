/**
 * https://zhuanlan.zhihu.com/p/24986203
 * 知乎原文
 */

// 深度优先
// 深度优先搜索的步骤分为 1.递归下去 2.回溯上来。顾名思义，深度优先，则是以深度为准则，先一条路走到底，直到达到目标。这里称之为递归下去
let result = [[]]
let used = [[]]
function bfs() {
    // 思考：找树的某个节点
    // 1. 递归往下寻找，找过的和无意义的 直接返回, 找过后 标记 找过, 找到底就回溯，回溯到顶层还没找到 直接返回没找到
}

// 广度优先
// 广度优先搜索较之深度优先搜索之不同在于，深度优先搜索旨在不管有多少条岔路，先一条路走到底，不成功就返回上一个路口然后就选择下一条岔路，而广度优先搜索旨在面临一个路口时，把所有的岔路口都记下来，然后选择其中一个进入，然后将它的分路情况记录下来，然后再返回来进入另外一个岔路，并重复这样的操作
function qfs() {
    // 思考：找到方格的最短路径
    // 1. 发散的每个角度都去寻找
    // 2. 把每个角度的寻找都进行标记
    // 3. 找到底就返回
}
