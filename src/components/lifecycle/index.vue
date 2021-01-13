<template>
  <section class="lifecycle">
    生命周期对比
    <p>{{ msg }}</p>
    <button @click="changeMsg">change</button>
  </section>
</template>

<script lang="ts">
import vm from "./vm";

export default vm;
</script>

<style lang="less" scoped>
@import "index";
</style>
