export class BaseCache<T, K> {
  cache: Map<T, K>;

  constructor() {
    this.cache = new Map();
  }

  set(key: T, value: K) {
    this.cache.set(key, value);
  }

  hit(key: T) {
    if (this.cache.has(key)) {
      return true;
    }
    return false;
  }
}
