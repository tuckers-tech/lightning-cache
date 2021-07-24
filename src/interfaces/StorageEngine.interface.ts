import { StorageEngineTypes } from '../enums/StorageEngineTypes.enum';

export interface StorageEngine<T> {
  set(key: string, value: T): void;
  get(key: string): T | undefined;
  has(key: string): boolean;
  remove(key: string): boolean;
  getAll(): T[];
  getEngineType(): StorageEngineTypes;
}
