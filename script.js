function FunctionChange() {

	var elc = document.getElementById("ColorLetterId").value;
	var ebgc = document.getElementById("ColorBgId").value;
	var str = document.getElementById("LetterId").value;
	var element = document.getElementById("ResultId");
	var n = str.length;

// powinieniem użyć == czy ===
	if (n == 0) {
		alert('Nic nie wpisano w polu "Wpisz literę."');
			document.getElementById("ResultId").innerHTML = '';	
			element.style.visibility = 'hidden';		
	}
	else if (n === 1) {
			document.getElementById("ResultId").innerHTML = str;
			element.style.background = ebgc;
			element.style.color = elc;
			element.style.visibility = 'visible';
	}
	else if (n > 1) {
		alert('Wpisz tylko jedną literę.');
			document.getElementById("LetterId").value = '';	
			document.getElementById("ResultId").innerHTML = '';	
			element.style.visibility = 'hidden';
	}
}
