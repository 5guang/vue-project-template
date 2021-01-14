import { defineComponent, useCssVars } from "vue";

export default defineComponent({
  props: {
    color: {
      type: String,
      default: "red"
    },
    bgColor: {
      type: String,
      default: "yellow"
    }
  },
  data() {
    return {
      border: "1px solid pink"
    };
  },
  // 不要对props进行解构，会使解构属性失去响应式
  setup(props) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    // const { color } = props;
    // const { color } = toRefs(props);
    // watch(
    //   () => color,
    //   (n, o) => {
    //     console.log(n);
    //   }
    // );
    useCssVars(ctx => {
      return {
        border: ctx.border,
        bgColor: props.bgColor,
        color: props.color
      };
    });
  }
});
