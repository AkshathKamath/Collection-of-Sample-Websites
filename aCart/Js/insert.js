var js=document.getElementById('js');
js.innerHTML="<img id='b1' src='Img/r1.png'>";
var i=0;
var right=document.getElementById("right");
var left=document.getElementById("left");
right.addEventListener("click",change);
left.addEventListener("click",change);
function change(){
    i++;
    if(i%2!=0){
        js.innerHTML="<img id='b1' src='Img/m1.png'>";
    }
    else{
        js.innerHTML="<img id='b1' src='Img/r1.png'>";
    }
}