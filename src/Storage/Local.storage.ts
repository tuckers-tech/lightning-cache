import { CacheStorage } from '../interfaces/CacheStorage.interface';

export class LocalStorage implements CacheStorage {
  private static instance: LocalStorage;

  private cache: Storage | null;

  private constructor() {
    if (window.localStorage) {
      this.cache = window.localStorage;
    } else {
      console.error(
        'ERROR::`window.localStorage does not exist in this context.`'
      );
      this.cache = null;
    }
  }

  public static getInstance(): LocalStorage {
    if (!LocalStorage.instance) {
      LocalStorage.instance = new LocalStorage();
    }

    return LocalStorage.instance;
  }

  set(key: string, value: string): void {
    if (this.cache) {
      this.cache?.setItem(key, value);
    } else {
      console.error('ERROR::Cache Does Not Exist.');
    }
  }

  get(key: string): string | false {
    if (this.cache) {
      const val = this.cache.getItem(key);

      return val ? val : false;
    } else {
      console.error('ERROR::Cache Does Not Exist.');
      return false;
    }
  }
}
