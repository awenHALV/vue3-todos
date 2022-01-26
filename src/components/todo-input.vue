<template>
  <div class="todos">
    <input
      v-model="todoText"
      @keyup="handleAddTodo"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { useTodo } from "@/hooks"
export default defineComponent({
  name: "TodoInput",
  setup() {
    const todoText = ref<string>("")
    const { addTodo } = useTodo()
    const handleAddTodo = (e: KeyboardEvent): void => {
      if (e.keyCode === 13 && todoText.value.trim().length) {
        addTodo(todoText.value)
        todoText.value = ""
      }
    }
    return {
      todoText,
      handleAddTodo,
    }
  },
})
</script>

<style lang="scss" scoped></style>
