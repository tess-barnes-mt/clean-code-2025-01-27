export class Probability{
    constructor(number, outOf) {
        this.value = number/outOf
        this.number = number
        this.out_of = outOf
    }

    equals(other){
        return this.value == other.value;

    }

    combineWith(other){
        return new Probability(this.number * other.number, this.out_of * other.out_of);
    }
}
