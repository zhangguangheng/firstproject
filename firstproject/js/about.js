window.onload=function(){

    var msR=document.getElementById('moduleS-roll');
    var msRF=document.getElementById('moduleS-rollF');
    var msRFImg=msRF.getElementsByTagName('img')[0];

    msR.onmouseenter=function(){
        roll(msRFImg,-1);
    }
    function roll(x,y){
    time=setInterval(function(){
    x.style.left=x.offsetLeft-y+'px';
    if(x.offsetLeft>=0){
        clearInterval(time);
        x.style.left=0;
    }
    },1)
    }
}