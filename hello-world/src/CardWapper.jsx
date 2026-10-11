// children：写在 <CardWapper>...</CardWapper> 之间的内容。
// React 会把它作为 children prop 传入；组件内部通过 {children} 决定渲染位置。
// 未传入时 children 为 undefined，不会渲染。
export const CardWapper = ({title, children}) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="card-content">
                {children}
            </div>
        </div>
    )
} 