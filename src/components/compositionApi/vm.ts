import {
  computed,
  ComputedRef,
  defineComponent,
  reactive,
  ref,
  toRefs
} from "vue";

interface ListItem {
  name: string;
  age: number;
}
interface State {
  msg: string;
  list: ListItem[];
  word: ComputedRef<string>;
}

export default defineComponent({
  setup() {
    const message = ref("hellow");

    const state = reactive<State>({
      msg: "",
      list: [],
      word: computed(() => message.value + " world")
    });

    return {
      ...toRefs(state)
    };
  }
});
