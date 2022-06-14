document.querySelectorAll("button")[1].style.display="none";
document.querySelectorAll("button")[2].style.display="none";
document.querySelectorAll("button")[3].style.display="none";
document.querySelectorAll("button")[4].style.display="none";
var k="";
var s="";
var l=0;


function good()
{
 s="";
var p=Math.random();
p=p*4;
p=p+1;
p=Math.floor(p);

setTimeout(function(){
  var animation=document.querySelector(".s" + p);
  setTimeout(function(){
    animation.classList.add("pressed1");
  },150);
  setTimeout(function(){
    animation.classList.remove("pressed1");
  },300);
  var audio = new Audio('sounds/s5.mp3')
  audio.play();
},250);
var audio = new Audio('sounds/s5.mp3')
audio.play();
k=k+p;
}
document.querySelectorAll("button")[0].addEventListener("click", function() {
  var q=1;
  good();
  document.querySelectorAll("button")[0].style.display="none";
  document.querySelector("h2").style.display="none";
  document.querySelectorAll("button")[1].style.display="inline-block";
  document.querySelectorAll("button")[2].style.display="inline-block";
  document.querySelectorAll("button")[3].style.display="inline-block";
  document.querySelectorAll("button")[4].style.display="inline-block";
  document.querySelector("h1").style.marginBottom="112px";

document.querySelectorAll("button")[1].addEventListener("click", function() {
  var animation=document.querySelector(".s" + 1);
  animation.classList.add("pressed");
  setTimeout(function(){
    animation.classList.remove("pressed");
  },100);
  var audio = new Audio('sounds/s1.mp3')
  audio.play();
  s=s+"1";
  if(k[s.length-1]!==s[s.length-1])
  {
    document.querySelector("h1").innerHTML="Game Over";

    if(q===1)
    {
    var audio = new Audio('sounds/s6.mp3')
    audio.play();
    q=0;
    }
  }
  if(k===s)
  {
    l++;
  document.querySelector("h1").innerHTML="Level "+l;
  good();
  }
});
document.querySelectorAll("button")[2].addEventListener("click", function() {

  var animation=document.querySelector(".s" + 2);
  animation.classList.add("pressed");
  setTimeout(function(){
    animation.classList.remove("pressed");
  },100);
  var audio = new Audio('sounds/s2.mp3')
  audio.play();
  s=s+"2";
  if(k[s.length-1]!==s[s.length-1])
  {
    document.querySelector("h1").innerHTML="Game Over";
    if(q===1)
    {
    var audio = new Audio('sounds/s6.mp3')
    audio.play();
    q=0;
    }
  }
  if(k===s)
  {
    l++;
  document.querySelector("h1").innerHTML="Level "+l;
  good();
  }
});
document.querySelectorAll("button")[3].addEventListener("click", function() {

  var animation=document.querySelector(".s" + 3);
  animation.classList.add("pressed");
  setTimeout(function(){
    animation.classList.remove("pressed");
  },100);
  var audio = new Audio('sounds/s3.mp3')
  audio.play();
  s=s+"3";
  if(k[s.length-1]!==s[s.length-1])
  {
    document.querySelector("h1").innerHTML="Game Over";
    if(q===1)
    {
    var audio = new Audio('sounds/s6.mp3')
    audio.play();
    q=0;
    }
  }
  if(k===s)
  {
    l++;
  document.querySelector("h1").innerHTML="Level "+l;
  good();
  }
});
document.querySelectorAll("button")[4].addEventListener("click", function() {

  var animation=document.querySelector(".s" + 4);
  animation.classList.add("pressed");
  setTimeout(function(){
    animation.classList.remove("pressed");
  },100);
  var audio = new Audio('sounds/s4.mp3')
  audio.play();
  s=s+"4";
  if(k[s.length-1]!==s[s.length-1])
  {
    document.querySelector("h1").innerHTML="Game Over";
    if(q===1)
    {
    var audio = new Audio('sounds/s6.mp3')
    audio.play();
    q=0;
    }
  }
  if(k===s)
  {
    l++;
  document.querySelector("h1").innerHTML="Level "+l;
  good();
  }
});

});
document.querySelectorAll("button")[1].addEventListener("click", function() {
  var animation=document.querySelector(".s" + 1);
  animation.classList.add("pressed");
  setTimeout(function(){
    animation.classList.remove("pressed");
  },100);
  var audio = new Audio('sounds/s1.mp3')
  audio.play();
});
document.querySelectorAll("button")[2].addEventListener("click", function() {

  var animation=document.querySelector(".s" + 2);
  animation.classList.add("pressed");
  setTimeout(function(){
    animation.classList.remove("pressed");
  },100);
  var audio = new Audio('sounds/s2.mp3')
  audio.play();

});
document.querySelectorAll("button")[3].addEventListener("click", function() {

  var animation=document.querySelector(".s" + 3);
  animation.classList.add("pressed");
  setTimeout(function(){
    animation.classList.remove("pressed");
  },100);
  var audio = new Audio('sounds/s3.mp3')
  audio.play();
});
document.querySelectorAll("button")[4].addEventListener("click", function() {

  var animation=document.querySelector(".s" + 4);
  animation.classList.add("pressed");
  setTimeout(function(){
    animation.classList.remove("pressed");
  },100);
  var audio = new Audio('sounds/s4.mp3')
  audio.play();

});
