import formatTitle from '../src/util/formItemUtil';

describe('Test form item title / subtitle formatting', () => {
  let item;

  beforeEach(() => {
    item = {
      firstName: 'John',
      lastName: 'Doe',
      startMonth: 'April',
      startYear: 2021,
      endMonth: 'May',
      endYear: 2021,
    };
  });

  test('Displays string value correctly', () => {
    expect(formatTitle(item, '[str:firstName]')).toBe('John');
  });

  test('Works with multiple string values', () => {
    expect(formatTitle(item, '[str:firstName] [str:lastName]')).toBe(
      'John Doe',
    );
  });

  test('Displays formatted date value correctly', () => {
    expect(formatTitle(item, '[date:startMonth,startYear]')).toBe('Apr 2021');
  });

  test('Works with just month entered', () => {
    expect(formatTitle(item, '[date:startMonth]')).toBe('Apr');
  });

  test('Works with just year entered', () => {
    expect(formatTitle(item, '[date:,startYear]')).toBe('2021');
  });

  test('Works with multiple date values', () => {
    expect(
      formatTitle(
        item,
        '[date:startMonth,startYear] - [date:endMonth,endYear]',
      ),
    ).toBe('Apr 2021 - May 2021');
  });

  test('Works with falsy / null values', () => {
    expect(formatTitle(item, '[str:notExists] [date:a,b]')).toBe(' ');
  });
});
