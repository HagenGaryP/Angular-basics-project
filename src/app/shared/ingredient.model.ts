export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
}

/* can also write the above code with accessors as followed:

export class Ingredient {
  constructor(public name: string, public: amount: number) {}
}
*/
