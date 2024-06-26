class Person {
  name: string = "Puseletso";
  age: number = 22;
  socialSecurityNumber: number = 258741369
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.socialSecurityNumber = 258741369
  }
  getName(): string {
    return this.name;
  }
  getAge(): number {
    return this.age
  }
}
// const person = new Person("Puseletso", 22);
// console.log(person.getName());
// console.log(person.getAge())
