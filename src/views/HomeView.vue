<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <AButton label="Primary" variant="primary" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import AButton from "@/components/AButton.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
    AButton,
  },
});
</script>
