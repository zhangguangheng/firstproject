window.onload=function(){

    var oUl=document.getElementById('moduleUl');
    var aLi=oUl.getElementsByTagName('li');

    var timer=null;
    oUl.innerHTML+=oUl.innerHTML;
    timer=setInterval(function(){
        oUl.style.top=oUl.offsetTop-1+'px';
            if(oUl.offsetTop<-oUl.offsetHeight/2){
              oUl.style.top=0;
            }
            if(oUl.offsetTop>0){
              oUl.style.top=-oUl.offsetHeight/2+'px';
            }
    },20)
}