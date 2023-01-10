<template>
  <div class="page">
    <div class="video block-bg-cover">
      <video loop="true" autoplay="autoplay" muted>
        <source src="@/assets/videos/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div
      class="full-screen-container"
      :style="{
        opacity: full_video ? '1' : '0',
        visibility: full_video ? 'inherit' : 'hidden',
      }"
    >
      <div class="close-video-btn" @click="closeVideos">
        <img class="close-video active" src="@/assets/icon/close.svg" alt="" />
      </div>

      <video
        class="element-cover"
        loop="true"
        autoplay="false"
        controls
        ref="videodata"
      >
        <source src="@/assets/videos/full.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="content">
      <div class="detail">
        <h1 class="home-and-menu-title">At vero eos et accusamus et iusto</h1>
        <h2 class="sub-title">
          earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat."
        </h2>
      </div>
    </div>

    <div class="view-full-video" @click="videoFullSceen">
      <img src="@/assets/icon/play.svg" alt="" />
      <span>WATCH FULL VIDEO</span>
    </div>
  </div>
</template>
<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import { useDataStore } from "@/stores/data.store";

export default {
  components: {
    Vue3Lottie,
  },
  setup() {
    const dataStore = useDataStore();

    return { dataStore };
  },
  data() {
    return {
      // AstronautJSON,
      // menu: {
      //   menu_1: false,
      //   menu_2: false,
      //   menu_3: false,
      //   menu_4: false,
      //   menu_5: false,
      //   menu_6: false,
      // },
      dataStoreIN: null,
      full_video: false,
    };
  },
  methods: {
    videoFullSceen() {
      this.dataStore.data = true
      setTimeout(() => {
        this.full_video = true;
        this.$refs.videodata.play();
      }, 500);

      // videodata
    },
    closeVideos() {
      this.full_video = false;
      this.$refs.videodata.pause();
      this.$refs.videodata.currentTime = 0;
      this.dataStore.data = false
    },
  },
};
</script>
