<template>
  <div>
    <div v-for="demoItem in demoArr" :key="demoItem">Dialog 的文档</div>
  </div>
</template> 

<script lang="ts">
export default {
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