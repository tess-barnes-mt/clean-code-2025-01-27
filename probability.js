export class Probability{
    constructor(number, outOf) {
        this.value = number/outOf
        this.number = number
        this.outOf = outOf
    }

    equals(other){
        return this.value == other.value;

    }

    combineWith(other){
        return new Probability(this.number * other.number, this.outOf * other.outOf);
    }
}
