import { CustomStorage, StorageResult } from "@/types";
import cookie from "js-cookie";
import { AbstractStorage } from "./abstract";

class SuperCookieStorage implements CustomStorage {
  clear(): void {
    document.cookie = "";
  }
  getItem(key: string): string | null {
    const result = cookie.get(key);
    return result || null;
  }
  removeItem(key: string): void {
    cookie.remove(key);
  }
  setItem(key: string, value: string): void {
    cookie.set(key, value);
  }
}

class CookieStorage extends AbstractStorage {
  constructor() {
    super(new SuperCookieStorage());
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

export const cookieStorage = new CookieStorage();
