/**
 * 触发事件两步操作
 *  1.定义在事件发生时要执行的函数
 *  2.使用on开头的特殊prop
 *  3.事件函数命名：以handle开头+事件
 *  4.事件对象event
 *      event可以访问组件内部的变量和props
 */
export const CustomButtom = ({ text = "测试event访问" }) => {
  const name = "Custom";
  const handleClick = (e) => {
    alert("Clicked!!!");
    console.log("点击元素：", e.target);
    console.log("点击坐标：", e.clientX, e.clientY);
    console.log("name:", name);
    console.log("text:", text);
  };

  //   如果加上括号，组件在渲染时会立即调用
  return <button onClick={handleClick}>{text}</button>;

  //   内联声明事件
  //   return <button onClick={() => alert("Line Alert!")}>example</button>;
};
