import store from './data/store.js';
import busMallImages from './data/images.js';
import { getRandomInt } from '../src/utility-functions.js';
import BusMallSet from '../src/images-set.js';
import removeById from '../src/images-set.js';

//DOM ELEMENTS

const buttonOne = document.getElementById('button-1');
const buttonTwo = document.getElementById('button-2');
const buttonThree = document.getElementById('button-3');

let turn = 0;
const imageSetArray = [];

// need to get images list and create a master list class
// generate the first random image
const focusGroupImages = store.getImages();
const masterListImageSet = new BusMallSet(focusGroupImages);
const randomImageOne = masterListImageSet.getRandomImage();
console.log("random image one", randomImageOne);
masterListImageSet.removeById(randomImageOne.id);
buttonOne.firstChild.src = randomImageOne.image;
imageSetArray.push(randomImageOne);
// console.log(imageSetArray);

const randomImageTwo = masterListImageSet.getRandomImage();
console.log("random image two", randomImageTwo);
masterListImageSet.removeById(randomImageTwo.id);
buttonTwo.firstChild.src = randomImageTwo.image;
imageSetArray.push(randomImageTwo);

const randomImageThree = masterListImageSet.getRandomImage();
console.log("random image three", randomImageThree);
masterListImageSet.removeById(randomImageThree.id);
buttonThree.firstChild.src = randomImageThree.image;
imageSetArray.push(randomImageThree);

console.log("image set array", imageSetArray);
console.log("master image set", masterListImageSet);

// start function 

// startFocusGroup();
    
    // ready for the user to click on their image 

button.addEventListener('click', () => {

}


// once they click on their image, it moves them to the next one, register the click as as turn. take the images they didn't click and record that it was viewed. 

// randomly generate three more images from images remaining minus ones just used

// move those into a second holding array 

// move images from first holding array back into master set 

// repeat function if they haven't gone through 25 times 

// if they have gone through 25 times, hide the images

// display results 

// thank them for participating