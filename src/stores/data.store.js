import { defineStore } from "pinia";

export const useDataStore = defineStore({
  id: "data",
  state: () => ({
    data: false,
    showMenu : false,
    menuvisible : false
  }),
  actions: {
    async setVieoFull(status) {
      this.data = status;
      return status;
    }
  },
});
