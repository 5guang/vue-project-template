<template>
  <ul>
    <li>
      <TeloportDemo />
    </li>
    <li>
      <LifeCycle />
    </li>
    <li>
      <V2CssVal color="blue" />
    </li>
    <li>
      <V3CssVal :color="color" @click="changeColor" />
    </li>
    <li>
      <CssModule />
    </li>
  </ul>
</template>

<script lang="ts">
import vm from "./vm";

export default vm;
</script>

<style lang="less" scoped>
@import "index";
</style>
