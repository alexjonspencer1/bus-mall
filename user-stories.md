# Technical Plan

## Bus-Mall Technical Plan

Make the following for scaffolding:

* Start with the following: bus-mall.html, user-stores.md, bus-mall.css. 

* Then create test documents: index.html, index.js. 

* Then pull in outside configs: .eslintrc, .gitignore, .travis.yml, etc. 

I will need to develop the aesthetic using HTML and CSS, creating a framework for the site and the image buttons. Once I have the aesthetic created and formed, I can start to work on the flowchart for writing Javascript, and once that's completed, begin work on the Javascript as a whole. 

For the Javascript, I'll need to incorporate several things. I will need to auto generate random images using a random function, and assign the randomly generated numbers to item order in my image array. I will develop three randomly generated images, and after each image, I will splice that image from the array, so that I do not produce any duplicate images. I will then increment the images that are shown (to keep track of how many times they appear). I will then revert to user choice, which will be a button event listener. I will need to create tests for each of these items and write functions that resolve the tests. I intent to store the image visibility count and the user choice selections in local storage. After the user chooses their image, I will then record their choice, and if it has been completed 25 times, I will hide the buttons and show their results in the form of a table. If they have not iterated 25 times, I will then render three more random images from the array of now 17 items. After those populate, I will put back in the original 3 images I removed, to replenish the array to 17 items, and repeat the process. 



## Bus-Mall User Stories

#### User Story | Marketing Research Team

As a lean, early stage startup with limited capital, we have to ensure that the content we're distributing lines up with the public demand. If we fail to conduct proper market research, we may waste limited resources and funding on a catalog of goods that will not sell, and will lose our user's interest. Success of this company is dependent on targeted content that will a) provide an escape from the drudgery of bus travel and b) cause recurring interest in our catalog, in turn generating repeat customers. 

As a team, we want to track the items users have viewed, and further track the items that they have selected amongst the three images. In this case, the more data insight we have, the better we can prepare targeted content. 

#### User Story | Focus Group Participant

As a focus group participant, I want a clean and clear UI experience that properly guides me through the exercise so I can complete my task and earn my focus group gift card. As a participant, I also want clear instructions, and when completed with the task, a summary of my results. 
