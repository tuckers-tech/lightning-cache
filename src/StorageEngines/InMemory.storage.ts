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

  get(key: string): T | undefined {
    return this.cache.get(key);
  }

  set(key: string, value: T): void {
    this.cache.set(key, value);
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  remove(key: string): boolean {
    return this.cache.delete(key);
  }

  getAll(): T[] {
    const allElements: T[] = [];

    this.cache.forEach((element) => {
      allElements.push(element);
    });

    return allElements;
  }
}
