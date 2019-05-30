var cName = 'update';

window.onload = function() {
	if (sessionStorage.getItem(cName) == 0) {
		document.getElementById('dropbtn').value = 'in_p';
		document.getElementById('conc').checked = false;
	} else {
		document.getElementById('dropbtn').value = 'fin';
		document.getElementById('conc').checked = true;
	}
}	

function update_drop_down() {
	if (document.getElementById('conc').checked) {
		document.getElementById('dropbtn').value = 'fin';
		sessionStorage.setItem(cName,1);
	} else {
		document.getElementById('dropbtn').value = 'in_p';
		sessionStorage.setItem(cName,0);
	}
		
}
