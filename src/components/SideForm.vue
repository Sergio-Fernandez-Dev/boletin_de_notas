<script setup></script>

<template>
  <aside>
    <form>
      <div class="mb-3">
        <label for="student" class="form-label">Nombre del alumno</label>
        <input
          type="text"
          class="form-control form-control-sm"
          name="student"
          id="student"
        />
      </div>
      <div class="mb-3">
        <label for="course" class="form-label">Materia</label>
        <select class="form-control form-control-sm" name="course" id="course">
          <option value="" selected></option>
          <option value="matematicas">Matemáticas</option>
          <option value="lengua">Lengua</option>
          <option value="musica">Música</option>
          <option value="gimnasia">Gimnasia</option>
          <option value="geografia">Geografía</option>
          <option value="ingles">Inglés</option>
          <option value="plastica">Plástica</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="calification" class="form-label">Nota</label>
        <input
          type="number"
          class="form-control form-control-sm"
          name="calification"
          id="calification"
          step="0.5"
          min="0"
          max="10"
        />
      </div>
    </form>
  </aside>
</template>

<style scoped>
aside {
  height: 100%;
  background-color: cornflowerblue;
  padding: 1.2rem;
}
</style>
