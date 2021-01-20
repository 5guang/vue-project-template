import { StorageResult } from "@/types";
import { AbstractStorage } from "./abstract";

class SessionStorage extends AbstractStorage {
  constructor() {
    super(sessionStorage);
  }
  getItem<T>(key: string): StorageResult<T> {
    const item = this.storage.getItem(key);

    if (item === null) {
      return {
        success: false,
        error: new Error(`Item with key "${key}" does not exist`)
      };
    }

    let value: unknown;

    try {
      value = JSON.parse(item);
    } catch (error) {
      return {
        success: false,
        error
      };
    }
    return {
      success: true,
      value: value as T
    };
  }
}

export const sStorage = new SessionStorage();
