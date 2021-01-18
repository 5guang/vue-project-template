/* eslint-disable @typescript-eslint/no-explicit-any */
type PlainObject = Record<string, any>;

type UnWrapPromise<T> = T extends Promise<infer V> ? V : T;

type ReturnTypePromiseFunc<T> = T extends (...args: unknown) => Promise<infer V>
  ? V
  : T;

type GetArrayItem<T> = T extends Array<infer P> ? P : T;
