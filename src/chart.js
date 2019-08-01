import store from './data/store.js';
import busMallImages from './data/images.js';

const clickResults = store.getResults();

const imageLabels = [];
const imageData = [];

for(let i = 0; i < clickResults.length; i++) {
    const clickResult = clickResults[i];
    const name = clickResults.map(a => a.id);
    // console.log(clickResults);
    imageLabels.push(name[i]);
    imageData.push(clickResult.count);
}

const clickedCtx = document.getElementById('clicked-chart').getContext('2d');

// eslint-disable-next-line no-unused-vars
const clickedChart = new Chart(clickedCtx, {
    type: 'bar',
    data: {
        labels: imageLabels,
        datasets: [
            {
                label: '# of Clicks',
                data: imageData, 
                borderColor: 'green',
                borderWidth: 2,
                backgroundColor: 'transparent'
            }
        ]
    },
    options: {
        elements: {
            line: {
                tension: 0 // disables bezier curves
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

const viewedCtx = document.getElementById('viewed-chart').getContext('2d');

const viewedImages = store.getAppeared();
console.log(viewedImages);

const viewedLabels = [];
const viewedData = [];

for(let j = 0; j < busMallImages.length; j++) {
    const product = busMallImages[j];
    // console.log(viewedResult);
    viewedData.push(viewedImages[product.id]);
    viewedLabels.push(product.id);
    // const viewedName = viewedImages;
    // // console.log(viewedName);
    // viewedLabels.push(viewedName[j]);
    // viewedData.push(product.count);
}

// eslint-disable-next-line no-unused-vars
const viewedChart = new Chart(viewedCtx, {
    type: 'bar',
    data: {
        labels: viewedLabels, 
        datasets: [
            {
                label: '# of Views',
                data: viewedData, 
                borderColor: 'green',
                borderWidth: 2,
                backgroundColor: 'transparent'
            }
        ]
    },
    options: {
        elements: {
            line: {
                tension: 0 // disables bezier curves
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});