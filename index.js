
// detecting click

for(var i=0; i<document.querySelectorAll(".drum").length;i++){
        document.querySelectorAll(".drum")[i].addEventListener("click",
        function(){
            makeSound(this.innerHTML);  
            btnAnimation(this.innerHTML);
        });
}

// Detecting key of keyboard

for(var i=0; i<document.querySelectorAll(".drum").length;i++){
    document.addEventListener("keypress",function(event){
        makeSound(event.key);
        btnAnimation(event.key);
    })
}

// MAKE SOUND
function makeSound(key){


    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
    
        case "s":
            new Audio("sounds/tom-3.mp3").play();
                break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;  
        case "j":
            new Audio("sounds/crash.mp3").play();
            break;  
        case "k":
            new Audio("sounds/snare.mp3").play();
            break;  
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break; 
        default:
            console.log("No instrumnet")
            break;
    }

}

switch (key) {
    case value:
        
        break;

    default:
        break;
}


// ANIMATION

function btnAnimation(pressedBtn){
    var btnGotPreseed = document.querySelector("."+pressedBtn);
    btnGotPreseed.classList.add("pressed");
    setTimeout(function(){btnGotPreseed.classList.remove("pressed"),150})
}
