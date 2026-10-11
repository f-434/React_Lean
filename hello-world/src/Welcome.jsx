import React from "react"

export const Welcome = (props) =>{
    console.log(props)
    return (
        <div id="container">
            <h2>Welcome {props.name},age:{props.age}</h2>
        </div>
    )
}

// 对比
export const WelcomeWithoutJSX = () =>{
    return React.createElement(
        "div", 
        {id: "container"}, 
        React.createElement(
            "h2",
            null,
            "Welcome"
        )
    )
}