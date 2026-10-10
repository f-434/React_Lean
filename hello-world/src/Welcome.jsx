import React from "react"

export const Welcome = (props) =>{
    console.log(props)
    return (
        <div id="container">
            <h5>Welcome {props.name},age:{props.age}</h5>
        </div>
    )
}

// 对比
export const WelcomeWithoutJSX = () =>{
    return React.createElement(
        "div", 
        {id: "container"}, 
        React.createElement(
            "h1",
            null,
            "Welcome"
        )
    )
}