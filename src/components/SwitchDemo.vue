<template>
  <div>
    <Switch />
    <!-- <div v-for="demoItem in demoArr" :key="demoItem">Switch 的文档</div> -->
  </div>
</template> 

<script lang="ts">
import Switch from "../lib/Switch.vue";
export default {
  components: {
    Switch
  },
  setup() {
    let demoArr = [];
    demoArr.length = 100;
    for (let i = 0; i < demoArr.length; i++) {
      demoArr[i] = i;
    }
    return {
      demoArr
    };
  }
};
</script>