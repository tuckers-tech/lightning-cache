export interface userConstructorOptions {
    fName: string;
    lName: string;
}

export class User {
    fName: string;
    lName: string;

    constructor(userConstructorOptions: userConstructorOptions) {
        this.fName = userConstructorOptions.fName;
        this.lName = userConstructorOptions.lName;
    }
}