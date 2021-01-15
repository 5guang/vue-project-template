/* eslint-disable */
import { defineComponent, onMounted, onUpdated, ref } from "vue";

export default defineComponent({
  beforeCreate() {
    console.log("options: beforeCreate");
  },
  created() {
    console.log("options: create");
  },
  mounted() {
    console.log("options: mounted");
  },
  updated() {
    console.log("options: updated");
  },
  setup() {
    console.log("composition: setup");
    onMounted(() => {
      console.log("composition: mounted");
    });
    onMounted(() => {
      console.log("composition: mounted1");
    });
    onUpdated(() => {
      console.log("composition: onUpdated");
    });
    const msg = ref("hello world");

    const changeMsg = () => (msg.value = "你好 世界");
    return {
      msg,
      changeMsg
    };
  }
});
