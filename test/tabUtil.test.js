import { getCurrentTabItemId, setCurrentTabItem } from '../src/util/tabUtil';

describe('Test Tab Items data functions', () => {
  let tabItems;

  beforeEach(() => {
    tabItems = [
      { title: 'Personal', active: true },
      { title: 'Experience', active: false },
      { title: 'Download CV', active: false },
    ];
  });

  test('Returns current tab item correctly', () => {
    expect(getCurrentTabItemId(tabItems)).toBe(0);
  });

  test('Returns undefined when if none of items is active', () => {
    tabItems[0] = { title: 'Personal', active: false };
    expect(getCurrentTabItemId(tabItems)).toBe(-1);
  });

  test('Sets current item correctly', () => {
    expect(setCurrentTabItem(tabItems, 1)).toEqual([
      { title: 'Personal', active: false },
      { title: 'Experience', active: true },
      { title: 'Download CV', active: false },
    ]);
  });
});
