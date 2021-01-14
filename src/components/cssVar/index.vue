<template>
  <p class="box" :style="styleVal">{{ styleVal["--color"] }}</p>
</template>

<script lang="ts">
import vm from "./vm";

export default vm;
</script>

<style lang="less" scoped>
@import "index";

.box {
  color: var(--color);
}
</style>
