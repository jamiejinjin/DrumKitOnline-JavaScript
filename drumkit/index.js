//
// document.querySelector(".w").addEventListener("click",function(){
//   var audio=new Audio('sounds/crash.mp3');
//   audio.play();
// })

var letter_to_audio = {
  "w":"crash",
  "a":"kick-bass",
  "s":"snare",
  "d":"tom-1",
  "j":"tom-2","k":"tom-3","l":"tom-4"
};

function play_audio(letter){
  var audio= new Audio(`sounds/${letter_to_audio[letter]}.mp3`);
  audio.play();
}

var drums = document.querySelectorAll(".drum");

for (var i=0;i<drums.length;i++){
  drums[i].addEventListener("click",function(event){
    // console.log(event);
    var drumletter = this.innerHTML;
    play_audio(drumletter);
    buttonAnimation(drumletter);
  });
};

document.addEventListener("keypress",function(event){
  console.log(event);
  play_audio(event.key);
  buttonAnimation(event.key);
});


function buttonAnimation(currentkey){
  var activebutton = document.querySelector("."+currentkey);
  activebutton.classList.add("pressed");
  setTimeout(function(){
  activebutton.classList.remove("pressed") ; 
  },200);


}
