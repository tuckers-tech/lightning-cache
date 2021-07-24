import { InMemoryStorage } from '../StorageEngines/InMemory.storage';
import { LocalStorage } from '../StorageEngines/Local.storage';

export interface CacheToken {
  type: string;
  // TODO (TUCKER) - This shouldn't export any, need to figure out how to get it to reference any value that implements `Cacheable`
  storageEngine: InMemoryStorage<any> | LocalStorage<any>;
  id: string;
}

export interface CacheConstructorOptions {
  tokens: CacheToken[];
}
