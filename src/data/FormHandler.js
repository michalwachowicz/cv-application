import { getCurrentItem, handleDelete, handleSubmit } from '../util/formUtil';

class FormHandler {
  constructor(id, data, listKey, callback) {
    const list = data[listKey];

    this.id = id;
    this.list = list && Array.isArray(list) ? list : [];
    this.item = getCurrentItem(this.list, this.id);
    this.callback = callback;

    this.delete = this.delete.bind(this);
    this.submit = this.submit.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  delete(id) {
    handleDelete(this.list, id || this.id, this.callback);
  }

  submit(id = null) {
    handleSubmit(this.list, this.item, id || this.id, this.callback);
  }

  updateData(data) {
    this.item[data.id] = data.value;
  }
}

export default FormHandler;
