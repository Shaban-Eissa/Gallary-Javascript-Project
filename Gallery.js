let galleryImages = document.querySelectorAll('.gallery') ;
let getLatestImg ;

galleryImages.forEach(function (image , index){

    image.onclick = function (){
        getLatestImg = index + 1 ;

        let containerWindow = document.body ;
        let newImgWindow = document.createElement("div") ;
        containerWindow.appendChild(newImgWindow) ;
        newImgWindow.setAttribute('class' , 'img-window') ;
        newImgWindow.setAttribute('onclick' , 'closeImg()') ;

        let newImage = image.firstElementChild.cloneNode() ;
        newImgWindow.appendChild(newImage) ;
        newImage.classList.remove('image-section') ;
        newImage.classList.add('popup-img') ;
        newImage.setAttribute('id' , 'current-img') ;
        newImage.onload = function (){
            let newNext = document.createElement('a') ;
            newNext.innerHTML = '<i class="fas fa-chevron-right next"></i>' ;
            containerWindow.appendChild(newNext) ;
            newNext.setAttribute('class' , 'img-next') ;
            newNext.setAttribute('onclick' , 'changeImg(1)') ;



            let newPrev = document.createElement('a') ;
            newPrev.innerHTML = '<i class="fas fa-chevron-left next"></i>' ;
            containerWindow.appendChild(newPrev) ;
            newPrev.setAttribute('class' , 'img-prev') ;
            newPrev.setAttribute('onclick' , 'changeImg(0)') ;


        }


    }

})


function closeImg() {
    document.querySelector('.img-window').remove() ;
    document.querySelector('.img-next').remove() ;
    document.querySelector('.img-prev').remove() ;

}


function changeImg(change) {
    document.querySelector('#current-img').remove();
    let getImgWindow = document.querySelector('.img-window') ;
    let newImg = document.createElement("img") ;
    getImgWindow.appendChild(newImg) ;

    let calcNewImg ;

    if(change === 1) {
        calcNewImg = getLatestImg + 1 ;

        if(calcNewImg > galleryImages.length) {
            calcNewImg = 1 ;
        }
    }
    else if (change === 0) {
        calcNewImg = getLatestImg - 1 ;
        if(calcNewImg  < 1 ) {
            calcNewImg = galleryImages.length ;
        }

    }

    newImg.setAttribute('src' , calcNewImg + '.png') ;
    newImg.setAttribute('class' , 'popup-img') ;
    newImg.setAttribute('id' , 'current-img') ;
    getLatestImg = calcNewImg ;
}
