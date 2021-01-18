// eslint-disable-next-line no-underscore-dangle
const _toString = Object.prototype.toString;

export function toTypeString(value: unknown): string {
  return _toString.call(value);
}

export function isObject(obj: unknown): obj is object {
  return obj !== null && typeof obj === "object";
}
export function isPlainObject(obj: unknown): obj is PlainObject {
  return toTypeString(obj) === "[object Object]";
}

export const isArray = Array.isArray;

export function isPrimitive(
  v: unknown
): v is string | number | symbol | boolean {
  return (
    typeof v === "string" ||
    typeof v === "number" ||
    typeof v === "boolean" ||
    typeof v === "symbol"
  );
}
