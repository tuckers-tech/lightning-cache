import { StorageEngineTypes } from '../enums/StorageEngineTypes.enum';

export interface StorageEngine<T> {
  set(key: string, value: T): void;
  get(key: string): T | false;
  getEngineType(): StorageEngineTypes;
}
