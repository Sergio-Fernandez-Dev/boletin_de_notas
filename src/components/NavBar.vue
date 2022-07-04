<script>
import { getCurrentPath } from '../services/getCurrentPath';
export default {
  methods: {
    getCurrentPath,
  },
};
</script>

<template>
  <nav>
    <RouterLink v-if="getCurrentPath() == '/bulletin'" to="/">HOME</RouterLink>
  </nav>
</template>

<style>
a {
  text-decoration: none;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  letter-spacing: 2px;
  color: black;
}
</style>
