//使用if分支 复杂逻辑
//使用三元运算符进行条件渲染 要么要么
// 使用逻辑与 显示或隐藏
// 使用变量 
// return前处理所有逻辑，保持jsx简洁易读
// activity组件，可隐藏UI的某些部分
export const UserDetails = ({name, isOnline, isPremium, isNewUser, role}) => {
    // return (
    //     <div>
    //         <h3>{name}</h3>
    //         <p>Status: {inOnline}</p>
    //     </div>
        
    // )
    var temp = null

    if(role === 'admin'){
        temp = <span>Admin</span>
    } else if (role === "user"){
        temp =  <span>User</span>
    }else if (role === "vip"){
        temp = <span>VIP</span>
    }


    return (
        <div>
            <h3>{name}
                {/* 逻辑与运算 &&，只关注为真情况 */}
                {isPremium && <span>⭐</span>}
                {isNewUser && <span>✨</span>} 
                {temp}
            </h3>
            <p>{isOnline ? "Online" : "Offline"}</p>
            {
                isOnline ? (
                    <button>Send Message</button>
                ) : (
                    <small>loading....</small>
                )
            }
        </div>
    )

    // if (inOnline) {
    //         return (
    //             <div>
    //             <h3>{name}</h3>
    //             <span>🟢Online</span>
    //             <p>Send Message</p>
    //             <button>Click</button>
    //             </div>
    //         )
    //     } 
    // return (
    //     <div>
    //     <h3>{name}</h3>
    //     <span>🔴Offline</span>
    //     </div>
    // )
        
}