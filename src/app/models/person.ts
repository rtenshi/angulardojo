
export class Person {
    constructor(public firstName: string, public lastName: string, public del:boolean = false) {}

    public getFullName() {
      return this.firstName + ' ' + this.lastName;
  }
}
