window.onload=function(){

/*--------------------------------------------------*/
/*small-slideshow*/

            var oUl1=document.getElementsByClassName('ulF')[0];
            var oUl2=document.getElementsByClassName('ulS')[0];
            var aLi1=oUl1.getElementsByTagName('li');
            var aLi2=oUl2.getElementsByTagName('li');
            var dis=aLi1[0].offsetWidth;
            var time=null;
            var iNow=-1;
            var a=40;
            oUl1.style.width=dis*aLi1.length+'px';
            time=setInterval(move,2000);
            move();
            function move(){
                if(iNow==aLi1.length-1){
                    iNow=0;
                }else{
                    iNow++;
                }
                oUl1.style.left=-iNow*dis+'px';
                for(var i=0;i<aLi2.length;i++){
                    aLi2[i].id='';
                }
                aLi2[iNow].id='active';
            }

            for(var j=0;j<aLi2.length;j++){
                aLi2[j].index=j;
                aLi2[j].onmouseenter=function(){
                    clearInterval(time);
                    for(var x=0;x<aLi2.length;x++){
                        aLi2[x].id='';
                    }
                    this.id='active';
                    iNow=this.index;
                    oUl1.style.left=-iNow*dis+'px';
                }
                aLi2[j].onmouseleave=function(){
                    time=setInterval(move,2000);
                }
            }

/*small-slideshow end*/
/*-------------------------------------------------*/

/*-------------------------------------------------*/
/*scroll*/


var scF=document.getElementById('scrollF');
var scS=document.getElementById('scrollS');
var scT=document.getElementById('scrollT');
var scSI=document.getElementById('scrollSI');
var mS=document.getElementById('mS');
var mSS=document.getElementById('mSS');
var mSI=document.getElementById('mSI');

window.onscroll=function(){
var scrollTop = document.body.scrollTop;
if(scrollTop>=120){
    loadDiv(scF,1);
}
function loadDiv(x,y){
    timeF=setInterval(function(){
    x.style.top=x.offsetTop-y+'px';
    if(x.offsetTop>=0){
        clearInterval(timeF);
        x.style.top=0;
    }
    },5)
}
}
mS.onmouseover=function(){
    loadDivF(scS,1);
}
mSS.onmouseover=function(){
    loadDivS(scT,1);
}
mSI.onmouseover=function(){
    loadDivT(scSI,1);
}
function loadDivF(x,y){
    timeS=setInterval(function(){
    x.style.top=x.offsetTop-y+'px';
    if(x.offsetTop<=0){
        clearInterval(timeS);
        x.style.top=0;
    }
    },2)
}
function loadDivS(x,y){
    timeT=setInterval(function(){
    x.style.top=x.offsetTop-y+'px';
    if(x.offsetTop<=0){
        clearInterval(timeT);
        x.style.top=0;
    }
    },2)
}
function loadDivT(x,y){
    timeFF=setInterval(function(){
    x.style.left=x.offsetLeft-y+'px';
    if(x.offsetLeft<=0){
        clearInterval(timeFF);
        x.style.left=0;
    }
    },2)
}

var ha=document.getElementById('hahaha');
var la=document.getElementById('lalala');
la.onmouseover=function(e){
    var d=e.pageY;
    if(d>700){
        ha.style.position='fixed';
        ha.style.top=0;
        ha.style.width='100%';
    }else{
        ha.style.position='relative';
    }
}
/*scroll end*/
/*-------------------------------------------------*/
}