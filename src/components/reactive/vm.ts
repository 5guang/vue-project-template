import {
  defineComponent,
  isProxy,
  isReactive,
  isReadonly,
  markRaw,
  onMounted,
  reactive,
  readonly,
  ref,
  shallowReactive,
  shallowReadonly
} from "vue";

export default defineComponent({
  setup() {
    /**-----------------ref----------------------- */

    const obj = { foo: 1 };
    const msg = ref("hello world");
    // ref的本质是reactive，即ref(obj)相当于reactive({value : obj})
    /**-----------------reactive----------------------- */

    const state = reactive({
      name: "",
      obj: {
        age: 9
      }
    });
    let shallowState = shallowReactive({
      name: "vue",
      obj: {
        age: 9
      }
    });
    onMounted(() => {
      // shallowState.name = "vue3";
      shallowState.obj.age = 100;
      // shallowState.name = "vue3";
    });
    console.log(isReactive(state));
    console.log(isReactive(shallowState.obj.age));

    /**------------------readonly---------------------- */

    const readonlyState = readonly(state);
    const shallowReadonlyState = shallowReadonly(state);
    // 应用场景 在父组件能修改 子组件可以修改时

    console.log(isReadonly(shallowReadonlyState.obj.age));
    console.log(isReadonly(shallowReadonlyState));

    /**------------------是否时Proxy对象---------------------- */

    console.log(isProxy(state));
    console.log(isProxy(shallowState));
    console.log(isProxy(readonlyState));
    console.log(isProxy(shallowReadonlyState));
    console.log(isProxy(obj));

    /**------------------markRaw---------------------- */
    // 哪些数据是可以被代理的：Object 、Array、Map、Set、WeakMap、WeakSet, 非 Object.isFrozen

    Object.freeze(obj);

    // Object.isFrozen(obj) ==> true
    // proxyObj === obj
    const proxyObj = reactive(obj);
    // proxyObj.foo = 555; 会报错
    // console.log(proxyObj.foo);

    //  __v_skip: true 不回被代理
    const objskip = reactive({
      foo: 0,
      ["__v_skip"]: true
    });

    // objskip 是原始数据对象
    console.log(objskip);

    shallowState = markRaw(shallowState);

    console.log(shallowState);

    /**------------------watch---------------------- */

    // // 所有依赖响应式对象监听
    // watchEffect(() => {
    //   console.log(msg.value);
    // });

    // // 特定响应式对象监听
    // watch(
    //   () => state.name,
    //   () => {
    //     console.log("watch searchInput:");
    //   }
    // );

    // // 特定响应式对象监听 可以获取新旧值
    // watch(
    //   () => msg.value,
    //   (newVal, oldVal) => {
    //     console.log("watch searchInput:", newVal, oldVal);
    //   }
    // );

    // // 多响应式对象监听
    // watch([state.age, state.name], ([newAge, newName], [oldAge, oldName]) => {
    //   // .....
    // });

    // // 非懒加载方式监听 可以设置初始值
    // watch(
    //   () => state.age,
    //   (newVal, oldVal) => {
    //     console.log("watch searchInput:", newVal, oldVal);
    //   },
    //   {
    //     immediate: true
    //   }
    // );

    return {
      msg,
      shallowState,
      objskip
    };
  }
});
