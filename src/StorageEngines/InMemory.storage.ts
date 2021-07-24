import { StorageEngineTypes } from '../enums/StorageEngineTypes.enum';
import { Cacheable } from '../interfaces/Cacheable.interface';
import { StorageEngine } from '../interfaces/StorageEngine.interface';

export class InMemoryStorage<T extends Cacheable> implements StorageEngine<T> {
  private cache: Map<string, T>;
  private engineType = StorageEngineTypes.IN_MEMORY;

  constructor() {
    this.cache = new Map<string, T>();
  }

  getEngineType(): StorageEngineTypes {
    return this.engineType;
  }

  set(key: string, value: T): void {
    this.cache.set(key, value);
  }

  get(key: string): T | false {
    const val = this.cache.get(key);

    return val ? val : false;
  }
}
