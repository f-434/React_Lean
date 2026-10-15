/**
 * 事件处理器作为 Props 传递
 * ─────────────────────────────────────
 * 核心：数据向下传，事件向上传
 *
 * ① 传函数：父 → 子（和普通 props 一样，往下）
 *    <MenuItem onOrder={handleOrder} />
 *
 * ② 调函数：子 → 父（用户点击时，子组件发起）
 *    onClick={() => onOrder(name, price)}
 *    ↑ 箭头函数：推迟执行 + 打包参数
 *
 * ③ 回信息：子 → 父（通过函数参数把数据递上去）
 *
 * 为什么？
 *   props 只读，子组件不能直接改父组件数据，
 *   只能调用父传下来的"电话"通知父组件。
 *   子组件没有"取"的权限，只有"接收并使用"。
 *
 * 命名规范：
 *   父传的 prop  → onXxx     (onOrder)
 *   父处理函数   → handleXxx (handleOrder)
 *
 * 常见坑：
 *   ❌ onClick={fn()}        渲染时立即执行
 *   ✅ onClick={fn}          传引用
 *   ✅ onClick={() => fn(a)} 需传参
 *   自定义组件上的 onXxx 不会自动绑定，需子组件手动调用
 */
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  const handleOrder = (itemName, itemPrice) => {
    alert(`商品名称：${itemName}商品价格：${itemPrice}`);
  };

  return (
    <div>
      <h2>MENU</h2>
      <MenuItem name="Pizza" price={20.99} onOrder={handleOrder} />
      <MenuItem name="Burger" price={20.99} onOrder={handleOrder} />
      <MenuItem name="Salad" price={20.99} onOrder={handleOrder} />
    </div>
  );
};
