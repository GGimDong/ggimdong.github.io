var time = new Date();
var year = time.getFullYear();
var message = '<p>&copy; ';
message += year;
message += '. 김동은 all rights reserved.</p>'

var el = document.getElementsByTagName('footer');

el[0].innerHTML = message;