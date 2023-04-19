const MAIN_IMAGE = document.querySelector('#main_image');
const THUMBNAILS = document.querySelector('.thumbnails');
var imageArray = [
    {
        src : 'https://placehold.co/600x400/orange/white',
        alt : 'placeholder image with a orange background and white text'
    },
    {
        src : 'https://placehold.co/600x400/blue/white',
        alt : 'placeholder image with a blue background and white text'
    },
    {
        src : 'https://placehold.co/600x400/green/white',
        alt : 'placeholder image with a green background and white text'
    },
    {
        src : 'https://placehold.co/600x400/red/white',
        alt : 'placeholder image with a red background and white text'
    }
]
MAIN_IMAGE.src = imageArray[0].src;
MAIN_IMAGE.alt = imageArray[0].alt;
imageArray.forEach(function(image, index){
    var img = document.createElement('img');
    img.src = imageArray[index].src;
    img.alt = imageArray[index].alt;

    THUMBNAILS.appendChild(img);

    img.addEventListener('mouseover', function(){
        MAIN_IMAGE.src = imageArray[index].src;
        MAIN_IMAGE.alt = imageArray[index].alt;
    })
})


