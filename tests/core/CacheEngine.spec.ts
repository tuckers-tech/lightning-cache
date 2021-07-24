import { CacheEngine } from '../../src/core/CacheEngine';
import { StorageEngineNotFoundError } from '../../src/errors/StorageEngineNotFound.error';
import { CacheConstructorOptions } from '../../src/interfaces/Cache.interface';
import { InMemoryStorage } from '../../src/StorageEngines/InMemory.storage';
import {
  multiTokenConstructorOptions,
  noTokenConstructorOptions,
  singleTokenConstructorOptions,
} from '../fixtures/TokenConstructorOptions';
import { User, UserConstructorOptions } from '../fixtures/User';
import {
  userOneConstructorOptions,
  userTwoConstructorOptions,
} from '../fixtures/UserConstructorOptions';

let user1: User,
  user2: User,
  cacheEngineNone: CacheEngine,
  cacheEngineSingle: CacheEngine,
  cacheEngineMultiple: CacheEngine;

beforeEach(() => {
  user1 = new User(userOneConstructorOptions);
  user2 = new User(userTwoConstructorOptions);
  cacheEngineNone = new CacheEngine(noTokenConstructorOptions);
  cacheEngineSingle = new CacheEngine(singleTokenConstructorOptions);
  cacheEngineMultiple = new CacheEngine(multiTokenConstructorOptions);
});

describe('Creates Cache', () => {
  test('Cache Created', () => {
    expect(cacheEngineNone).not.toBeUndefined();
  });

  test('Initializes cache', () => {
    expect(cacheEngineSingle.getCacheByType('users')).not.toBeUndefined();
  });

  test('Initializes cache with multiple options', () => {
    expect(cacheEngineMultiple.getCacheByType('users')).not.toBeUndefined();
    expect(cacheEngineMultiple.getCacheByType('posts')).not.toBeUndefined();
  });
});

describe('getCacheByType()', () => {
  test('Return undefined if cant find cache type', () => {
    expect(cacheEngineNone.getCacheByType('users')).toBeUndefined();
  });
});

describe('setValue()', () => {
  test('Throws StorageEngineNotFoundError if storage Engine is not found', () => {
    expect(() => {
      cacheEngineNone.setValue('users', user1);
    }).toThrow(
      new StorageEngineNotFoundError(
        'Unable To Find Storage Engine with type users.  Was it initialized?'
      )
    );
  });

  test('Stores Value', () => {
    cacheEngineSingle.setValue('users', user1);

    expect(cacheEngineSingle.getValue('users', 'id1')).toEqual(user1);
  });
});

describe('getCacheKey()', () => {
  test('Formats Cache Key Correctly', () => {
    expect(cacheEngineNone.getCacheKey('users', 'example')).toEqual(
      'users:example'
    );
  });
});
