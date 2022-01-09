const f = require('../src/util/tabUtil');

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
    expect(f.getCurrentTabItem(tabItems)).toEqual({
      title: 'Personal',
      active: true,
    });
  });

  test('Returns undefined when if none of items is active', () => {
    tabItems[0] = { title: 'Personal', active: false };
    expect(f.getCurrentTabItem(tabItems)).toBeUndefined();
  });

  test('Sets current item correctly', () => {
    expect(f.setCurrentTabItem(tabItems, 1)).toEqual([
      { title: 'Personal', active: false },
      { title: 'Experience', active: true },
      { title: 'Download CV', active: false },
    ]);
  });
});
