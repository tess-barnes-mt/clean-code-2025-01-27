import {TEASPOON, TABLESPOON, OUNCE} from './unit'
import {Volume} from './volume'

describe('Volume', () => {
  test('one teaspoon is much like another', () => {
    expect(new Volume(1,TEASPOON).equals(new Volume(1, TEASPOON))).toBe(true)
  });
  test('four tablespoons are the same as two ounces', () => {
    const FourTablespoons = new Volume(4,TABLESPOON);
    const TwoOunces = new Volume(2,OUNCE);
    expect(FourTablespoons.equals(TwoOunces)).toBe(true);
  });
});