<template>
  <p class="box">vue3cssVars</p>
</template>

<script lang="ts">
import vm from "./vm";

export default vm;
</script>

<style lang="less" scoped>
@import "index";

.box {
  color: var(--color);
  border: var(--border);
  background: var(--bgColor);
}
</style>
