

for(let i=0; i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  var sentence=document.querySelectorAll(".drum")[i].textContent;

    mksound(sentence);
    buttonanimation(sentence);
  });
}


document.addEventListener("keypress", function(event){

     mksound(event.key);
    buttonanimation(event.key);
});

function mksound(sentence){
  if(sentence=='w'){
        var cra=new Audio('sounds/tom-1.mp3');
        cra.play();
  }
  if(sentence=='a'){
        var cra=new Audio('sounds/tom-2.mp3');cra.play();
  }
  if(sentence=='s'){
        var cra=new Audio('sounds/tom-3.mp3');cra.play();
  }
  if(sentence=='d'){
        var cra=new Audio('sounds/tom-4.mp3');cra.play();
  }
  if(sentence=='j'){
        var cra=new Audio('sounds/snare.mp3');cra.play();
  }
  if(sentence=='k'){
        var cra=new Audio('sounds/crash.mp3');cra.play();
  }
  if(sentence=='l'){
        var cra=new Audio('sounds/kick-bass.mp3');cra.play();
  }
}

function buttonanimation(currentkey){
   var activeButton=document.querySelector("." + currentkey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
     activeButton.classList.remove("pressed");
   },300);
}
