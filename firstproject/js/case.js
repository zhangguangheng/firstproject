window.onload=function(){

    var lP=document.getElementById('loop');
    var btn=lP.getElementsByTagName('button');
    var lPF=document.getElementById('loopF');
    var oUl=lPF.getElementsByTagName('ul');

    for(var i=0;i<btn.length;i++){
    btn[i].index=i;
    btn[i].onmouseover=function(){
    for(var j=0;j<btn.length;j++){
        oUl[j].style.display='none';
        btn[j].style.background='white';
        btn[j].style.color='#000';
        btn[j].style.border='1px solid gray';
    }
    oUl[this.index].style.display='block';
    this.style.background='#ff6637';
    this.style.color='white';
    this.style.border='none';
    }
    }


    var btnS=document.getElementsByTagName('input');
    var btnF=document.getElementById('btnF');
    var fixS=document.getElementById('fixedshowF');
    var oUlF=document.getElementById('oUlF');
    var haha=document.getElementById('haha');
    var aImg=oUlF.getElementsByTagName('img');

    
    oUlF.innerHTML+=oUlF.innerHTML;
    oUlF.style.width=aImg[0].offsetWidth*aImg.length+'px';
    // alert(oUlF.offsetWidth)
    haha.onclick=function(){
        fixS.style.display='block';
    }
    btnF.onclick=function(){
        fixS.style.display='none';
    }
    btnS[0].onclick=function(){
        roll(oUlF,-aImg[0].offsetWidth);
    }
    btnS[1].onclick=function(){
        roll(oUlF,aImg[0].offsetWidth);
    }
    var timer=null;
    function roll(obj,speed){
      clearInterval(timer);
      timer=setInterval(function(){
        obj.style.left=obj.offsetLeft+speed+'px';
        if(obj.offsetLeft<-obj.offsetWidth/2){
          obj.style.left=speed+'px';
        }
        if(obj.offsetLeft>0){
          obj.style.left=-obj.offsetWidth/2+speed+'px';
        }
      },1000);
    }

}