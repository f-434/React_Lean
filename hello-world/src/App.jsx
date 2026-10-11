import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// 导入
import Hello from './Hello'
// 使用export 直接导出，需要加花括号
import {Button} from './Button'
import { Welcome, WelcomeWithoutJSX } from './Welcome'
import {  Card, CardWithoutJSX } from './Card'
import { Product } from './Product'
import { Greeting } from './Greeting'
import { UserCard } from './UserCard'
import { CardWapper } from './CardWapper'

/**
 * Props（properties）
 * - 作用：父组件向子组件传递数据，可类比为函数参数。
 * - 特点：Props 是只读的，子组件不能直接修改。
 * - 可传递：字符串、数字、布尔值、对象、数组、函数、JSX 等任意 JS 值。
 *
 * 常见模式：
 * 1. 默认值：在解构参数时设置，如 ({ name = 'Guest' })。
 *    默认值仅在 prop 为 undefined 时生效，传入 null 不会触发默认值。
 * 2. 展开转发：<Child {...props} />，把父组件收到的 props 继续传给子组件。
 * 3. children：写在组件标签之间的内容，React 会将其作为特殊的 children prop 传入。
 *    组件内部通过 {children} 决定它的渲染位置。
 */

// 组件：本质是返回 React 元素的 JavaScript 函数。
// 约定：组件名首字母必须大写，React 以此区分组件和普通 HTML 标签。
// 组件可以嵌套、复用，并通过 Props 进行通信。
function App() {
  const [user, setUser] = useState({
    name: 'alice',
    age: 30,
    email: 'example@google.com'
  })

  const [product, setProduct] = useState({
    title: "GAME",
    price:300,
    isStock:true,
    categories: ['Electron', 'Home', 'Game']

  })


  return (
    <div>
      <h2>Test</h2>
      <Hello/>
      {/* 传参：父组件通过 props 向子组件传递数据 */}
      <Welcome name="bobo" age='30' user/>
      <Welcome name="lisa" age='30'/>
      <Button/>
      <WelcomeWithoutJSX/>
      <span>---------分割线-----------</span>
      <Card/>
      <CardWithoutJSX/>
      <Product
        title='Wave Gaming'
        price={299.99}
        isStock={true}
        categories={["Electronics", "Home", "Game"]}
      />

      <hr />

      {/* Props 默认值：未传或传入 undefined 时生效 */}
      <Greeting/>
      <hr />
      <UserCard id={1001} name="alice" age={30} city="KunMing" email="example@qq.com"/>
      <hr />
      {/* children 嵌套：标签之间的内容会作为 children prop 传入 */}
      {/* 注意组件结束标签斜杠在前 */}
      <CardWapper title="User Profile">
        
        <p>Alice</p>
        <p>example@163.com</p>
        <button type="button">Edit Profile</button>
      </CardWapper>

    </div>
    
  )
}

export default App
