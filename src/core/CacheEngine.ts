import { StorageEngineNotFoundError } from '../errors/StorageEngineNotFound.error';
import {
  CacheConstructorOptions,
  CacheToken,
} from '../interfaces/Cache.interface';
import { Cacheable } from '../interfaces/Cacheable.interface';

export class CacheEngine {
  private cache: CacheToken[] = [];

  constructor(constructorOptions: CacheConstructorOptions) {
    constructorOptions.tokens.forEach((token) => {
      this.addDataType(token);
    });
  }

  public setValue<T extends Cacheable>(type: string, value: T): void {
    const token = this.getCacheByType(type);

    if (!token?.storageEngine) {
      throw new StorageEngineNotFoundError(
        `Unable To Find Storage Engine with type ${type}.  Was it initialized?`
      );
    }

    token.storageEngine.set(this.getCacheKey(type, value.getID()), value);
  }

  public getCacheKey(type: string, id: string) {
    return `${type}:${id}`;
  }

  public getValue<T extends Cacheable>(type: string, id: string): T {
    const token = this.getCacheByType(type);

    if (!token?.storageEngine) {
      throw new StorageEngineNotFoundError(
        `Unable To Find Storage Engine with type ${type}.  Was it initialized?`
      );
    }

    return token.storageEngine.get(this.getCacheKey(type, id));
  }

  public getCacheByType(targetType: string): CacheToken | undefined {
    return this.cache.find((cacheEntry) => cacheEntry.type === targetType);
  }

  private addDataType(token: CacheToken): void {
    if (this.cache.find((cacheToken) => cacheToken.type === token.type)) {
      throw new CacheTypeAlreadyExistsError(
        `Type '${token.type}' already exists in the cache.`
      );
    }

    this.cache.push(token);
  }
}
