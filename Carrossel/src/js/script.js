const slider = document.querySelector('.container');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

var sectionIndex = 0;

leftArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex > 4) ? sectionIndex + 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) + '%)';
});

rightArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex < 4) ? sectionIndex + 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -100 + '%)';
});



