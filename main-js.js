var cName = 'update';


window.onload = function(){
	
	var update = sessionStorage.getItem(cName);
	if (update == 1) {
		var progBar = document.getElementById('prog-bar');
		progBar.innerHTML = '100%';
		progBar.style.width = '100%';
	}	
}



