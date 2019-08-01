import store from './data/store.js';
import BusMallSet from '../src/images-set.js';


const buttonOne = document.getElementsByClassName('button-1')[0];
const buttonTwo = document.getElementsByClassName('button-2')[0];
const buttonThree = document.getElementsByClassName('button-3')[0];
const divImages = document.getElementById('image-section');
const finishMessage = document.getElementById('results-id');
const resultLink = document.getElementById('results-link');

let turns = 0;
const imageSetArray = [];
let purgatory = [];
let allShown = [];
let idArray = [];

finishMessage.classList.add('hidden');
resultLink.classList.add('hidden');
divImages.classList.remove('hidden');
const focusGroupImages = store.getImages();
let masterListImageSet = new BusMallSet(focusGroupImages);

const randomImageOne = masterListImageSet.getRandomImage();
masterListImageSet.removeById(randomImageOne.id);
buttonOne.firstChild.src = randomImageOne.image;
buttonOne.id = randomImageOne.id;
imageSetArray.push(randomImageOne);

const randomImageTwo = masterListImageSet.getRandomImage();
masterListImageSet.removeById(randomImageTwo.id);
buttonTwo.firstChild.src = randomImageTwo.image;
buttonTwo.id = randomImageTwo.id;
imageSetArray.push(randomImageTwo);

const randomImageThree = masterListImageSet.getRandomImage();
masterListImageSet.removeById(randomImageThree.id);
buttonThree.firstChild.src = randomImageThree.image;
buttonThree.id = randomImageThree.id;
imageSetArray.push(randomImageThree);

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length; i++) {
    const buttonList = buttons[i];
    buttonList.addEventListener('click', userChoiceOne);
}

function userChoiceOne() {

    const tracker = event.currentTarget;
    tracker.id;

    trackChosenImages(tracker);
    
    masterListImageSet.list = [...masterListImageSet.list, ...purgatory];
    
    const randomImageOneRoundTwo = masterListImageSet.getRandomImage();
    masterListImageSet.removeById(randomImageOneRoundTwo.id);
    buttonOne.firstChild.src = randomImageOneRoundTwo.image;
    buttonOne.id = randomImageOneRoundTwo.id;
    imageSetArray.push(randomImageOneRoundTwo);

    const randomImageTwoRoundTwo = masterListImageSet.getRandomImage();
    masterListImageSet.removeById(randomImageTwoRoundTwo.id);
    buttonTwo.firstChild.src = randomImageTwoRoundTwo.image;
    buttonTwo.id = randomImageTwoRoundTwo.id;
    imageSetArray.push(randomImageTwoRoundTwo);
    
    const randomImageThreeRoundTwo = masterListImageSet.getRandomImage();
    masterListImageSet.removeById(randomImageThreeRoundTwo.id);
    buttonThree.firstChild.src = randomImageThreeRoundTwo.image;
    buttonThree.id = randomImageThreeRoundTwo.id;
    imageSetArray.push(randomImageThreeRoundTwo);
    turns++;
    
    purgatory = imageSetArray.splice(0, 3);
    allShown = [...purgatory, ...allShown];
    idArray = allShown.map(a => a.id);

    // https://stackoverflow.com/questions/11649255/how-to-count-the-number-of-occurrences-of-each-item-in-an-array
    let occurrences = { };
    for(let i = 0, j = idArray.length; i < j; i++) {
        occurrences[idArray[i]] = (occurrences[idArray[i]] || 0) + 1;
    }
    store.saveAppearedResults(occurrences);

    if(turns === 25) {
        divImages.classList.add('hidden');
        resultLink.classList.remove('hidden');
        finishMessage.classList.remove('hidden');
        finishMessage.textContent = 'Thank you for participating! Please click on the "Charts" button in the upper-right hand corner to view results';
    }
}

function trackChosenImages(tracker) {
    const chosenImages = store.getResults();
    if(chosenImages.length === 0) {
        const newListImage = {
            id: tracker.id,
            count: 1,
        };
        chosenImages.push(newListImage);
    }
    else {
        for(let i = 0; i < chosenImages.length; i++) {
            const listImage = chosenImages[i];
            if(tracker.id === listImage.id) {
                listImage.count = listImage.count + 1;
                store.saveResults(chosenImages);
                return;
            }
        } 
        const newListImage = {
            id: tracker.id,
            count: 1,
        };
        chosenImages.push(newListImage);
    }
    store.saveResults(chosenImages);
    
}
// display results 


// thank them for