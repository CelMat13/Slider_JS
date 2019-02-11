//<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

var numer = Math.floor(Math.random()*5)+1;

//function schow()
//{
//	$("#slider").fadeOut(500);
//}

var timer1 = 0;
//var timer2 = 0;

function ustaw(nrslajdu)
{
	clearTimeout(timer1);
	numer = nrslajdu -1;
	
	setTimeout("zmiana()",5000);
}


function zmiana()
{
	numer++; if (numer>5) numer=1;
	
	var plik = "<img src=\"slajdy/slajd" + numer + ".jpg \" />" ;
	
	document.getElementById("slider").innerHTML = plik;
	//$("slider").fadeIn(500);
	
	
	timer1 = setTimeout("zmiana()",5000);
	//setTimeout("schow()",4500);
	
}

