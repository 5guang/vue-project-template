<template>
  <section class="teleport">
    <input type="text" v-model="inputValue" />
    <teleport to="#teleport_target">
      <p>{{ inputValue }}</p>
    </teleport>
  </section>
</template>

<script lang="ts">
import vm from "./vm";

export default vm;
</script>

<style lang="less" scoped>
@import "index";
</style>
