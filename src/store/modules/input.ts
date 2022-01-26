/**
 * todo 输入框
 */
import { ITodo, IState, TODO_STATUS } from '@/types'
import { Commit } from 'vuex'
import {
  ADD_TODO,
  SET_DOING,
  REMOVE_TODO,
  GET_TODOS,
  SET_TODOS,
  SET_STATUS
} from '../actionTypes'
interface ICtx {
  commit: Commit
  state: IState
}
const state: IState = {
  todos: []
}
const mutations = {
  [ADD_TODO](state: IState, payload: ITodo): void {
    state.todos.push(payload)
  },
  [REMOVE_TODO](state: IState, id: number): void {
    const index = state.todos.findIndex(item => item.id === id)
    state.todos.splice(index, 1)
  },
  [SET_DOING](state: IState, id: number): void {
    const filterTodo: ITodo[] = state.todos.filter(item => item.id === id) || {}
    filterTodo[0].status = TODO_STATUS.DOING
  },
  [SET_STATUS](state: IState, id: number): void {
    const filterTodo: ITodo[] = state.todos.filter(item => item.id === id) || {}
    const status =
      filterTodo[0].status === TODO_STATUS.FINISHED
        ? TODO_STATUS.WILLDO
        : TODO_STATUS.FINISHED
    filterTodo[0].status = status
  },
  [GET_TODOS](state: IState): ITodo[] {
    return state.todos
  },
  [SET_TODOS](state: IState, todoList: ITodo[]): void {
    state.todos = todoList
  }
}

const actions = {
  [ADD_TODO]({ commit }: ICtx, todo: ITodo): void {
    commit(ADD_TODO, todo)
  },
  [REMOVE_TODO]({ commit }: ICtx, id: number): void {
    commit(REMOVE_TODO, id)
  },
  [GET_TODOS]({ commit }: ICtx): void {
    commit(GET_TODOS)
  },
  [SET_TODOS]({ commit }: ICtx, todos: ITodo[]): void {
    commit(SET_TODOS, todos)
  },
  [SET_DOING]({ commit }: ICtx, id: number): void {
    commit(SET_DOING, id)
  },
  [SET_STATUS]({ commit }: ICtx, id: number): void {
    commit(SET_STATUS, id)
  }
}

export default {
  namespace: true,
  state,
  mutations,
  actions
}
