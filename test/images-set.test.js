import busMallImages from '../src/data/images.js';
import BusMallSet from '../src/images-set.js';

const test = QUnit.test;

QUnit.module('Image Set Testing');

test('Copies source list', assert => {
    //arrange

    //act
    const busMallSet = new BusMallSet(busMallImages);

    //assert
    assert.deepEqual(busMallSet.list, busMallImages);
    assert.notEqual(busMallSet.list, busMallImages);
});

test('Get a random bus mall image', (assert) => {
    //arrange
    const busMallSet = new BusMallSet(busMallImages);

    //act
    const newImage = busMallSet.getRandomImage();

    //assert
    assert.ok(busMallImages.includes(newImage));
});

test('Remove an image from bus mall list', (assert) => {
    //arrange
    const busMallSet = new BusMallSet(busMallImages);
    const imageToRemove = busMallImages[0];
    //act
    busMallSet.removeById(imageToRemove.id);

    //assert
    assert.notOk(busMallSet.list.includes(imageToRemove));
});