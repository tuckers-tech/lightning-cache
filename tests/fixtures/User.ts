import { Cacheable } from '../../src/interfaces/Cacheable.interface';

export interface UserConstructorOptions {
  id: string;
  fName: string;
  lName: string;
}

export class User implements Cacheable {
  id: string;
  fName: string;
  lName: string;

  constructor(userConstructorOptions: UserConstructorOptions) {
    this.id = userConstructorOptions.id;
    this.fName = userConstructorOptions.fName;
    this.lName = userConstructorOptions.lName;
  }

  getID(): string {
    return this.id;
  }
}
