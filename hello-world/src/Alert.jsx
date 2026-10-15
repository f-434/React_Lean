import styles from "./Alert.module.css";
/**
 * react组件样式
 *
 * 1.内联样式，prop属性（JS对象）
 * style={{
        backgroundColor: type === "success" ? "#10b981" : "#ef4444",
        color: "#ffff",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "16px",
        // width: "100px",
        fontSize: "20px",
      }}

    2.外部CSS
        js模板字符串``
        但大型项目css会互相影响

    3. css模块
        局部作用域-独立css文件
        使用：在.css文件名前加上.module.css
 */
export const Alert = ({ children, type = "success" }) => {
  return <div className={`${styles.alert} ${styles[type]}`}>{children}</div>;
};
