window.addEventListener("load",bindEvents);
var buttonArray,resetbt;
var isGameDone = false;
var isXorZero = false;
var result,xwins=0,zerowins=0;
function bindEvents(){
    buttonArray = document.querySelectorAll(".xorzero")
    for(let i =0; i<buttonArray.length; i++){
        buttonArray[i].addEventListener("click",printXorZero);
    }
    resetbt=document.querySelector("#reset").addEventListener("click",reset);
}

function printXorZero(){
    var buttonValue = this.innerHTML;
    if(!buttonValue && !isGameDone){
            this.innerHTML = isXorZero?"X":"0";
            result=this.innerHTML;
            isXorZero = !isXorZero;
            gameOver();
    }
}

function gameOver(){
    if(isSameRow(buttonArray[0],buttonArray[1],buttonArray[2])||isSameRow(buttonArray[0],buttonArray[3],buttonArray[6])||isSameRow(buttonArray[0],buttonArray[4],buttonArray[8])||isSameRow(buttonArray[1],buttonArray[4],buttonArray[7])||isSameRow(buttonArray[2],buttonArray[5],buttonArray[8])||isSameRow(buttonArray[2],buttonArray[4],buttonArray[6])||isSameRow(buttonArray[3],buttonArray[4],buttonArray[5])||isSameRow(buttonArray[6],buttonArray[7],buttonArray[8])){
        isGameDone=true;
        //alert("GAME OVER!!!");
        document.querySelector("#win").innerHTML=`<h1>Winner Of The Game is: ${result} </h1>`;
        //document.querySelector("p").innerHTML=result;
        count();

        }
}

function isSameRow(one , two ,three){
    if(isNotBlank(one) && isNotBlank(two) && isNotBlank(three)){
      if(isSameValue(one,two,three)){
        return true;
      }
    return false;
    }
}
function count(){
    if(result=="X"){
        xwins++;
        document.querySelector("#X").innerHTML=xwins;
    }
    if(result=="0"){
        zerowins++;
        document.querySelector("#zero").innerHTML=zerowins;
    }
}

const isNotBlank = (button)=>button.innerHTML?true:false;
const isSameValue=(one,two,three)=>(one.innerHTML == two.innerHTML && one.innerHTML == three.innerHTML);

function reset(){
    for(let i=0;i<buttonArray.length; i++){
        buttonArray[i].innerHTML="";
        document.querySelector("#win").innerHTML="";
    }
        isGameDone=false;
        isXorZero=false;
        playAgain();
}
var pbt;
function playAgain(){
    pbt=document.querySelectorAll(".xorzero")
    for(let i =0; i<pbt.length; i++){
        pbt[i].addEventListener("click",printXorZero);
    }
}