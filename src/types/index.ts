/**
 * typescript类型
 */
interface ITodo {
  id: number
  title: string
  status: TODO_STATUS
}

enum TODO_STATUS {
  WILLDO = 'willdo',
  FINISHED = 'finished',
  DOING = 'DOING'
}

interface IState {
  todos: ITodo[]
}

export { ITodo, IState, TODO_STATUS }
