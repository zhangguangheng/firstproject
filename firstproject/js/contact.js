window.onload=function(){

    var iptF=document.getElementById('iptF');
    var iptS=document.getElementById('iptS');
    var iptT=document.getElementById('iptT');
    var btn=document.getElementById('btn');
    var oP=document.getElementById('oP');
    var aP=document.getElementById('aP');
    var dP=document.getElementById('dP');

    btn.onclick=function(){
    var a=iptF.value;
    var b=iptS.value;
    var c=iptT.value;

    var t=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;

    var d= /^(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/;

    if(a==''){
        aP.innerHTML='*用户名不能为空';
    }else{
        aP.innerHTML='';
    }
    if(!t.test(b)){
        oP.innerHTML='*邮箱格式不正确';
    }else{
        oP.innerHTML='';
    }
    if(!d.test(c)){
        dP.innerHTML='*电话格式不正确';
    }else{
        dP.innerHTML='';
    }
    if(a=='123'&&b=='123@qq.com'&&c=='13146006095'){
        lala.submit();
    }
    }
}