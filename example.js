var test = require('./');
var wait = require('co-wait');

test('passes', function*(t) {
  t.ok(true);
  yield wait(500);
  t.ok(true);
});

test('fails', function*(t) {
  t.ok(true);
  yield wait(500);
  t.ok(false);
});

test('throws', function*(t) {
  t.ok(true);
  yield wait(500);
  throw new Error('oops');
});
