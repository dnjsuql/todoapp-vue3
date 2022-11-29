<template>
  <div class="todo">
    <ul class="todo__list">
      <li v-for="(todoItem, index) in this.storedTodoItems" :key="todoItem.item" class="todo__item shadow">
        <i class="checkBtn fas fa-check" :class="{ checkBtnCompleted: todoItem.completed }" @click="toggleComplete({ todoItem, index })"></i>
        <span :class="{ textCompleted: todoItem.completed }">
          {{ todoItem.item }}
        </span>
        <span class="removeBtn" @click="removeTodo({ todoItem, index })">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem',
    }),
  },
  computed: {
    ...mapGetters(['storedTodoItems']),
  },
};
</script>

<style scoped>
.todo__list {
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-align: left;
}
.todo__item {
  padding: 0 10px;
  border: 0;
  margin: 8px 0;
  height: 50px;
  min-height: 50px;
  line-height: 1;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
/* 리스트 아이템 트랜지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
