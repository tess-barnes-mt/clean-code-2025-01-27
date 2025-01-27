export class Probability{
    constructor(number, out_of) {
        this.value = number/out_of
        this.number = number
        this.out_of = out_of

      }

    equals(p){
        return this.value == p.value;

    }
    combineWith(p){
        return new Probability(this.number * p.number, this.out_of * p.out_of);

}
}
