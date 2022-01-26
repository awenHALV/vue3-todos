<template>
  <div>
    <input
      type="checkbox"
      :checked="item.status === FINISHED"
      @click="setStatus(item.id)"
    />
    <span :class="item.status === FINISHED ? 'finished' : ''">
      {{ item.title }}</span>
    <button @click="removeTodo(item.id)">删除</button>
    <button
      v-if="item.status !== FINISHED"
      @click="setDoing(item.id)"
      :class="item.status === DOING ? 'doing' : 'willdo'"
    >
      {{ item.status === DOING ? "正在做" : "马上做" }}
    </button>
  </div>
</template>

<script lang="ts">
import { TODO_STATUS } from "@/types"
import { defineComponent } from "vue"
export default defineComponent({
  name: "TodoItem",
  props: {
    item: Object,
  },
  setup(prop, { emit }) {
    const { FINISHED, DOING } = TODO_STATUS
    const setStatus = (id: number): void => {
      emit("setStatus", id)
    }
    const removeTodo = (id: number): void => {
      emit("removeTodo", id)
    }
    const setDoing = (id: number) => {
      emit("setDoing", id)
    }
    return {
      FINISHED,
      DOING,
      setStatus,
      removeTodo,
      setDoing,
    }
  },
})
</script>

<style scoped>
.finished {
  text-decoration: line-through;
}
.doing {
  background-color: orange;
  color: #fff;
}
.willdo {
  background-color: #cdcdcd;
  color: red;
}
</style>
