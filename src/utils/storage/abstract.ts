import { CustomStorage, StorageResult } from "@/types";

export abstract class AbstractStorage {
  constructor(protected storage: CustomStorage) {}

  abstract getItem(key: string): StorageResult;

  setItem(key: string, value: unknown, opt?: PlainObject) {
    this.storage.setItem(key, JSON.stringify(value), opt);
  }
}
