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

/**
 * Props 即properties，组件之间通信的方式，父组件通过props将数据传递给子组件，函数思维：props就是传递给子组件（函数）的参数
 * 可传递：函数 对象 JSX.....
 * 
 */
// 组件即为一个js函数，返回应该显示什么的HTML
// 组件首字母大写
// 可嵌套
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
      <h1>Test</h1>
      <Hello/>
      {/* 传参 */}
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
    </div>
    
  )
}

export default App
