import busMallImages from './/images.js';

const IMAGE_KEY = 'images';

const store = {
    storage: window.localStorage,
    // save(key, wizard) {
    //     const json = JSON.stringify(wizard);
    //     store.storage.setItem(key, json);
    // },
    // get(key) {
    //     const json = store.storage.getItem(key);
    //     const wizard = JSON.parse(json);
    //     return wizard;
    // },
    // getImages() {
    //     let imageList = store.get(IMAGE_KEY);

    //     if(!imageList) {
    //         store.save(IMAGE_KEY, busMallImages); 
    //         products = busMallImages;
    //     }
    //     return imageList;
    // }
};

export default store;