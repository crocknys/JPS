var express = require('express');
var hbs = require('express-handlebars');
const path = require('path');

var hostname = 'localhost';
var port = 3000;
var app = express();
var number = 0;
var isHidden = true;

var router = express.Router();

app.listen(port, hostname, function () {
	console.log("Mon serveur fonctionne sur http://" + hostname + ":" + port);
});

app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'hbs')

app.use(router);

router.route('/')
	.all(function (req, res) {
		let jps = getJps();
		let encore = getSentence();
		number++;
		isHidden = number < 2;
		res.render('index', { jpsNom: jps[0], jpsSong: jps[1], again: encore });

	})

//VARIABLES 

function getJps() {

	var reponses = [
		["La fête de la musique", "https://www.youtube.com/embed/BsDE7CaELpg"],
		["Je cherche un producteur 2018 [Petit Tonnerre Remix]", "https://www.youtube.com/embed/4oqPnjZ1-kM"],
		["H", "https://www.youtube.com/embed/hB1Y-rgWaQE"],
		["C'est la guerre", "https://www.youtube.com/embed/pjkiXHUr-nk"],
		["Antisocial", "https://www.youtube.com/embed/watmthW3fSE"],
		["Jean Pierre in Ze Wonderland 2018 [Petit Tonnerre Remix]", "https://www.youtube.com/embed/HOSvMYwCjeg"],
		["Cybèle", "https://www.youtube.com/embed/W7IoTaPU7dI"],
		["Super Disco", "https://www.youtube.com/embed/I3mzblLBOu0"],
		["Super Disco 2018 [Petit Tonnerre Remix]", "https://www.youtube.com/embed/MEowIkgJGRk"],
		["Y'a que des fous", "https://www.youtube.com/embed/OnkccmTjhwo"],
		["La fete de la musique Version 2020", "https://www.youtube.com/embed/GDK-wjkUB3k"],
		["Envole Moi", "https://www.youtube.com/embed/GRHwfUlfcbg"],
		["Dans la ville", "https://www.youtube.com/embed/RnkFE1Xe9Eg"],
		["Sur la route de Kirovski", "https://www.youtube.com/embed/U5M8FUvQr9E"],
		["Aimer est plus fort que d’être aimé", "https://www.youtube.com/embed/wBlx9T1AotM"],
		["H 2018 [Petit Tonnerre Remix]", "https://www.youtube.com/embed/CYGZiQ474_M"],
		["Nous somme en Guerre Contre le COVID-19", "https://www.youtube.com/embed/IVp1WSFilzc"],
		["Sauvez nos vie Mercie aux infirmiers à nos Médecins", "https://www.youtube.com/embed/-3efGMp41Z0"],
		["Jean Pierre Sauser Joue pas de rock’n’roll", "https://www.youtube.com/embed/clPd0oYQBNg"],
		["jean pierre sauser La fête de la musique Version T.G.I les Illuminati..du Nouvel Ordre mondial...", "https://www.youtube.com/embed/vAUOQClEPbc"],
		["jean pierre sauser Rambo", "https://www.youtube.com/embed/oWXVNW315KM"],
		["jean pierre sauser Mon Message au ovnis les extraterrestres les aliens", "https://www.youtube.com/embed/noMVA1o5eTE"]
	];

	min = Math.ceil(0);
	max = reponses.length - 1;
	var value = Math.floor(Math.random() * (max - min)) + min;

	return reponses[value];
}


function getSentence() {

	var reponses = ["Encore", "Donnez plus de Jps ! ", "Ahh !! Jean Pierre.... Encore !", "Rock n' Roll, the next ouane plz !", "Ohh oui, que du bon, again !", "Chansons suivante svp", "next one !", "Chansons suivante !",
		"C'est le JPS que j'aime ! Again", "oui oui oui ! Encore", "Angain, and again, and again....", "On ne s'en lasse jamais, une autre !", "Allez c'est ma tournée", "Quand il n'y en a plus, il y en a encore !", "I Like"];

	min = Math.ceil(0);
	max = reponses.length - 1;
	var value = Math.floor(Math.random() * (max - min)) + min;
	return reponses[value];
}
