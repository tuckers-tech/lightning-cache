import { StorageEngineTypes } from '../../src/enums/StorageEngineTypes.enum';
import { InMemoryStorage } from '../../src/StorageEngines/InMemory.storage';
import { User, UserConstructorOptions } from '../fixtures/User';
import {
  userOneConstructorOptions,
  userTwoConstructorOptions,
} from '../fixtures/UserConstructorOptions';

let user1: User, user2: User, baseCache: InMemoryStorage<User>;

beforeEach(() => {
  user1 = new User(userOneConstructorOptions);
  user2 = new User(userTwoConstructorOptions);
  baseCache = new InMemoryStorage();
});

describe('Creates Cache', () => {
  test('Cache Created', () => {
    expect(baseCache).not.toBeUndefined();
  });

  test('Engine Type Is Set', () => {
    expect(baseCache.getEngineType()).toBe(StorageEngineTypes.IN_MEMORY);
  });
});

describe('Get/Set', () => {
  test('Set Value Sets Values within cache', () => {
    baseCache.set('foo', user1);

    expect(baseCache.get('foo')).toEqual(user1);
  });

  test('GetValues Within Cache', () => {
    baseCache.set('foo', user1);
    baseCache.set('biz', user2);

    expect(baseCache.get('foo')).toEqual(user1);
    expect(baseCache.get('biz')).toEqual(user2);
  });

  test('Can Get / Set Generic Value', () => {
    baseCache.set('foo', user1);

    expect(baseCache.get('foo')).toEqual(user1);
  });
});
