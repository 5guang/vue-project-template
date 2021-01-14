import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    color: {
      type: String,
      default: "red"
    }
  },
  // 不要对props进行解构，会使解构属性失去响应式
  setup(props) {
    const styleVal = computed(() => ({
      "--color": props.color
    }));
    return {
      styleVal
    };
  }
});
