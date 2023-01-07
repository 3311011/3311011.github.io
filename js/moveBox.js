function moveBox() {  // 定义一个名为 "moveBox" 的函数
  var box = document.getElementById("box");  // 获取名为 "box" 的方块
  var pos = 0;  // 定义一个变量 "pos" 并初始化为 0
  var id = setInterval(frame, 10);  // 调用 setInterval() 函数，每隔 10 毫秒调用一次 "frame" 函数
  function frame() {  // 定义一个名为 "frame" 的函数
    if (pos == 350) {  // 判断如果 "pos" 的值已经大于等于 350，则停止调用 "frame" 函数
      clearInterval(id);  // 调用 clearInterval() 函数，停止调用 "frame" 函数
    } else {  // 否则
      pos++;  // "pos" 的值加 1
      box.style.top = pos + "px";  // 设置方块的 top 属性为 "pos" 的值
      box.style.left = pos + "px";  // 设置方块的 left 属性为 "pos" 的值
    }
  }
}
