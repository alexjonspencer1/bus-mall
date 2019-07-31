import store from './data/store.js';
import BusMallSet from '../src/images-set.js';


const buttonOne = document.getElementById('button-1');
const buttonTwo = document.getElementById('button-2');
const buttonThree = document.getElementById('button-3');
const divImages = document.getElementById('image-section');

let turns = 0;
const imageSetArray = [];
let purgatory = [];

divImages.classList.remove('hidden');
const focusGroupImages = store.getImages();
let masterListImageSet = new BusMallSet(focusGroupImages);
const randomImageOne = masterListImageSet.getRandomImage();
masterListImageSet.removeById(randomImageOne.id);
buttonOne.firstChild.src = randomImageOne.image;
imageSetArray.push(randomImageOne);

const randomImageTwo = masterListImageSet.getRandomImage();
masterListImageSet.removeById(randomImageTwo.id);
buttonTwo.firstChild.src = randomImageTwo.image;
imageSetArray.push(randomImageTwo);

const randomImageThree = masterListImageSet.getRandomImage();
masterListImageSet.removeById(randomImageThree.id);
buttonThree.firstChild.src = randomImageThree.image;
imageSetArray.push(randomImageThree);

const buttons = document.querySelectorAll('button');

for(let i = 0; buttons.length; i++) {
    const buttonList = buttons[i];
    buttonList.addEventListener('click', userChoiceOne);
}

function userChoiceOne() {
    event.preventDefault();

    masterListImageSet.list = [...masterListImageSet.list, ...purgatory];
    
    const randomImageOneRoundTwo = masterListImageSet.getRandomImage();
    masterListImageSet.removeById(randomImageOneRoundTwo.id);
    buttonOne.firstChild.src = randomImageOneRoundTwo.image;
    imageSetArray.push(randomImageOneRoundTwo);
    

    const randomImageTwoRoundTwo = masterListImageSet.getRandomImage();
    masterListImageSet.removeById(randomImageTwoRoundTwo.id);
    buttonTwo.firstChild.src = randomImageTwoRoundTwo.image;
    imageSetArray.push(randomImageTwoRoundTwo);
    

    const randomImageThreeRoundTwo = masterListImageSet.getRandomImage();
    masterListImageSet.removeById(randomImageThreeRoundTwo.id);
    buttonThree.firstChild.src = randomImageThreeRoundTwo.image;
    imageSetArray.push(randomImageThreeRoundTwo);
    turns++;

    purgatory = imageSetArray.splice(0, 3);

    if(turns === 25) {
        divImages.classList.add('hidden');
    }   
}

// display results 

// thank them for