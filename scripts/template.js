/* eslint-disable */
module.exports = {
  vueTemplate: compoenntName => {
    return `<template>
  <section class="${getName(compoenntName)}">
    ${getName(compoenntName)}组件
  </section>
</template>

<script lang="ts">
import vm from "./vm";

export default vm;
</script>

<style lang="less" scoped>
@import "index";
</style>
`
  },
  entryTemplate: `export { default } from "./index.vue";
`,
  vmTemplate(name) {
    return `import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  }
});
`
  }
};

function filter(str) {
  str = getName(str);
  return capitalize(camelize(str));
}
function getName(str) {
  if (str.includes('/')) {
    const index = str.lastIndexOf('/');
    str = str.substr(index + 1)
  }
  return str;
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
};
const camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
};