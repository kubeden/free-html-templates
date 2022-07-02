let getSamples = document.getElementsByClassName('beforeSample');
let getSampleButtons = document.getElementsByClassName('sampleBtn');
let getSampleButtonsBack = document.getElementsByClassName('sampleBtnBack');

for (let index = 0; index < getSampleButtons.length; index++) {
    const element = getSampleButtons[index];

    element.addEventListener('click', function() {
        element.parentElement.querySelector('.beforeSample').style.display = "none";
        element.parentElement.querySelector('.afterSample').style.display = "block";
        element.parentElement.querySelectorAll('.sampleBtnBack')[0].style.display = "block";
        element.parentElement.querySelectorAll('.sampleBtnBack')[1].style.display = "block";
        element.style.display = "none";
    });
}

for (let index = 0; index < getSampleButtonsBack.length; index++) {
    const element = getSampleButtonsBack[index];

    element.addEventListener('click', function() {
        element.parentElement.querySelector('.beforeSample').style.display = "block";
        element.parentElement.querySelector('.afterSample').style.display = "none";
        element.parentElement.querySelector('.sampleBtn').style.display = "block";
        element.parentElement.querySelectorAll('.sampleBtnBack')[1].style.display = "none";
        element.style.display = "none";
    });
}


// function sampleTrigger(element) {
//     element.parentElement.querySelector('.beforeSample').style.display = "none";
//     element.parentElement.querySelector('.afterSample').style.display = "block";
//     element.parentElement.querySelector('.sampleBtnBack').style.display = "block";
//     element.style.display = "none";
// }

// function sampleBack(element) {
//     element.parentElement.querySelector('.beforeSample').style.display = "back";
//     element.parentElement.querySelector('.afterSample').style.display = "none";
//     element.parentElement.querySelector('.sampleBtn').style.display = "none";
//     element.style.display = "none";
// }