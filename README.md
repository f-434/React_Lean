## 项目概览

使用 `npm create vite@latest` 创建项目，技术栈为 React 19 + Vite 8，并启用了 React Compiler。`package.json` 中依赖版本较新：`react` 和 `react-dom` 为 `^19.2.8`，构建工具 `vite` 为 `^8.3.0`。

`src/` 目录下的组件文件及对应知识点：

| 文件          | 核心知识点                              |
| :------------ | :-------------------------------------- |
| `App.jsx`     | 组件导入导出、Props 传递                |
| `Card.jsx`    | JSX 语法规则、Fragment、`createElement` |
| `Hello.jsx`   | 函数组件、默认导出                      |
| `Welcome.jsx` | Props 接收与使用                        |
| `Product.jsx` | Props 解构                              |
| `Button.jsx`  | 箭头函数组件、命名导出                  |
| `main.jsx`    | 应用入口、`createRoot`                  |

## 组件本质

组件就是一个 JavaScript 函数，返回应该显示的 UI。组件首字母必须大写，React 靠这一点区分“组件”和普通 HTML 标签。组件可以嵌套使用。

`Hello.jsx` 示例：

jsx

```
function Hello(){
    return(
        <h2>Hello</h2>
    )
}
export default Hello
```



要点：

- 组件是函数，返回值是 UI 描述。
- 组件名首字母大写。
- 组件可以组合和嵌套。

## JSX

JSX 是 JavaScript 的语法扩展，允许在 JS 中编写标签，并支持所有 JavaScript 方法和逻辑。逻辑决定内容。

### JSX 的五条核心规则

1. 每个组件必须返回一个单一的根元素。多个元素需要包裹在父容器中。
2. 使用 Fragment 作为根元素。`React.Fragment` 或简写 `<>...</>`，页面显示时不包括根元素，不会产生多余 DOM 节点。
3. 每个标签必须正确闭合。JSX 比 HTML 严格，`<img>` 也要写成 `<img />`。
4. 属性名使用驼峰命名法。`class` 要写成 `className`，`for` 要写成 `htmlFor`。
5. JSX 中的标签是 JS，并非 H5 标签。

### JSX 是语法糖

JSX 本质上是一种语法糖。称为 transpiler 的工具会自动将所有 JSX 转换为 `createElement` 调用。

`Card.jsx` 中通过 `CardWithoutJSX` 组件，用 `React.createElement` 手动构建了同样的 UI：

jsx

```
React.createElement("div", {id: "card"},
    React.createElement("hr", null, null),
    React.createElement("p", null, "未使用",
        React.createElement("span", {id: "hightlight"}, "JSX", "创建")
    ),
    React.createElement("button", null, "click")
)
```



这种“用 JSX 写一遍，再用 `createElement` 写一遍”的对比方式，能直观感受到 JSX 简化代码的作用。

## 组件导入导出

在 `App.jsx` 中区分了两种导出方式：

jsx

```
// 默认导出，导入时不需要花括号
import Hello from './Hello'

// 命名导出，导入时需要加花括号
import { Button } from './Button'
import { Welcome, WelcomeWithoutJSX } from './Welcome'
```



对应组件文件的写法：

- 默认导出：`Hello.jsx` 使用 `export default Hello`
- 命名导出：`Button.jsx` 使用 `export const Button = () => {...}`

建议：一个文件只默认导出一个组件，其余辅助组件用命名导出。这样导入时一看花括号，就知道用的是默认导出还是命名导出。

## Props

Props 即 properties，是组件之间通信的方式。父组件通过 props 将数据传递给子组件。用函数思维理解：props 就是传递给子组件这个函数的参数。Props 可以传递函数、对象、JSX 等。

### 基础用法：接收 props

`Welcome.jsx` 示例：

jsx

```
export const Welcome = (props) => {
    console.log(props)
    return (
        <h5>Welcome {props.name}, age:{props.age}</h5>
    )
}
```



父组件 `App.jsx` 中定义 `user` 状态，然后通过 `<Welcome name={user.name} age={user.age} />` 传递下去。

### 进阶用法：解构 props

`Product.jsx` 中练习了解构。解构是指从一个对象中提取值并将其赋值给变量。

jsx

```
export const Product = ({title, price, isStock, categories}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>Price: {price}</p>
            <p>In stock: {isStock ? "Yes" : "No"}</p>
            <p>Categories: {categories.join(", ")}</p>
        </div>
    )
}
```



解构的好处：

- 函数签名一眼就能看出组件需要哪些 props。
- 不用反复写 `props.title`、`props.price`。
- 可以给默认值，比如 `{title = "默认标题"}`。

## 应用入口

`main.jsx` 是整个应用的起点：

jsx

```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)
```



要点：

- `createRoot` 从 `react-dom/client` 导入，是 React 18+ 的新 API。
- `StrictMode` 开启严格模式，在开发环境下帮助发现潜在问题。
- `document.getElementById('root')` 对应 `index.html` 里的 `<div id="root"></div>`。