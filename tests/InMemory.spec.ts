import { InMemoryStorage } from '../src/Storage/InMemory.storage';
import { User } from './fixtures/User';

describe('Creates Cache', () => {
  test('Cache Created', () => {
    const baseCache: InMemoryStorage = InMemoryStorage.getInstance();

    expect(baseCache).not.toBeUndefined();
  });
});

describe('Get/Set', () => {
  test('Set Value Sets Values within cache', () => {
    const baseCache: InMemoryStorage = InMemoryStorage.getInstance();

    baseCache.set('foo', 'bar');

    expect(baseCache.get('foo')).toEqual('bar');
  });

  test('GetValues Within Cache', () => {
    const baseCache: InMemoryStorage = InMemoryStorage.getInstance();

    baseCache.set('foo', 'bar');
    baseCache.set('biz', 'baz');

    expect(baseCache.get('foo')).toEqual('bar');
    expect(baseCache.get('biz')).toEqual('baz');
  });

  test('Can Get / Set Generic Value', () => {
    const testUser = new User({ fName: 'Test', lName: 'User' });

    const baseCache: InMemoryStorage = InMemoryStorage.getInstance();

    baseCache.set('foo', JSON.stringify(testUser));

    expect(baseCache.get('foo')).toEqual(JSON.stringify(testUser));
  });
});
