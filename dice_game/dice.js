var num1=Math.random();
var num2=Math.random();
num1=Math.floor(num1*6)+1;
num2=Math.floor(num2*6)+1;

document.querySelector(".img1").src="images/dice"+num1+".png";
document.querySelector(".img2").src="images/dice"+num2+".png";

if (num1>num2){
    document.querySelector("h1").innerHTML="🚩Player "+1+" won!";
}
else if(num1<num2){
    document.querySelector("h1").innerHTML="Player "+2+" won!🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}