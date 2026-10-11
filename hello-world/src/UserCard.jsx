import { UserInfo } from "./UserInfo"

// 使用展开运算符，UserCard接收props对象，UserInfo使用展开运算符和props对象 --> <UserInfo {...props}/>
// 遇到多个props但只传递其中几个，可结合使用剩余运算符和展开运算符--> UserCard = （{id, ...rest}）,即用户id和其他的props
export const UserCard = ({id, ...props}) => {
    return (
        <div>
            <h2>User {id} Detials</h2>
            {/* 将UserCard的props展开传递给UserInfo */}
            <UserInfo {...props}/>
        </div>
    )
}