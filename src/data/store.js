import busMallImages from './/images.js';

const IMAGE_KEY = 'images';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getImages() {

        let imageList = store.get(IMAGE_KEY);

        if(!imageList) {
            store.save(IMAGE_KEY, busMallImages); 
            imageList = busMallImages;
        }
        return imageList;
    }
};

export default store;