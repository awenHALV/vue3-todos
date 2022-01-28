import store from '@/store'
import {
  ADD_TODO,
  REMOVE_TODO,
  SET_DOING,
  GET_TODOS,
  SET_TODOS,
  SET_STATUS
} from '@/store/actionTypes'
import { TODO_STATUS, ITodo, IState } from '@/types'
import { watch } from 'vue'
import { Store, useStore } from 'vuex'

/**
 * todo的相关操作
 */
interface IUseTodo {
  addTodo: (value: string) => void
  removeTodo: (id: number) => void
  setDoing: (id: number) => void
  getTodos: () => ITodo[]
  setTodos: () => void
  setStatus: (id: number) => void
}

function useTodo(): IUseTodo {
  const store: Store<any> = useStore()

  const { getLocalList, setLocalList }: IUseLocalStorage = useLocalStorage()
  const todos = getLocalList()

  watch(
    // 第一个参数为监听的对象
    () => store.getters.todos,
    // 监听的最新值
    todos => {
      setLocalList(todos)
    }
  )
  function addTodo(value: string): void {
    if (store.getters.todos.map((item: ITodo) => item.title).includes(value)) {
      alert('该Todo项已存在，请重新输入')
      return
    }
    const todo: ITodo = {
      id: new Date().getTime(),
      title: value,
      status: TODO_STATUS.WILLDO
    }
    store.dispatch(ADD_TODO, todo)
  }

  function getTodos(): ITodo[] {
    return getLocalList() || store.dispatch(GET_TODOS)
  }

  function setTodos(): void {
    store.dispatch(SET_TODOS, todos)
  }

  function setStatus(id: number): void {
    store.dispatch(SET_STATUS, id)
  }

  function removeTodo(id: number): void {
    store.dispatch(REMOVE_TODO, id)
  }

  function setDoing(id: number) {
    store.dispatch(SET_DOING, id)
  }
  return {
    getTodos,
    setTodos,
    addTodo,
    removeTodo,
    setDoing,
    setStatus
  }
}

interface IUseLocalStorage {
  getLocalList: () => ITodo[]
  setLocalList: (todos: ITodo[]) => void
}

function useLocalStorage() {
  function getLocalList(): ITodo[] {
    const local = localStorage.getItem('todos') || '[]'
    return JSON.parse(local)
  }
  function setLocalList(list: ITodo[]) {
    localStorage.setItem('todos', JSON.stringify(list))
  }
  return {
    getLocalList,
    setLocalList
  }
}

export { useTodo, IUseTodo }
