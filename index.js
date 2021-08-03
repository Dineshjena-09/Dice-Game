var randomnumber1=Math.random();
randomnumber1=randomnumber1*6;
randomnumber1=Math.floor(randomnumber1)+1;

var randomdiceimage="dice"+randomnumber1+".png";
var imagesource1="images/"+randomdiceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesource1);

var randomnumber2=Math.random();
randomnumber2=randomnumber2*6;
randomnumber2=Math.floor(randomnumber2)+1;

var randomdiceimage2="dice"+randomnumber2+".png";
var imagesource2="images/"+randomdiceimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imagesource2);

if(randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw !";
}
