import { ActionButton } from "./ActionButton";
// 父组件定义函数，传递给子组件，在子组件调用
export const Contact = () => {
  const handleMessage = () => {
    alert("Contact Clicked!");
  };

  return (
    <div>
      <h2>Contact Use</h2>
      <ActionButton text="Contact Click!!!" onClick={handleMessage} />
    </div>
  );
};
