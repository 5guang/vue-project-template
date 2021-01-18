import { StorageType } from "@/constants/storage";
import { AbstractStorage } from "./abstract";
import { cookieStorage } from "./cookieStorage";
import { sStorage } from "./sessionStorage";

const mapStorage = {
  [StorageType.cookie]: cookieStorage,
  [StorageType.sessionStorage]: sStorage
};

export const storage = (type: StorageType): AbstractStorage => mapStorage[type];
