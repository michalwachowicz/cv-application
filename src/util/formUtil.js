const findItemIndex = (list, id) => list.findIndex((item) => item.id === id);
const getCurrentItem = (list, id) => list.find((item) => item.id === id) || {};

const handleSubmit = (list, object, id, callback) => {
  const index = list.findIndex((item) => item.id === id);
  const item = { ...object, id };

  if (index > -1) list.splice(index, 1, item);
  else list.push(item);

  callback(list);
};

const handleDelete = (list, id, callback) => {
  const index = findItemIndex(list, id);
  if (index > -1) list.splice(index, 1);

  callback(list);
};

export { getCurrentItem, handleSubmit, handleDelete };
