
<template>
  <div :class="{ hamburguer: true , active : hamburgueractive} " @click="activeheader"> 
    <span></span>
    <span></span>
  </div>
</template>


<script>
import { useDataStore } from "@/stores/data.store";
export default {
  components: {},
  data() {
    return {
      hamburgueractive : false,
    };
  },
  setup() {
    const dataStore = useDataStore();

    return { dataStore };
  },
  methods: {
    activeheader() {

      if(this.dataStore.menuvisible == false) {
        this.dataStore.menuvisible = true

        setTimeout(() => {
        this.hamburgueractive = !this.hamburgueractive
        this.dataStore.showMenu = !this.dataStore.showMenu
        }, 100);
      } else   if(this.dataStore.menuvisible == true) {
        this.hamburgueractive = !this.hamburgueractive
        this.dataStore.showMenu = !this.dataStore.showMenu

        setTimeout(() => {
          this.dataStore.menuvisible = false
        }, 500);
      }


    

   
     
    }
  },
};
</script>
