    /**
     * 解构：从一个对象中提取值并将其赋值给一个变量
     */
export const Product = ({title, price, isStock, categories}) => {
    return (
        <div>
            <hr />
            <h3>{title}</h3>
            <p>Price:{price}</p>
            <p>In stock:{isStock ? "Yes" : "No"}</p>
            <p>Categories:{categories.join(", ")}</p>
        </div>
    )
}