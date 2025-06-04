class TodoCounter {
  constructor(todos, templateSelector) {
    this._element = document.querySelector(templateSelector);
    this._completed = todos.filter((todo) => todo.completed).length;
    this._total = todos.length;
    this._updateText();
  }

  _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }

  updateCompleted = (increment) => {
    this._completed += increment ? 1 : -1;
    this._updateText();
  };

  updateTotal = (increment) => {
    this._total += increment ? 1 : -1;
    this._updateText();
  };
}

export default TodoCounter;
