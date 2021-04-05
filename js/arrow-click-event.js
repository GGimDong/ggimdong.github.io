/******* 변경가능부분 *******/
var maxNum = 2;
/***************************/

// 시작지점
var num = 1;
var leftArrow = document.getElementById('left');
var rightArrow = document.getElementById('right');
var obj = document.getElementById('t_pic');

function clickLeftArrow() {
    num--;
    if(num == 0) num = maxNum;
    obj.innerHTML = "<img id=\"pic\" src='img/cats/" + num + ".jpg'/>"
}


function clickRightArrow() {
    num++;
    if(num == maxNum+1) num = 1;
    obj.innerHTML = "<img id=\"pic\" src='img/cats/" + num + ".jpg'/>"
}

if(leftArrow.addEventListener){
    leftArrow.addEventListener('click',function() {
        clickLeftArrow();
    }, false);
}
else{
    alert("이벤트 리스너 미지원"); 
    leftArrow.addEventListener('onclick',function() {
        clickLeftArrow();
    });
}

if(rightArrow.addEventListener){
    rightArrow.addEventListener('click',function() {
        clickRightArrow();
    }, false);
}
else{
    alert("이벤트 리스너 미지원"); 
    rightArrow.addEventListener('onclick',function() {
        clickRightArrow();
    });
}