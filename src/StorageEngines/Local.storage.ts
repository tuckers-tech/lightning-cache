import { StorageEngineTypes } from '../enums/StorageEngineTypes.enum';
import { Cacheable } from '../interfaces/Cacheable.interface';
import { StorageEngine } from '../interfaces/StorageEngine.interface';

export class LocalStorage<T extends Cacheable> implements StorageEngine<T> {
  private cache: Storage | null;

  private constructor() {
    if (window.localStorage) {
      this.cache = window.localStorage;
    } else {
      console.error(
        'ERROR::`window.localStorage does not exist in this context.`'
      );
      this.cache = null;
    }
  }
  has(key: string): boolean {
    throw new Error('Method not implemented.');
  }
  remove(key: string): boolean {
    throw new Error('Method not implemented.');
  }
  getAll(): T[] {
    throw new Error('Method not implemented.');
  }
  getEngineType(): StorageEngineTypes {
    throw new Error('Method not implemented.');
  }

  get(key: string): T | undefined {
    throw new Error('Method not implemented.');
  }

  set(key: string, value: T): void {
    throw new Error('Method not implemented.');
  }
}
