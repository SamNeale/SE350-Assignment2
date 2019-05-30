var cName = 'update';

window.onload = function() {
	var c = sessionStorage.getItem(cName);
	if (c == 1) {
		document.getElementById('td').innerHTML = 'COMPLETE';
	}	
}
	

