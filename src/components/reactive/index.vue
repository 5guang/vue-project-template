<template>
  <section class="reactive">
    <p>
      shallowState.name: <input type="text" v-model="shallowState.name" />{{
        shallowState.name
      }}
    </p>
    <p>
      objskip.foo: <input type="text" v-model="objskip.foo" />{{ objskip.foo }}
    </p>

    <p>
      shallowState.obj.age:
      <input type="number" v-model="shallowState.obj.age" />{{
        shallowState.obj.age
      }}
    </p>
  </section>
</template>

<script lang="ts">
import vm from "./vm";

export default vm;
</script>

<style lang="less" scoped>
@import "index";
</style>
