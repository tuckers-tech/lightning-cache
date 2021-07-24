import { CacheConstructorOptions } from '../../src/interfaces/Cache.interface';
import { InMemoryStorage } from '../../src/StorageEngines/InMemory.storage';
import { Post } from './Posts';
import { User } from './User';

const singleTokenConstructorOptions: CacheConstructorOptions = {
  tokens: [
    {
      type: 'users',
      storageEngine: new InMemoryStorage<User>(),
      id: 'id',
    },
  ],
};

const multiTokenConstructorOptions: CacheConstructorOptions = {
  tokens: [
    {
      type: 'users',
      storageEngine: new InMemoryStorage<User>(),
      id: 'id',
    },
    {
      type: 'posts',
      storageEngine: new InMemoryStorage<Post>(),
      id: 'id',
    },
  ],
};

const noTokenConstructorOptions: CacheConstructorOptions = {
  tokens: [],
};

export {
  singleTokenConstructorOptions,
  multiTokenConstructorOptions,
  noTokenConstructorOptions,
};
