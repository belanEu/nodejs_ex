const { EventEmitter } = require('events');
const { existsSync } = require('fs');
const { uuid } = require('uuidv4');
const { writeFile } = require('../utils/fs');
const Image = require('../models/Image');
const { prettifyJsonToString } = require('../utils/prettifyJsonToString');
const { dbDumpFile } = require('../config/config');


class ImageStore extends EventEmitter {
  constructor() {
    super();

    this.images = {};
  }

  initFromDump() {
    if (existsSync(dbDumpFile) === false) {
      return;
    }

    const dump = require(dbDumpFile);

    if (typeof dump === 'object') {
      for (let id in dump) {
        this.images[id] = new Image(
          dump.id,
          dump.name,
          dump.size,
          dump.uploadedAt,
          dump.mimeType
          );
      }
    }
  }

  /**
   * 
   * @param {String} name 
   * @param {Number} size 
   * @param {Number} uploadedAt 
   * @param {String} mimeType 
   */
  insert(name, size, body, uploadedAt, mimeType) {
    const id = uuid();
    this.images[id] = new Image(id, name, size, body, uploadedAt, mimeType);

    this.emit('changed');
  }

  /**
   * 
   * @param {String} id 
   * @returns {String}
   */
  remove(id) {
    delete this.images[id];

    this.emit('changed');

    return id;
  }

  /**
   * 
   * @param {Array} columns 
   * @returns {Array}
   */
  getAll(columns) {
    return Object.values(this).map(image => {
      const res = {};
      columns.forEach(column => res[column] = image[column]);

      return res;
    });
  }

  /**
   * 
   * @param {String} id 
   * @returns {?Image}
   */
  findOne(id) {
    return this.images[id] ? this.images[id] : null;
  }

  /**
   * 
   * @returns {String}
   */
  toJsonString() {
    return prettifyJsonToString(this.images);
  }
}

const store = new ImageStore();

store.initFromDump();

store.on('changed', () => {
  writeFile(dbDumpFile, store.toJsonString());
});

module.exports = store;