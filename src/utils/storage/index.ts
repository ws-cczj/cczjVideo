import { MMKV } from "react-native-mmkv";

export const userStorage = new MMKV({
  id: "user-storage",
  path: `storage`,
  encryptionKey: "cczj",
});

export const videoStorage = new MMKV({
  id: "video-storage",
  path: `storage`,
  encryptionKey: "cczj",
});