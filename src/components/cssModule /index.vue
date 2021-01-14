<template>
  <p :class="nameModule.font">我是有名字的cssModule</p>
  <p :class="$style.red">我是无名cssModule</p>
</template>

<script lang="ts">
import vm from "./vm";

export default vm;
</script>

<style lang="less" module="nameModule">
.font {
  color: var(--color);
  font-size: 21px;
  font-weight: bold;
}
@import "index";
</style>

<style module>
.red {
  color: red;
}
</style>
