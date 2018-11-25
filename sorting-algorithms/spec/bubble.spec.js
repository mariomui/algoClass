describe('bubble sort', () => {
  it('should sort correctly', () => {
    var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    bubbleSort(nums);
    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    // done();
  });
});

describe('holt\'s bubble sort', () => {
  it('should sort correctly', () => {
    var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    bubbleSort2(nums);
    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    // done();
  });
});

describe('minstack', () => {
  var minClone;
  beforeEach(() => {
    minClone = new MinStack(20);
  });
  it('should pop', () => {
    minClone.push(10);
    expect(minClone.pop()).toEqual(10);
  });
  it('should push', () => {
    minClone.push(13);
    console.log(minClone);
    expect(minClone._storage[0]).toEqual(13);
    expect(minClone.push(10)).toEqual(2);
  });

  it('should use Minstack', () => {
    minClone.push(3);
    minClone.push(1);
    minClone.push(2);
    console.log(minClone, 'minstack');
    expect(minClone.getmin()).toEqual(1);
    minClone.push(0);
    expect(minClone.getmin()).toEqual(0);
    minClone.pop();
    expect(minClone.getmin()).toEqual(1);
  });
});

describe('insertion in place', () => {
  it('insertion', () => {
    var arr = [3, 5, 8, 10, 2, 1];
    var jack = insertionSort(arr);
    expect(JSON.stringify(jack)).toBe(JSON.stringify(arr.sort((a, b) => a - b)));
  });
});
