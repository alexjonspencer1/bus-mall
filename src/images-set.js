import { getRandomInt } from '../src/utility-functions.js';

class BusMallSet {
    constructor(busMallImages) {
        this.list = busMallImages.slice();
    }
    getRandomImage() {
        const index = getRandomInt(this.list.length);
        const siteImage = this.list[index];
        return siteImage;
    }
    removeById(imageId) {
        const list = this.list
        for(let i = 0; i < list.length; i++) {
            
        }


    }
}

export default BusMallSet;
