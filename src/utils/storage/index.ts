import { StorageType } from "@/constants/storage";
import { AbstractStorage } from "./abstract";
import { cStorage } from "./cookieStorage";
import { sStorage } from "./sessionStorage";

const mapStorage = {
  [StorageType.cookie]: cStorage,
  [StorageType.sessionStorage]: sStorage
};

export const instaceStorage = (type: StorageType): AbstractStorage =>
  mapStorage[type];
