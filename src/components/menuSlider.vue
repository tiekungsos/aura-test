
<template>
  <div class="navigation" v-if="this.dataStore.menuvisible" :style="{
        width: this.showMenu ? '100vw ' : '0px'
      }">
    <div
      class="background"
      style="transform: matrix(1, 0, 0, 1, 0, 0); opacity: 1"
    ></div>
    <div class="main-pages-container">
      <div class="menu-page">
        <div class="pagein">
          <div class="menu-list">
            <div class="text">Home</div>
            <div class="imagebg">
              <img src="@/assets/image/menu2.jpg" alt="" />
            </div>
          </div>
          <div class="menu-list">
            <div class="text">About</div>
            <div class="imagebg">
              <img src="@/assets/image/menu1.jpg" alt="" />
            </div>
          </div>
          <div class="menu-list">
            <div class="text">Products</div>
            <div class="imagebg">
              <img src="@/assets/image/menu2.jpg" alt="" />
            </div>
          </div>
          <div class="menu-list">
            <div class="text">Locations</div>
            <div class="imagebg">
              <img src="@/assets/image/menu1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="sub-nav"></div>
    </div>
  </div>
</template>

<script>
import { useDataStore } from "@/stores/data.store";
export default {
  components: {},
  data() {
    return {};
  },
  setup() {
    const dataStore = useDataStore();

    return { dataStore };
  },
  computed :{
    showMenu() {
      return this.dataStore.showMenu
    }
  },
  methods: {},
};
</script>
