module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
  this._collection = [];
}

// Методы коллекции
Collection.prototype.values = function () {
  return this._collection;
};

Collection.prototype.at = function (index) {
  if (index <= 0 || index > this._collection.length) {
    return null;
  }

  return this._collection[index - 1];
};

Collection.prototype.append = function (item) {
  if (item instanceof Collection) {
    this._collection = this._collection.concat(item.values());
  } else {
    this._collection = this._collection.concat(item);
  }
};

Collection.prototype.removeAt = function (index) {
  if (index <= 0 || index > this._collection.length) {
    return false;
  }

  this._collection = this._collection
    .slice(0, index - 1)
    .concat(this._collection.slice(index));
  return true;
};

Collection.prototype.count = function () {
  return this._collection.length;
};
// другие методы

/**
 * Создание коллекции из массива значений
 */
Collection.from = function (items) {
  var collection = new Collection();
  collection.append(items);
  return collection;
};
