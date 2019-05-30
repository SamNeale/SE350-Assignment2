var cName = 'update';
var c = sessionStorage.getItem(cName);
init();

function init() {
	document.write('does js work: ' + c);
	
	if (c == 0) {
		
		document.writeln('c = 0');
	} else {

		document.writeln(text + 'c = 1');
	}
}
	

