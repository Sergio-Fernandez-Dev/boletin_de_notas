<script>
import { getCurrentPath } from './services/getCurrentPath';
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';

export default {
  data() {
    return {
      path: null,
    };
  },
  components: {
    RouterView,
    NavBar,
  },
  created() {
    this.path = getCurrentPath();
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <NavBar />
    </div>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';

header {
  line-height: 1.5;
  background-color: aqua;
  display: flex;
  justify-content: center;
  height: 62px;
}

.wrapper {
  min-width: 75vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
