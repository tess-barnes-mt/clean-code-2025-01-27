export class Volume {
  constructor(amount, unit) {
    this._amount = amount
    this._unit = unit
  }
  equals(other){
    return this._amount ==
      this._unit.amountInThisUnit(other._amount, other._unit);
  }
  
}