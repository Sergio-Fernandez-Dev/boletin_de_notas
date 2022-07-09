<script setup>
import { ref } from 'vue';
import { gradStore } from '../stores/gradStore';

const store = gradStore();
const studentInfo = ref({ name: '', course: '', calification: '' });
</script>

<template>
  <aside>
    <form @keydown.enter="store.recordNewField(studentInfo)">
      <div class="mb-3">
        <label for="student" class="form-label">Nombre del alumno</label>
        <input
          v-model="studentInfo.name"
          type="text"
          class="form-control form-control-sm"
          name="student"
          id="student"
        />
      </div>
      <div class="mb-3">
        <label for="course" class="form-label">Materia</label>
        <select
          v-model="studentInfo.course"
          class="form-control form-control-sm"
          name="course"
          id="course"
        >
          <option value="" selected></option>
          <option value="Matemáticas">Matemáticas</option>
          <option value="Lengua">Lengua</option>
          <option value="Música">Música</option>
          <option value="gimnasia">Gimnasia</option>
          <option value="Geografía">Geografía</option>
          <option value="Inglés">Inglés</option>
          <option value="Plástica">Plástica</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="calification" class="form-label">Nota</label>
        <input
          v-model="studentInfo.calification"
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
