const getCurrentTabItemIndex = (tabItems) =>
  tabItems.findIndex((item) => item.active);
const setCurrentTabItem = (tabItems, index) =>
  tabItems.map((item, i) => ({ ...item, active: index === i }));

export { getCurrentTabItemIndex, setCurrentTabItem };
