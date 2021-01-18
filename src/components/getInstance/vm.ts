import { defineComponent, getCurrentInstance, onMounted } from "vue";

export default defineComponent({
  setup() {
    const internalInstance = getCurrentInstance(); // works

    const id = useComponentId(); // works

    const handleClick = () => {
      getCurrentInstance(); // doesn't work
      useComponentId(); // doesn't work

      internalInstance; // works
    };

    onMounted(() => {
      getCurrentInstance(); // works
    });
    return {};
  }
});

// also works if called on a composable
function useComponentId() {
  const instance = getCurrentInstance();
  return instance && instance.uid;
}
