"use strict";

// määritä, mitä tehdään, kun lomake lähetetään (submit)
document.getElementById("lomake").onsubmit = laskeBMI;

// määritä, mitä tehdään, kun Arvioi-painiketta painetaan
document.getElementById("arvioi").onclick = arvioi;

// globaali painoindeksimuuttuja
var bmi;

//
// Tehtävä: Kirjoita funktio, joka laskee painoindeksin lomakkeen tietojen
// perusteella ja kirjoittaa sen sivulle
//
function laskeBMI() {
	tyhjennaArvio ();

	// määrittele muuttujat paino ja pituus ja alusta ne lomakkeen kenttien
	// arvoilla kokonaisluvuiksi (integer) tulkittuina
	var paino;
	var pituus;
	
	paino = parseInt(document.getElementById('paino').value);
	pituus = parseInt(document.getElementById('pituus').value		);

	// laske painoindeksi ja sijoita se muuttujaan bmi

	bmi = 10000 * paino / (pituus * pituus) ;

	// päivitä tulos html-sivulle
	// esitä tulos kahden desimaalin tarkkuudella

	document.getElementById('tulos').innerHTML = bmi.toFixed(2);

	// tämä on tässä siksi, jotta lomaketta ei oikeasti lähetettäisi
	// lähetys lataisi sivun uudelleen ja tyhjentäisi kentät
	return false;
}

//
// Tehtävä: Kirjoita dokumenttiin sanallinen arvio painoindeksistä taulukon mukaisesti:
/*
	Vaikea alipaino	< 16.0
	Merkittävä alipaino	16.0 - 16.99
	Lievä alipaino	17.0 - 18.49
	Normaali paino	18.5 - 24.99
	Lievä lihavuus	25.0 - 29.99
	Merkittävä lihavuus	30.0 - 34.99
	Vaikea lihavuus	35.0 - 39.99
	Sairaalloinen lihavuus	40.0 >=
		Lähde: WHO
*/
// Jos bmi:llä ei ole arvoa, älä tee mitään
//
function arvioi() {

	var arvioTeksti = "";
	
	if (isNaN(bmi)) {
		return;
	} else if (bmi < 16.0 ) {
		arvioTeksti = 'Vaikea alipaino';
	} else if (bmi < 17.0 ) {
		arvioTeksti = 'Merkittävä alipaino';
	}else if (bmi < 18.5) {
		arvioTeksti = 'Lievä alipaino';
	}else if (bmi < 25.0) {
		arvioTeksti = 'Normaali paino';
	}else if (bmi < 30.0) {
		arvioTeksti = 'Lievä lihavuus';
	}else if (bmi < 40.0) {
		arvioTeksti = 'Vaikea lihavuus';
	}



	document.getElementById("arvioteksti").innerHTML = arvioTeksti;
}


//
// Tehtävä: Lisää ohjelmaan ominaisuus, että arvioteksti tyhjennetään aina, kun uusi painoindeksi lasketaan.
// Laadi sitä varten oma funktio ja kutsu sitä oikeassa paikassa.
//
function tyhjennaArvio() {
	document.getElementById("arvioteksti").innerHTML = "";
}
