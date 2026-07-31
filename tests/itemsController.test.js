const test = require('node:test');
const assert = require('node:assert');
const controller = require('../src/controllers/itemsController');

test('getAllItems returns an array', () => {
  const req = {};
  const res = {
    json: (data) => {
      assert.ok(Array.isArray(data));
    }
  };
  controller.getAllItems(req, res);
});

test('createItem requires a name', () => {
  const req = { body: {} };
  const res = {
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(data) {
      assert.strictEqual(this.statusCode, 400);
      assert.strictEqual(data.error, 'Name is required');
    }
  };
  controller.createItem(req, res);
});
