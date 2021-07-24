import { CacheEngine } from './CacheEngine';
import { StorageEngineTypes } from '../enums/StorageEngineTypes.enum';
import { CacheConstructorOptions } from '../interfaces/Cache.interface';
import { InMemoryStorage } from '../StorageEngines/InMemory.storage';
import { LocalStorage } from '../StorageEngines/Local.storage';

export class Cache {
  private engine: CacheEngine;

  constructor(constructorOptions: CacheConstructorOptions) {
    this.engine = new CacheEngine(constructorOptions);
  }
}
