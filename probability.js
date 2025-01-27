export class Probability{
    constructor(number, out_of) {
        this.value = number/out_of
      }
    
    equals(p){
        return this.value == p.value;
    }
}
