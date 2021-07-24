import { Cacheable } from '../core/Cacheable';
import { StorageEngineTypes } from '../enums/StorageEngineTypes.enum';
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
  getEngineType(): StorageEngineTypes {
    throw new Error('Method not implemented.');
  }

  get(key: string): false | T {
    throw new Error('Method not implemented.');
  }

  set(key: string, value: T): void {
    throw new Error('Method not implemented.');
  }
}
