/**
 * 在React中渲染列表，需要获取数据，将其放入数组，再将该数组转换为所需标签
 * 渲染列表时，需要为每个元素添加key
 * key放置在最外层重复元素上，key为react内部使用的特殊prop，为什么需要？方便高效更新组件
 *
 */
export const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "X BOX",
      price: 3999.9,
    },
    {
      id: 2,
      name: "Phone",
      price: 5999.9,
    },
    {
      id: 3,
      name: "Ipad",
      price: 6999.9,
    },
    {
      id: 4,
      name: "Watch",
      price: 2999.9,
    },
  ];

  const productElement = products
    .filter((p) => {
      return p.price > 3000;
    })
    .map((p) => {
      return (
        <div key={p.id}>
          <h3>Name: {p.name}</h3>
          <p>Price: {p.price}</p>
        </div>
      );
    });

  return (
    <div>
      <h2>Product</h2>
      {productElement}
    </div>
  );
};
