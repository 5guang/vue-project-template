import { CustomStorage, StorageResult } from "@/types";
import cookie, { CookieAttributes } from "js-cookie";
import { extend } from "../tools";
import { AbstractStorage } from "./abstract";

class SuperCookieStorage implements CustomStorage {
  constructor(private defaultOpt: CookieAttributes) {}
  clear(): void {
    const cookies = document.cookie.split(";");
    cookies.forEach(v => cookie.remove(v.split("-")[0]));
  }
  getItem(key: string): string | null {
    const result = cookie.get(key);
    return result || null;
  }
  removeItem(key: string): void {
    cookie.remove(key);
  }
  setItem(key: string, value: string, opt: CookieAttributes = {}): void {
    cookie.set(key, value, extend(this.defaultOpt, opt));
  }
}

class CookieStorage extends AbstractStorage {
  constructor(opt: CookieAttributes = { expires: 7 }) {
    super(new SuperCookieStorage(opt));
  }
  setItemByOption(key: string, value: string, opt: CookieAttributes): void {
    cookie.set(key, value, opt);
  }
  getItem(key: string): StorageResult<string> {
    const item = this.storage.getItem(key);

    if (item === null) {
      return {
        success: false,
        error: new Error(`Item with key "${key}" does not exist`)
      };
    }
    return {
      success: true,
      value: item
    };
  }
}

export const cStorage = new CookieStorage();
