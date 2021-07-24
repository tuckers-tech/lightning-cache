import { InMemoryStorage } from '../StorageEngines/InMemory.storage';
import { LocalStorage } from '../StorageEngines/Local.storage';
import { Cacheable } from '../core/Cacheable';

export interface CacheToken {
  type: string;
  storageEngine: InMemoryStorage<Cacheable> | LocalStorage<Cacheable>;
  id: string;
}

export interface CacheConstructorOptions {
  tokens: CacheToken[];
}
