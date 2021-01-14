import CssModule from "@/components/cssModule ";
import LifeCycle from "@/components/lifecycle";
import TeloportDemo from "@/components/teleport";
import V2CssVal from "@/components/v2cssVar";
import V3CssVal from "@/components/v3cssVar";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    TeloportDemo,
    LifeCycle,
    V2CssVal,
    V3CssVal,
    CssModule
  },
  setup() {
    const color = ref("red");
    const changeColor = () => (color.value = "blue");
    return {
      color,
      changeColor
    };
  }
});
