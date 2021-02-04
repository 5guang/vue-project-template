import { getElement } from "./tools";

export const addStyles = (
  el: HTMLElement | string,
  styles: Partial<CSSStyleDeclaration>
) => {
  const ele = getElement(el);
  ele && Object.assign(ele.style, styles);
};

export const addClass = (el: HTMLElement | string, className: string) => {
  const ele = getElement(el);
  ele && ele.classList.add(className);
};
