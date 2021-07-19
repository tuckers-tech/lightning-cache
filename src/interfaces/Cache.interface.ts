import { InMemoryStorage } from '../Storage/InMemory.storage';
import { LocalStorage } from '../Storage/Local.storage';

export interface CacheConstructorOptions {
  tokens: {
    token: string;
    cacheType: 'in-memory' | 'local';
  }[];
}

export interface CacheArrayElement {
  token: string;
  cache: InMemoryStorage | LocalStorage;
}
