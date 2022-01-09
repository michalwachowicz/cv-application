const getCurrentTabItem = (tabItems) => tabItems.find((item) => item.active);
const setCurrentTabItem = (tabItems, index) =>
  tabItems.map((item, i) => ({ ...item, active: index === i }));

export { getCurrentTabItem, setCurrentTabItem };
