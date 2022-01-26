import { IState, ITodo } from '@/types'

interface IGetters {
  input: IState
}
const getters = {
  todos: (state: IGetters): ITodo[] => state.input.todos
}
export default getters
