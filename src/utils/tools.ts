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
