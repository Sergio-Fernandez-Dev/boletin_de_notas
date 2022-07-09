import { defineStore } from 'pinia';

export const gradStore = defineStore('grades', {
  state: () => {
    return {
      grades: [],
    };
  },
  actions: {
    recordNewField(field) {
      console.trace(field);
      if (!this.grades.includes(field)) {
        this.transformCalificationsToText(field);
        console.trace(field);
        this.grades.push(field);
      }
    },
    transformCalificationsToText(field) {
      if (field.calification < '3')
        return (field.calification = 'Muy deficiente');
      if (field.calification < '5')
        return (field.calification = 'Insuficiente');
      if (field.calification < '6') return (field.calification = 'Suficiente');
      if (field.calification < '7') return (field.calification = 'Bien');
      if (field.calification < '9') return (field.calification = 'Notable');
      if (field.calification < '10')
        return (field.calification = 'Sobresaliente');
    },
  },
});
