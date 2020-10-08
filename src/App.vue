<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from "vue";

export default {
  name: "App",
  components: {},
  setup(props) {
    const menuVisible = ref(true);
    provide("menuVisible", menuVisible);
  }
};
</script>
