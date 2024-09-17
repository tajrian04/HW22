let allImages = Array.from(document.querySelectorAll('.image'));
let highLight = document.querySelector('.highlight');
let cross = document.querySelector('.cross');
let right = document.querySelector('.right');
let left = document.querySelector('.left');
let highLightImage = document.querySelector('.preview');
let currentPosition = 0;

let rightSide = ()=>{
    if( currentPosition == allImages.length - 1){
        currentPosition = 0;
    }else{
        currentPosition += 1;
    }
    highLightImage.src = allImages[currentPosition].src;
}

let leftSide = ()=>{
    if( currentPosition == allImages.length - 1){
        currentPosition = 0;
    }else{
        currentPosition -= 1;
    }
    highLightImage.src = allImages[currentPosition].src;
}

allImages.map((elmt, index) => {
    elmt.addEventListener('click', function(){
        currentPosition = index;
        highLightImage.src = allImages[index].src;
        highLight.classList.add('active');

        right.addEventListener('click', rightSide)
        left.addEventListener('click', leftSide)
    });

});



cross.addEventListener('click', ()=> {
    highLight.classList.remove('active');
});

highLight.addEventListener('click', (e)=> {
    if(e.target.classList.contains('active')){
        highLight.classList.remove('active');
  }
});