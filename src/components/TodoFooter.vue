<template>
  <footer class="footer">
    <button @click="removeAll" type="button" class="footer__clear">Clear All</button>
  </footer>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations({
      removeAll: 'removeAll',
    }),
  },
};
</script>

<style scoped>
.footer {
  margin: 0 auto;
  height: 50px;
  line-height: 50px;
}
.footer__clear {
  padding: 0;
  border: 0;
  margin: 0;
  width: 100px;
  height: 50px;
  line-height: 50px;
  color: #e20303;
  background-color: #fff;
  border-radius: 5px;
}
</style>
