export class Book {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}