import { LightningCache } from '../../src';
import { CacheNotInitializedError } from '../../src/errors/CacheNotInitialized.error';
import { singleTokenConstructorOptions } from '../fixtures/TokenConstructorOptions';

describe('Creates Lighting Cache', () => {
  test('Lightning Cache is available', () => {
    expect(LightningCache).not.toBeUndefined();
  });

  test('Lightning Cache throws error if used without init', () => {
    expect(() => {
      LightningCache.getInstance();
    }).toThrow(new CacheNotInitializedError());
  });

  test('Lightning Cache Init Creates Cache', () => {
    LightningCache.init(singleTokenConstructorOptions);
    expect(LightningCache.getInstance()).not.toBeUndefined();
  });

  test('Lightning Cache creates Singleton', () => {
    LightningCache.init(singleTokenConstructorOptions);

    const cache1 = LightningCache.getInstance();
    const cache2 = LightningCache.getInstance();

    expect(cache1).toBe(cache2);
  });
});
