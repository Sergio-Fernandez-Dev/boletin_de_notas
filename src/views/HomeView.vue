<script></script>

<template>
  <main>
    <div class="button-link-container">
      <RouterLink class="button-link" to="/bulletin"
        >Ir al boletín de notas</RouterLink
      >
    </div>
  </main>
</template>

<style>
main {
  min-height: 90vh;
  display: flex;
  justify-content: center;
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
