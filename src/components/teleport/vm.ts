import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const inputValue = ref("hello world");

    return {
      inputValue
    };
  }
});
