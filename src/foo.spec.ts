import { sum } from "./foo";

describe('foo', () => {
  it('should be able to to simple math', () => {
    expect(sum(1,1)).toEqual(2);
  });
});