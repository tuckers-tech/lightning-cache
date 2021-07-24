import { Cacheable } from '../../src/interfaces/Cacheable.interface';

export interface PostConstructorOptions {
  id: string;
  name: string;
  description: string;
}

export class Post implements Cacheable {
  id: string;
  name: string;
  description: string;

  constructor(postConstructorOptions: PostConstructorOptions) {
    this.id = postConstructorOptions.id;
    this.name = postConstructorOptions.name;
    this.description = postConstructorOptions.description;
  }

  getID(): string {
    return this.id;
  }
}
