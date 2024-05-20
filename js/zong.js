function xuanfu(){
    var toptop = document.getElementById('toptop');
    toptop.style.display='none';
    toptop.nextSibling.style.display = 'block';
}
function likai(){
    var toptop = document.getElementById('toptop');
    toptop.nextSibling.style.display = 'none';
    toptop.style.display='block';
}
window.onload=function(){
    var top1 = document.getElementById('top');
    var top2 = document.getElementById('t');
    top2.style.display="none";
    var timer = null;
    top1.onclick = function(){
        timer= setInterval(function(){
            var backTop = document.documentElement.scrollTop || document.body.scrollTop;
            var speedTop = backTop/5;
            document.documentElement.scrollTop = backTop - speedTop;
            if(backTop == 0){
                clearInterval(timer);
            }
        },30);
    }
     var pageHeight = 700;
     window.onscroll = function(){
         var backTop = document.documentElement.scrollTop || document.body.scrollTop;
         if(backTop>pageHeight){
             top2.style.display = "block";
         }
         else{
             top2.style.display = "none";
        }
     }
}