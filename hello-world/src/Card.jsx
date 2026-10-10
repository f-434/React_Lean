import React, { createElement, useState } from "react"

/*
    JSX语法糖
    称为transpiler的工具，自动将素有jsx转换为createElement调用

    规则
    1.每个组件必须返回一个单一的根元素,多个元素需要包裹在父容器中
    2.使用React.Fragment来作为根元素，页面显示时不包括根元素，简洁写法空尖 <></>
    3.在JSX中每个标签必须正确闭合
    4.属性名必须使用驼峰命名法，class或者for这样的保留字例外
    5.JSX中的标签是JS，并非H5标签
*/

export const Card = () => {
    const [num, setNum] = useState(0)

    const str = "测试嵌入JS"

    const clickAdd = () =>{
        setNum(old => old + 1)
    }

    return (
        <React.Fragment>
            <hr />
            <h2>F434</h2>
            <p>
                使用 <span id="hightlight">jsx</span> 创建，Fragment包裹
            </p>
            <p>{str}<br/>{num}</p>
            <button onClick={clickAdd}>点击</button>
        </React.Fragment>
    )
}


export const CardWithoutJSX = () => {
    return (
        React.createElement(
            "div",
            {id: "card"},
            React.createElement("hr", null, null),
            React.createElement(
                "p",
                null,
                "未使用",
                React.createElement(
                    "span",
                    {id: "hightlight"},
                    "JSX",
                    "创建"
                )
            ),
            React.createElement("button", null, "click")
        )
    )
}