<script>
export default {};
</script>

<template>
  <section class="grades">
    <div class="students-list">
      <h2>Alumn@s</h2>
      <section class="student">
        <p>Lisa</p>
        <button class="btn btn-primary">Ver</button>
      </section>
      <section class="student-grades-table">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Materia</th>
              <th scope="col">Cualificación</th>
            </tr>
          </thead>
          <tbody>
            <td>Geografía</td>
            <td>Sobresaliente</td>
          </tbody>
        </table>
      </section>
    </div>
  </section>
</template>

<style scoped>
.student {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
p {
  margin: 0;
}
</style>
