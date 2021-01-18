export type StorageResult<T = unknown> =
  | { success: true; value: T }
  | { success: false; error: Error };

export interface CustomStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}
