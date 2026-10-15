/**
 * 事件处理器作为prop传递
 * 场景：两个父组件来调用该子组件
 *
 *  */
export const ActionButton = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
