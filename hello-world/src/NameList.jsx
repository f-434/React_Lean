/**
 * 索引作为Key的反模式
 * 索引代表的是位置，而非条目本身，当列表中元素发生变化可能会有BUG
 * 什么情况下索引时安全的：
 *  1.项目没有唯一ID
 *  2.列表完全静态
 *  3.不会被过滤或排序
 */
export const NameList = () => {
  const names = ["n1", "n2", "n3", "n4", "n5", "n6", "n7", "n8", "n9"];

  const nameList = names.map((n, index) => <h4 key={index}>{n}</h4>);

  return <div>{nameList}</div>;
};
