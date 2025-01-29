import {Probability} from "./probability";

describe('Test Probability...', () => {
    test('Two equal probabilities are equal', () => {
        expect(new Probability(1,2).equals(new Probability(1,2))).toBe(true);
    })
    test('Two probabilities not representable in binary are are equal', () => {
        expect(new Probability(2,5).equals(new Probability(2,5))).toBe(true);
    })
    test('Two inequal probabilities are inequal', () => {
        expect(new Probability(1,2).equals(new Probability(1,3))).toBe(false);
    })
})

describe('Test Probabilities combined', () => {
    test('Probabilities combine together correctly', () => {
        expect(new Probability(1,2).combineWith(new Probability(1,2)).equals(new Probability(1,4))).toBe(true);
    })
    test('Probabilities combined are order agnostic', () => {
        const probabilityA = new Probability(1,3)
        const probabilityB = new Probability(1,2)
        expect(probabilityA.combineWith(probabilityB).equals(probabilityB.combineWith(probabilityA))).toBe(true);
    })
    test('Probabilities 2/5 combined are order agnostic', () => {
        const probabilityA = new Probability(2,5)
        const probabilityB = new Probability(2,5)
        expect(probabilityA.combineWith(probabilityB).equals(probabilityB.combineWith(probabilityA))).toBe(true);
    })
    test('Probabilities 2/5 are combined successfully', () => {
        const probabilityA = new Probability(2,5)
        const probabilityB = new Probability(2,5)
        const expectedProbability = new Probability(4,25)
        expect(probabilityA.combineWith(probabilityB).equals(expectedProbability)).toBe(true);
    })
    test('Probabilities 2/5 combined are order agnostic', () => {
        const probabilityA = new Probability(2,5)
        const probabilityB = new Probability(1,1)
        expect(probabilityA.combineWith(probabilityB).equals(probabilityB.combineWith(probabilityA))).toBe(true);
    })
})