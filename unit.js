class Unit {
  constructor(ratioToRelativeUnit = 1, relativeUnit){
    if (relativeUnit) {
        this._baseUnit = relativeUnit._baseUnit;
        this._ratioToBaseUnit = ratioToRelativeUnit * relativeUnit._ratioToBaseUnit;
    } else {
        this._baseUnit = this;
        this._ratioToBaseUnit = ratioToRelativeUnit // this is the magic bit
    }
  }
  amountInThisUnit(otherAmount, otherUnit){
    if (!this.isCompatibleWith(otherUnit)){
        throw new TypeError("Incompatible Units");
    }
    return otherAmount * otherUnit._ratioToBaseUnit / this._ratioToBaseUnit;
  }

  isCompatibleWith(other){
      return this._baseUnit === other._baseUnit;
  }
}

const TEASPOON = new Unit();
const TABLESPOON = new Unit(3, TEASPOON);
const OUNCE = new Unit(2, TABLESPOON);

export {TEASPOON, TABLESPOON, OUNCE}