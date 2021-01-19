var time = new Date();
var message = '';

message += '접속시간: ';
var hour = time.getHours();
if(hour == 0){ 
    message += '오전 ';
    hour = 12;
}
else if(hour > 12){ 
    message += '오후 ';
    hour -=12;
}
else{
    message += '오전 ';
}
message += hour;
message += '시 ';
message += time.getMinutes();
message += '분 ';
message += time.getSeconds();
message += '초';


var elTime = document.getElementById('time');
elTime.textContent = message;