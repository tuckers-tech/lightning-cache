import { CacheEngine } from './CacheEngine';
import { StorageEngineTypes } from '../enums/StorageEngineTypes.enum';
import { CacheConstructorOptions } from '../interfaces/Cache.interface';
import { InMemoryStorage } from '../StorageEngines/InMemory.storage';
import { CacheNotInitializedError } from '../errors/CacheNotInitialized.error';

export class LightningCache {
  private static CACHE_OPTIONS: CacheConstructorOptions | null;

  private static instance: CacheEngine | null;

  private constructor(constructorOptions: CacheConstructorOptions) {
    LightningCache.CACHE_OPTIONS = null;
  }

  public static init(constructorOptions: CacheConstructorOptions) {
    LightningCache.CACHE_OPTIONS = constructorOptions;
    LightningCache.instance = new CacheEngine(LightningCache.CACHE_OPTIONS);
  }

  public static getInstance(): CacheEngine {
    if (!LightningCache.instance) throw new CacheNotInitializedError();

    return LightningCache.instance;
  }
}
