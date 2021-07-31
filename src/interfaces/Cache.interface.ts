import { InMemoryStorage } from '../StorageEngines/InMemory.storage';

export interface CacheToken {
  type: string;
  storageEngine: InMemoryStorage<any>;
  id: string;
}

export interface CacheConstructorOptions {
  tokens: CacheToken[];
}
