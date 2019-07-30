import busMallImages from '../src/data/images.js';
import store from '../src/data/storage.js';

const test = QUnit.test;

QUnit.module('');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
}),

test('Get and Save, a Test.', assert => {

    const key = 'bus mall';
    const luxProducts = { product: 'luxury' };

    store.save(key, luxProducts);
    const got = store.get(key);

    assert.deepEqual(got, luxProducts);

});

// test('Bootstrap products if no products present', (assert) => {

//     const products = store.getProducts();

//     assert.deepEqual(products, quidditchProducts);
// });