import {
  CacheArrayElement,
  CacheConstructorOptions,
} from './interfaces/Cache.interface';
import { InMemoryStorage } from './Storage/InMemory.storage';
import { LocalStorage } from './Storage/Local.storage';

export class Cache {
  private cache: CacheArrayElement[] = [];

  constructor(constructorOptions: CacheConstructorOptions) {
    constructorOptions.tokens.forEach((el) => {
      let localCache;

      if (el.cacheType === 'in-memory') {
        localCache = InMemoryStorage.getInstance();
      } else {
        localCache = LocalStorage.getInstance();
      }

      const cacheArrEl: CacheArrayElement = {
        token: el.token,
        cache: localCache,
      };

      this.cache.push(cacheArrEl);
    });
  }

  private getCacheByToken(targetToken: string) {
    return this.cache.find((cacheEntry) => cacheEntry.token === targetToken);
  }
}
