var cName = 'update';
var update_prog = 0;
init(update_prog);

function init(val) {
	sessionStorage.setItem(cName,val);
	document.writeln('js works');
	document.writeln(sessionStorage.getItem(cName));
}



