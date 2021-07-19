export interface CacheStorage {
  set(key: string, value: string): void;
  get(key: string): string | false;
}
