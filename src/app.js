import store from './data/store.js';
import BusMallSet from '../src/images-set.js';


const buttonOne = document.getElementsByClassName('button-1')[0];
const buttonTwo = document.getElementsByClassName('button-2')[0];
const buttonThree = document.getElementsByClassName('button-3')[0];
const divImages = document.getElementById('image-section');

let turns = 0;
const imageSetArray = [];
let purgatory = [];

divImages.classList.remove('hidden');
const focusGroupImages = store.getImages();
let masterListImageSet = new BusMallSet(focusGroupImages);

const randomImageOne = masterListImageSet.getRandomImage();
// console.log(randomImageOne);
masterListImageSet.removeById(randomImageOne.id);
// console.log(masterListImageSet);
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
    // const appearedImages = store.getAppearedProducts(purgatory.code);
    // // console.log(appearedImages);

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

    if(turns === 25) {
        divImages.classList.add('hidden');
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
            // console.log(tracker.id, listImage.id);
            if(tracker.id === listImage.id) {
                listImage.count = listImage.count + 1;
                // console.log('anything', listImage.count);
                store.saveResults(chosenImages);
                return;
            }
        } 
        const newListImage = {
            id: tracker.id,
            count: 1,
        };
        chosenImages.push(newListImage);
        // console.log(chosenImages);
    }
    store.saveResults(chosenImages);
}
// display results 

// thank them for


    // function trackAllShown(allShown) {
    //     const allShownImages = store.getAppeared();
    //     if(allShownImages.length === 0) {
    //         const newShownImage = {
    //             id: allShown.id,
    //             count: 1,
    //         };
    //         allShownImages.push(newShownImage);
    //     }
    
    // }


    // allShown = [...purgatory, ...allShown];
    //     // console.log(allShown);
    
    //     idArray = allShown.map(a => a.id);
    //     console.log(idArray);
    
    //     const shownImages = store.getAppeared();
    //     if(shownImages.length === 0) {
    //         const newShownImage = {
    //             id: idArray[0][1][2],
    //             count: 1,
    //         };
    //         shownImages.push(newShownImage);
    //     }
    //     else {
    //         for(let i = 0; i < shownImages.length; i++) {
    //             const shownImage = shownImages[i];
    //             if(idArray === shownImage.id) {
    //                 shownImage.count = shownImage.count + 1;
    //                 store.saveResults(shownImages);
    //                 return;
    //             }
    //         }
    //         const newShownImage = {
    //             id: idArray,
    //             count: 1, 
    //         };
    //         shownImages.push(newShownImage);
    //     }
    //     store.saveResults(shownImages);
    // }