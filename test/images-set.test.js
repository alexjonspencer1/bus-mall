import busMallImages from '../src/data/images.js';
import BusMallSet from '../src/images-set.js';

const test = QUnit.test;

QUnit.module('Image Set Testing');

test('Copies source list', assert => {

    const busMallSet = new BusMallSet(busMallImages);
    assert.deepEqual(busMallSet.list, busMallImages);
    assert.notEqual(busMallSet.list, busMallImages);
});

test('Get a random bus mall image', (assert) => {

    const busMallSet = new BusMallSet(busMallImages);
    const newImage = busMallSet.getRandomImage();
    assert.ok(busMallImages.includes(newImage));
});

test('Remove an image from bus mall list', (assert) => {
 
    const busMallSet = new BusMallSet(busMallImages);
    const imageToRemove = busMallImages[0];
    busMallSet.removeById(imageToRemove.id);
    assert.notOk(busMallSet.list.includes(imageToRemove));
});