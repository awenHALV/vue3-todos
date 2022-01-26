<template>
  <div class="todos">
    <todo-item
      :item="todo"
      :key="todo.id"
      v-for="todo in todos"
      @removeTodo="removeTodo"
      @setDoing="setDoing"
      @setStatus="setStatus"
    ></todo-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import TodoItem from "@/components/todo-item.vue"
import { IUseTodo, useTodo } from "@/hooks"
import { ITodo } from "@/types"
export default defineComponent({
  name: "TodoList",
  components: {
    TodoItem,
  },
  props: {
    todos: Array as PropType<ITodo[]>,
  },
  setup() {
    const { removeTodo, setDoing, setStatus }: IUseTodo = useTodo()
    return {
      setDoing,
      removeTodo,
      setStatus,
    }
  },
})
</script>

<style lang="scss" scoped></style>
