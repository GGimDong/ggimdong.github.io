var msg = '<div class=\"header\"><a id=\"close\" href="#">닫기 X</a></div>';
msg += '<div class=\"message\"><h2>아직 미완성된 상태입니다.<h2>';
msg += '빠른 시일 내에 완성하도록 하겠습니다. ㅎㅎ...<div>';

var elNote = document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = msg;
document.body.appendChild(elNote);

function dismissNote(){
    document.body.removeChild(elNote);
}

var elClose = document.getElementById('close');
elClose.addEventListener('click',dismissNote,false);