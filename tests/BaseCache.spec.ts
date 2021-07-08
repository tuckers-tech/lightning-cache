import { BaseCache } from '../src/BaseCache';

const { string } = require('@tensorflow/tfjs-node');

describe('Creates Cache', () => {
  test('Cache Created', () => {
    const baseCache: BaseCache<string, string> = new BaseCache();
  });
});
