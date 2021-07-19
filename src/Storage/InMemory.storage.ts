import { CacheStorage } from '../interfaces/CacheStorage.interface';

export class InMemoryStorage implements CacheStorage {
  private static instance: InMemoryStorage;

  private cache: Map<string, string>;

  private constructor() {
    this.cache = new Map<string, string>();
  }

  public static getInstance(): InMemoryStorage {
    if (!InMemoryStorage.instance) {
      InMemoryStorage.instance = new InMemoryStorage();
    }

    return InMemoryStorage.instance;
  }

  set(key: string, value: string): void {
    this.cache.set(key, value);
  }

  get(key: string): string | false {
    const val = this.cache.get(key);

    return val ? val : false;
  }
}
