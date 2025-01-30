import { TEASPOON } from "./unit";

export class Volume {
  constructor(amount, unit) {
    this._amount = amount
    this._unit = unit
  }
  equals(other){
    return this._amount ==
      this._unit.amountInThisUnit(other._amount, other._unit);
  }

  add(other){
    let amount = this._unit.amountInThisUnit(this._amount, TEASPOON)
    + other._unit.amountInThisUnit(other._amount, TEASPOON);
    return new Volume(amount, TEASPOON)
  }
}