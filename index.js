
var numberofbuttons=document.querySelectorAll(".drum").length;

for(i=0;i<numberofbuttons;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       var buttonInnerHTML = this.innerHTML;

       makeSound(buttonInnerHTML);




    });


}
document.addEventListener("keypress", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key){
    switch(key){
        case 'w':
            var tom=new Audio('sounds/tom-1.mp3');
            tom.play();
        break;

        case 'a':
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case 's':
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case 'd':
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case 'j':
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case 'k':
            var kickbass=new Audio('sounds/kick-bass.mp3');
            kickbass.play();
        break;

        case 'l':
            var share=new Audio('sounds/snare.mp3');
            share.play();
        break;

        default:
            console.log(buttonInnerHTML);
        break;
       }



}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}



