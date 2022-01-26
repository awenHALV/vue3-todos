# vue3(store)-typescript-todos

## 数据流

1、组件 -> dispatch -> action
2、dispatch -> type(actionType) -> 对应了某一个 action
3、action -> commit 调用 -> mutation
4、mutation -> change -> state
5、 render 方案： state -> 数据流 -> 视图

## 需要哪些东西

1、actionType action 类型
2、actions 调用 mutation 的方法
3、mutations 更改 state 的方法
4、state 数据管理池
5、store 出口

## 组件划分

- TodoList
  1、TodoInput -> 输入组件
  2、TodoList -> 列表组件
  - TodoItem -> 列表项
    1、完成或未完成的选项 checkbox
    2、删除该项 button
    3、正在做的确认按钮 button
