import CssModule from "@/components/cssModule ";
import LifeCycle from "@/components/lifecycle";
import Loading from "@/components/MySuspense";
// import TeloportDemo from "@/components/teleport";
import VueReactive from "@/components/reactive";
// import V3CssVal from "@/components/v3cssVar";
import V2CssVal from "@/components/v2cssVar";
import { defineAsyncComponent, defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    TeloportDemo: defineAsyncComponent(() => import("@/components/teleport")),
    LifeCycle,
    VueReactive,
    V2CssVal,
    V3CssVal: defineAsyncComponent({
      loader: () =>
        new Promise((r, v) => {
          setTimeout(() => {
            r(import("@/components/v3cssVar").then());
          }, 3000);
        }),
      loadingComponent: Loading,
      delay: 200,
      timeout: 3000
    }),
    CssModule
  },
  // components: {
  //   TeloportDemo,
  //   LifeCycle,
  //   V2CssVal,
  //   V3CssVal,
  //   CssModule
  // },
  setup() {
    const color = ref("red");
    const changeColor = () => (color.value = "blue");
    return {
      color,
      changeColor
    };
  }
});
