import { defineStore } from 'pinia';

export const gradList = defineStore('grades', {
  state: () => {
    return {
      grades: [],
    };
  },
  actions: {
    recordNewField(field) {
      if (!this.grades.includes(field)) this.grades.push(field);
    },
  },
});
