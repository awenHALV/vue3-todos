<template>
  vue3.0-typescript
  <TodoInput />
  <TodoList :todos="todos" />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue"
import TodoList from "./components/todo-list.vue"
import TodoInput from "./components/todo-input.vue"
import { IUseTodo, useTodo } from "./hooks"
import { Store, useStore } from "vuex"
export default defineComponent({
  name: "App",
  components: {
    TodoList,
    TodoInput,
  },
  setup() {
    const { setTodos }: IUseTodo = useTodo()
    const store: Store<any> = useStore()
    onMounted(() => {
      setTodos()
    })

    return {
      todos: computed(() => store.getters.todos),
    }
  },
})
</script>

<style></style>
