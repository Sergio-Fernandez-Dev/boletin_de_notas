<script>
import { getCurrentPath } from './services/getCurrentPath';
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';

export default {
  data() {
    return {
      path: null,
    };
  },
  components: {
    RouterLink,
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
  <main>
    <div class="button-link-container">
      <RouterLink class="button-link" to="/bulletin"
        >Ir al boletín de notas</RouterLink
      >
    </div>
  </main>
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

main {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  width: 1024px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.button-link {
  width: 151px;
  height: 33px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: normal;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-link-container {
  width: 151px;
  height: 33px;
  background: #d9d9d9;
}
</style>
