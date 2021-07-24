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
  test('Get Value gets undefined value if does not exist', () => {
    expect(baseCache.get('foo')).toBeUndefined();
  });

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

describe('has', () => {
  test('Has Returns False if no value', () => {
    expect(baseCache.has('foo')).toBe(false);
  });

  test('Has Returns true if value exists', () => {
    baseCache.set('foo', user1);

    expect(baseCache.has('foo')).toBe(true);
  });
});

describe('remove', () => {
  test('remove Returns False if no value', () => {
    expect(baseCache.remove('foo')).toEqual(false);
  });

  test('remove Returns true if value is removed', () => {
    baseCache.set('foo', user1);

    const result = baseCache.remove('foo');

    expect(result).toBe(true);
    expect(baseCache.get('foo')).toBeUndefined();
  });
});

describe('getAll', () => {
  test('remove Returns False if no value', () => {
    expect(baseCache.getAll()).toEqual([]);
  });

  test('remove Returns true if value is removed', () => {
    baseCache.set('foo', user1);
    baseCache.set('bar', user2);

    expect(baseCache.getAll()).toEqual([user1, user2]);
  });
});
