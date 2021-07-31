export class CacheNotInitializedError extends Error {
  constructor() {
    super(
      'Cache Has Not Been Initialized.  Please call `LightingCache.init()` before `LightingCache.getInstance()`'
    );
  }
}
