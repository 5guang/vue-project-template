import { isObject, isPlainObject } from "./typeof";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const extend = <T extends PlainObject, U extends PlainObject>(
  target: T,
  source: U
) => Object.assign(target, source);

function lowerCase(input: string) {
  return input && typeof input === "string" ? input.toLowerCase() : input;
}

function upperCase(input: string) {
  return input && typeof input === "string" ? input.toUpperCase() : input;
}

function trim(input: string) {
  return typeof input === "string" ? input.trim() : input;
}

export function compose(...funcs: ((arg: any) => any)[]) {
  return function<T>(x: T) {
    return funcs.reduce(function(arg, fn) {
      return fn(arg);
    }, x);
  };
}

export const trimLowerCase = compose(trim, lowerCase);
export const trimupperCase = compose(trim, upperCase);

/**
 * @description 获取对象的属性
 * @param obj 对象
 * @param str 字符串获取属性的值 例：默认为'a.b.c'的格式
 * @param symbol str的格式 例 若设为 '|' 则str 应为 'a|b|c'
 * @return {*} 返回所查询的属性 若无返回undefined若为空对象返回null
 */
export function getProperty<T>(
  obj: PlainObject,
  str: string,
  symbol = "."
): T | null {
  if (!isPlainObject(obj)) {
    return null;
  }
  try {
    return str
      .split(symbol)
      .reduce(
        (pre, cur) =>
          isObject(pre[cur])
            ? Object.keys(pre[cur]).length > 0
              ? pre[cur]
              : null
            : pre[cur],
        obj
      ) as any;
  } catch (e) {
    return null;
  }
}

export const toRawType = (value: unknown) => {
  return trimLowerCase(Object.prototype.toString.call(value).slice(8, -1));
};

export const URLJoin = (...args: string[]) =>
  args
    .join("/")
    // eslint-disable-next-line no-useless-escape
    .replace(/[\/]+/g, "/")
    .replace(/^(.+):\//, "$1://")
    .replace(/^file:/, "file:/")
    .replace(/\/(\?|&|#[^!])/g, "$1")
    .replace(/\?/g, "&")
    .replace("&", "?");

export const addDaysToDate = (date: Date | string, n: number) => {
  let d = date as Date;
  if (typeof date === "string") {
    d = new Date(date);
  }
  d.setDate(d.getDate() + n);
  return d.toISOString().split("T")[0];
};

export const getElement = (
  element: HTMLElement | string,
  selector = document.querySelector
) => {
  let ele = element as HTMLElement | null;
  if (typeof element === "string") {
    ele = selector(element);
  }
  return ele;
};

// 回到顶部
export const scrollIntoView = (
  element: HTMLElement | string,
  targetElement = document.body
) => {
  const gotopBtn = getElement(element);
  gotopBtn?.addEventListener("click", () =>
    targetElement.scrollIntoView({ behavior: "smooth" })
  );
};

export const browser = {
  versions: (function() {
    const u = navigator.userAgent;
    return {
      //移动终端浏览器版本信息
      trident: u.indexOf("Trident") > -1, //IE内核
      presto: u.indexOf("Presto") > -1, //opera内核
      webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
      gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
      mobile:
        !!u.match(/AppleWebKit.*Mobile/i) ||
        !!u.match(
          /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/
        ), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或者uc浏览器
      iPhone: u.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf("iPad") > -1, //是否iPad
      webApp: u.indexOf("Safari") == -1 //是否web应该程序，没有头部与底部
    };
  })()
};

export const collapse = (id: string) => {
  const input = document.getElementById(id)!;
  let scrollTop = 0;
  input.addEventListener("focus", () => {
    scrollTop = document.scrollingElement!.scrollTop;
  });
  input.addEventListener("blur", () => {
    document.scrollingElement!.scrollTo(0, scrollTop);
  });
};

export const getSelectedText = () => window.getSelection()?.toString();
