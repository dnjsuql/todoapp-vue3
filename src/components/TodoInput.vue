<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
    <ModalView v-if="showModal" @close="showModal = false">
      <!-- <h3 v-slot="header">
        경고!
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      <p v-slot="body">
        무언가를 입력하세요
      </p> -->
    </ModalView>
 </div>
</template>

<script>

import ModalView from './common/ModalView.vue'

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if(this.newTodoItem !== '') {
        this.$store.commit('addOneItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
  components: {
    ModalView
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background-color: #fff;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    padding: 10px;
    border-style: none;
    width: calc(100% - 48px);
    height: 100%;
    font-size: 0.9rem;
    box-sizing: border-box;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: #fff;
    vertical-align: middle;
  }
  .closeModalBtn {
    color: #42b983;
  }
</style>