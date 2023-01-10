<script setup></script>

<template>
  <div class="overlay"></div>

  <div class="images-container">
    <div
      class="image-wrapper tubos-e-calhas block-bg-cover"
      :style="{ opacity: menu.menu_1 ? '0.8' : '0' }"
    >
      <img src="@/assets/image/menu1.jpg" alt="" />
    </div>
    <div
      class="image-wrapper tubos-e-calhas block-bg-cover"
      :style="{ opacity: menu.menu_2 ? '0.8' : '0' }"
    >
      <img src="@/assets/image/menu2.jpg" alt="" />
    </div>
    <div
      class="image-wrapper tubos-e-calhas block-bg-cover"
      :style="{ opacity: menu.menu_3 ? '0.8' : '0' }"
    >
      <img src="@/assets/image/menu1.jpg" alt="" />
    </div>
    <div
      class="image-wrapper tubos-e-calhas block-bg-cover"
      :style="{ opacity: menu.menu_4 ? '0.8' : '0' }"
    >
      <img src="@/assets/image/menu2.jpg" alt="" />
    </div>
    <div
      class="image-wrapper tubos-e-calhas block-bg-cover"
      :style="{ opacity: menu.menu_5 ? '0.8' : '0' }"
    >
      <img src="@/assets/image/menu1.jpg" alt="" />
    </div>
    <div
      class="image-wrapper tubos-e-calhas block-bg-cover"
      :style="{ opacity: menu.menu_6 ? '0.8' : '0' }"
    >
      <img src="@/assets/image/menu2.jpg" alt="" />
    </div>
  </div>

  <ul>
    <li
      @mouseover="triggermenu('menu_1')"
      @mouseleave="triggermenuout('menu_1')"
    >
      <a href="#">
        <div class="picto">
          <Vue3Lottie
            :animationData="AstronautJSON"
            :autoPlay="false"
            :height="66"
            :width="66"
            ref="menu_1"
          />
        </div>
        <div class="name">
          <h3>Tubos e Calhas</h3>
        </div>
      </a>
    </li>

    <li
      @mouseover="triggermenu('menu_2')"
      @mouseleave="triggermenuout('menu_2')"
    >
      <a href="#">
        <div class="picto">
          <Vue3Lottie
            :animationData="JSONLott2"
            :autoPlay="false"
            ref="menu_2"
            :height="66"
            :width="66"
          />
        </div>
        <div class="name">
          <h3>Tubos e Calhas</h3>
        </div>
      </a>
    </li>
    <li
      @mouseover="triggermenu('menu_3')"
      @mouseleave="triggermenuout('menu_3')"
    >
      <a href="#">
        <div class="picto">
          <Vue3Lottie
            :animationData="JSONLott3"
            :autoPlay="false"
            :height="66"
            :width="66"
            ref="menu_3"
          />
        </div>
        <div class="name">
          <h3>Tubos e Calhas</h3>
        </div>
      </a>
    </li>
    <li
      @mouseover="triggermenu('menu_4')"
      @mouseleave="triggermenuout('menu_4')"
    >
      <a href="#">
        <div class="picto">
          <Vue3Lottie
            :animationData="JSONLott4"
            :autoPlay="false"
            :height="66"
            :width="66"
            ref="menu_4"
          />
        </div>
        <div class="name">
          <h3>Tubos e Calhas</h3>
        </div>
      </a>
    </li>
    <li
      @mouseover="triggermenu('menu_5')"
      @mouseleave="triggermenuout('menu_5')"
    >
      <a href="#">
        <div class="picto">
          <Vue3Lottie
            :animationData="JSONLott5"
            :autoPlay="false"
            :height="80"
            :width="80"
            ref="menu_5"
          />
        </div>
        <div class="name">
          <h3>Tubos e Calhas</h3>
        </div>
      </a>
    </li>
    <li
      @mouseover="triggermenu('menu_6')"
      @mouseleave="triggermenuout('menu_6')"
    >
      <a href="#">
        <div class="picto">
          <Vue3Lottie
            :animationData="JSONLott6"
            :autoPlay="false"
            :height="80"
            :width="80"
            ref="menu_6"
          />
        </div>
        <div class="name">
          <h3>Tubos e Calhas</h3>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import { triggerRef } from "vue";
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";

import AstronautJSON from "@/assets/lottie/112-book-morph-outline-edited.json";
import JSONLott2 from "@/assets/lottie/2.json";
import JSONLott3 from "@/assets/lottie/3.json";
import JSONLott4 from "@/assets/lottie/4.json";
import JSONLott5 from "@/assets/lottie/5.json";
import JSONLott6 from "@/assets/lottie/6.json";
export default {
  components: {
    Vue3Lottie,
  
  },
  data() {
    return {
      AstronautJSON,
      JSONLott2,
      JSONLott3,
      JSONLott4,
      JSONLott5,
      JSONLott6,
      menu: {
        menu_1: false,
        menu_2: false,
        menu_3: false,
        menu_4: false,
        menu_5: false,
        menu_6: false,
      },
    };
  },
  methods: {
    triggermenu(name) {
      this.$refs[name].play();
      this.menu[name] = true;
    },
    triggermenuout(name) {
      this.$refs[name].stop();
      this.menu[name] = false;
    },
  },
};
</script>
