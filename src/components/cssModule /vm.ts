/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineComponent, useCssModule } from "vue";

export default defineComponent({
  setup() {
    // 自定义名称
    const nameModule = useCssModule("nameModule");
    // 默认名称
    const $style = useCssModule();
    return {};
  }
});
