let bool = true;
let x = 1;
let y = 0;
let arr;
let score = 0;
let level = 1;
let num;
let sekundomer;
let speed = 1000;
let timerMs = 0;
let timerSec = 0;
let timerMin = 0;
let timeBool = true;
let firstStart = true;
let drowArray = [[], [], [], []];
let allowNew = false;
let playIt = true;
document.getElementById("sekundomer").innerText = `${timerMin}:${timerSec}:${timerMs}`;
document.getElementById("level").innerText = `${level}`;
document.getElementById("score").innerText = `${score}`;
for (let i = 1; i <= 10; i++) {
	for (let j = -2; j <= 0; j++) {
		let r = document.createElement("div");
		r.setAttribute("id", `${i}/${j}`);
		r.setAttribute("class", "hidden");
		document.getElementById("screen").appendChild(r);
	}
}

for (let i = 1; i <= 150; i++) {
	if ((x % 10) === 1) {
		x = 1;
		y++;
	}
	let pixel = document.createElement("div");
	pixel.setAttribute("class", `pixel glob`);
	pixel.setAttribute("id",  `${x}/${y}`);
	document.getElementById("screen").appendChild(pixel);
	x++;
}
let a = 4;
let b = -2;
for (let i = 1; i <= 16; i++) {
	if (a === 8) {
		a = 4;
		b++;
	}
	let pixel = document.createElement("div");
	pixel.setAttribute("class", `NextFigurePixel glob ${a}/${b}`);
	pixel.setAttribute("id", `nf${a}/${b}`);
	document.getElementById("nextFigure").appendChild(pixel);
	a++;
}
let l = 4;
let k = -2;
let row = 1;
for (let i = 1; i <= 16; i++) {
	if (l === 8) {
		l = 4;
		k++;
	}
	if(i !== 1 && i % 4 === 1) {
		row += 1;
	}
	let pixel = document.createElement("button");
	pixel.setAttribute("class", `drowPixel glob ${l}/${k} ${row}`);
	pixel.setAttribute("id", `d${l}/${k}`);
	pixel.addEventListener("click", selectPixel);
	document.getElementById("drow").appendChild(pixel);
	l++;
}
function selectPixel(e) {
	if (playIt) {
	if (e.target.style.backgroundColor !== "rgba(240, 10, 20, 0.6)") {
		e.target.style.backgroundColor = "rgba(106, 211, 99, 0.44)";
		let p = document.getElementsByClassName("drowPixel");
 		for (let elem of p) {
 			if (elem.style.backgroundColor !== "rgba(106, 211, 99, 0.44)") {
	 			if (elem.id !== e.target.id) {
	 				let aElem = elem.id.split("/")[0];
	 				let bElem = elem.id.split("/")[1];
	 				 let aTarget = e.target.id.split("/")[0];
	 				let bTarget = e.target.id.split("/")[1];
	 				aElem = aElem.split("");
	 				aElem.shift();
	 				aElem = Number(aElem.join(""));
	 				aTarget = aTarget.split("");
	 				aTarget.shift();
	 				aTarget = Number(aTarget.join(""));
	 				if (aElem - aTarget > 1 || aTarget - aElem > 1 || bElem - bTarget > 1 || bTarget - bElem > 1) {
	 					if (!elem.classList.contains("black")) {
	 						elem.style.backgroundColor = "rgba(240, 10, 20, 0.6)";
	 					}
	 				} else {
	 					if (!elem.classList.contains("black")) {
		 					elem.classList += " black";
		 					elem.style.backgroundColor = "black";
		 				}
	 				}
	 			}
	 		}
 		}
	}
}
}
function getX(str) {
  str =str.split("/");
  str = str[0].split("");
  str.shift();
  str = str.join()
  return str;
}
function getY(str) {
  str = str.split("/");
  str = str[1];
  return str;
}
function stopMusic() {
	document.getElementById("erg").pause();
}

document.getElementById("nextFigureButton").addEventListener("click", playF);
function playF() {
	if(playIt) {
		playIt = false;
	let a = document.getElementsByClassName("4");
		for(let elem of a) {
			if (elem.style.backgroundColor === "rgba(106, 211, 99, 0.44)") {
			let coordinat = elem.id;
			coordinat = coordinat.split("");
			coordinat.shift("");
			coordinat = coordinat.join("");
			for(let i = 0; i < drowArray.length; i++) {
				drowArray[i].push(coordinat);
			}
		}
		}
	let b = document.getElementsByClassName("3");
	for(let elem of b) {
		if (elem.style.backgroundColor === "rgba(106, 211, 99, 0.44)") {
		let coordinat = elem.id;
		coordinat = coordinat.split("");
		coordinat.shift("");
		coordinat = coordinat.join("");
		for(let i = 0; i < drowArray.length; i++) {
			drowArray[i].push(coordinat);
		}
	}
	}
		let c = document.getElementsByClassName("2");
		for(let elem of c) {
			if (elem.style.backgroundColor === "rgba(106, 211, 99, 0.44)") {
			let coordinat = elem.id;
			coordinat = coordinat.split("");
			coordinat.shift("");
			coordinat = coordinat.join("");
			for(let i = 0; i < drowArray.length; i++) {
				drowArray[i].push(coordinat);
			}
		}
		}
		let d = document.getElementsByClassName("1");
		for(let elem of d) {
			if (elem.style.backgroundColor === "rgba(106, 211, 99, 0.44)") {
			let coordinat = elem.id;
			coordinat = coordinat.split("");
			coordinat.shift("");
			coordinat = coordinat.join("");
			for(let i = 0; i < drowArray.length; i++) {
				drowArray[i].push(coordinat);
			}
		}
		}
	allowNew = true;
	let drawEl = document.getElementsByClassName("drowPixel");
	let rowCount = 1;
	let rows = 0;
	for (let elem of drawEl) {
		if (rowCount % 4 === 1 && row !== 1) {
			console.log(rows)
			rows++;
		}
		elem.style.backgroundColor = "black";
		elem.setAttribute("class", `drowPixel glob ${l}/${k} ${rows}`);
		rowCount++;
	}
}
}
function clearNextFigure() {
	let p = document.getElementsByClassName("NextFigurePixel");
 	for (let elem of p) {
 		elem.style.backgroundColor = "black";
 	}
}
function goRight(arr) {
	for (let i = arr.length - 1; i >= 0; i--) {
		document.getElementById(arr[i]).style.backgroundColor = "black";
		arr[i] = arr[i].split("/");
		arr[i][0] = String(Number(arr[i][0]) + 1);
		arr[i] = arr[i].join("/");
		document.getElementById(arr[i]).style.backgroundColor = "rgba(106, 211, 99, 0.44)";
	}
}
function goLeft(arr) {
	for (let i = 0; i < arr.length; i++) {
		document.getElementById(arr[i]).style.backgroundColor = "black";
		arr[i] = arr[i].split("/");
		arr[i][0] = String(Number(arr[i][0]) - 1);
		arr[i] = arr[i].join("/");
		document.getElementById(arr[i]).style.backgroundColor = "rgba(106, 211, 99, 0.44)";
	}
}
function goDown(arr) {
	for (let i = 0; i < arr[0].length; i++) {
		document.getElementById(arr[0][i]).style.backgroundColor = "black";
		arr[0][i] = arr[0][i].split("/");
		arr[0][i][1] = String(Number(arr[0][i][1]) + 1);
		arr[0][i] = arr[0][i].join("/");
		document.getElementById(arr[0][i]).style.backgroundColor = "rgba(106, 211, 99, 0.44)";
	}
}
function fieldRight(arr){
	for (let i = 1; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			arr[i][j] = rightId(arr[i][j]);
		}
	}
}
function fieldLeft(arr){
	for (let i = 1; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			arr[i][j] = leftId(arr[i][j]);
		}
	}
}
function fieldDown(arr){
	for (let i = 1; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			arr[i][j] = nextId(arr[i][j]);
		}
	}
}
function nextId(str) {
	str = str.split("/");
	str[1] =String(Number(str[1]) + 1);
	str = str.join("/")
    return str;
}
function rightId(str) {
	str = str.split("/");
	str[0] =String(Number(str[0]) + 1);
	str = str.join("/")
    return str;
}
function leftId(str) {
	str = str.split("/");
	str[0] = String(Number(str[0]) - 1);
	str = str.join("/")
    return str;
}
function getRundomFigure() {
 let figure = [[["5/1", "5/0", "5/-1","5/-2"],
				["4/0", "5/0", "6/0","7/0"],
				["6/1", "6/0", "6/-1","6/-2"],
				["4/-1", "5/-1", "6/-1","7/-1"]],
				// gic
				[["5/1", "6/1", "5/0", "6/0"],
				["5/1", "6/1", "5/0", "6/0"],
				["5/1", "6/1", "5/0", "6/0"],
				["5/1", "6/1", "5/0", "6/0"]],
				//qarakusi
				[["4/1", "5/1", "6/1", "5/0"],
				["5/2", "5/1", "6/1","5/0"],
				["5/2", "4/1", "5/1","6/1"],
				["5/2", "4/1", "5/1","5/0"]],
				//t
				[["4/1", "5/1", "5/0", "6/0"],
				["6/2", "5/1", "6/1","5/0"],
				["4/2", "5/2", "5/1","6/1"],
				["5/2", "4/1", "5/1","4/0"]],
				//s
				[["5/1", "6/1", "4/0", "5/0"],
				["5/2", "5/1", "6/1","6/0"],
				["5/2", "6/2", "4/1","5/1"],
				["4/2", "4/1", "5/1","5/0"]],
				//z
				[["5/1", "5/0", "4/-1", "5/-1"],
				["4/0", "5/0", "6/0","6/-1"],
				["5/1", "6/1", "5/0","5/-1"],
				["4/1", "4/0", "5/0","6/0"]],
				//g hakarak@
				[["5/1", "5/0", "5/-1", "6/-1"],
				["6/1", "4/0", "5/0","6/0"],
				["4/1", "5/1", "5/0","5/-1"],
				["4/0", "5/0", "6/0","4/-1"]
				]];
				num = Math.round(Math.random() * 6);
	return figure[num];
}
start.onclick = function () {
	if (firstStart) {
		document.getElementById("erg").play();
	}
	if (timeBool) {
	sekundomer = setInterval(function() {
		if (timerMs === 100) {
			timerMs = 0;
			timerSec += 1;
			if (timerSec === 59) {
				timerMin += 1;
				timerSec = 0;
			}
		}
		timerMs += 1;
		document.getElementById("sekundomer").innerText = `${timerMin}:${timerSec}:${timerMs}`;
	}, 10)
	}
	timeBool = false;
	if (bool === true) {
		bool = false;
		let int;
		if (firstStart) {
			firstStart = false;
		arr = getRundomFigure();
		for (let i = 0; i < arr[0].length; i++) {
		document.getElementById(arr[0][i]).style.backgroundColor = "rgba(106, 211, 99, 0.44)";
		}
	} else {
		arr = nextArr;
	}
	if (allowNew) {
		playIt = true;
		allowNew = false;
		nextArr = drowArray;
		drowArray = [[],[],[],[]];
	} else {
		nextArr = getRundomFigure();
			}
	for (let i = 0; i < nextArr[0].length; i++) {
		document.getElementById(`nf${nextArr[0][i]}`).style.backgroundColor = "rgba(106, 211, 99, 0.44)";
	}
	 int = setInterval(function () {
	 for (let i = 0; i < arr[0].length; i++) {
	 	if (arr[0][i].split("/")[1] === "1" && document.getElementById(nextId(arr[0][i])).classList.contains("frozen")) {
 				alert("Game Over");
 				document.getElementById("restart").click();
 				return;
 			}
 	}	
	 	for (let i = 0; i < arr[0].length; i++) {
			if (arr[0][i].split("/")[1] === "15" || document.getElementById(nextId(arr[0][i])).classList.contains("frozen")) {
 				for (let j = 0; j < arr[0].length; j++) {
 					if (!document.getElementById(arr[0][j]).classList.contains("hidden")) {
 					document.getElementById(arr[0][j]).setAttribute("class", "pixel glob frozen");
 				}
 				}
 				clearInterval(int);
 				bool = true;
 				lineFull();
 				clearNextFigure();
 				start.click();
 				break;
 			}	
 		}
 		if (arr[0][0].split("/")[1] !== "15" && !document.getElementById(arr[0][0]).classList.contains("frozen")) {
 		goDown(arr);
 		fieldDown(arr);
 	}
 	}, speed)
 	restart.onclick = function restart() {
 		score = 0;
 		level = 0;
 		timerMin = 0;
 		timerSec = 0;
 		timerMs = 0;
 		timeBool = true;
 		speed = 1000;
 		clearInterval(sekundomer);
		clearInterval(int);
		clearNextFigure();
		document.getElementById("level").innerText = `${level}`;
		document.getElementById("score").innerText = `${score}`;
 		let x = document.getElementsByClassName("pixel");
 		for (let a of x) {
 			a.style.backgroundColor = "black";
 			a.setAttribute("class", "pixel glob");
 		}
 		let y = document.getElementsByClassName("hidden");
 		 for (let a of y) {
 			a.style.backgroundColor = "black";
 			a.setAttribute("class", "hidden");
 		}
 		bool = true;
	}
 	}
}
function rightListenerHandler() {
	let accept = true;
	for (let elem of arr[0]) {
		if (elem.split("/")[0] === "10" || document.getElementById(rightId(elem)).classList.contains("frozen")) {
				accept = false;
		}
	}
		if(accept) {
			goRight(arr[0]);
			fieldRight(arr)
		}
}
function leftListenerHandler() {
	let accept = true;
	for (let elem of arr[0]) {
		if (elem.split("/")[0] === "1" || document.getElementById(leftId(elem)).classList.contains("frozen")) {
			accept = false;
		}
	}
		if(accept) {
			goLeft(arr[0]);
			fieldLeft(arr)
		}
}
function downListenerHandler() {
	let accept = true;
	for (let elem of arr[0]) {
		if (elem.split("/")[1] === "15") {
			accept = false;
			break;
		} else if(document.getElementById(nextId(elem)).classList.contains("frozen")) {
				accept = false;
		}
	}
	if(accept) {
		goDown(arr);
		fieldDown(arr)
	}
}
function rotateListenerHandler() {
			let accept = true;
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr[i].length; j++) {
				if (document.getElementById(arr[i][j]).classList.contains("frozen")) {
					accept = false;
				}
			}
		}
		if (accept) {
			for(let i = 0; i < arr[0].length; i++) {
				let elem = document.getElementById(arr[0][i]);
				elem.style.backgroundColor = "black";
			}
			arr.push(arr.shift());
			for(let i = 0; i < arr[0].length; i++) {
				let elem = document.getElementById(arr[0][i]);
				elem.style.backgroundColor = "rgba(106, 211, 99, 0.44)";
			}
		}
}
document.addEventListener("keypress", function(e) {
	if (e.keyCode === 100) {
			let accept = true;
	for (let elem of arr[0]) {
		if (elem.split("/")[0] === "10" || document.getElementById(rightId(elem)).classList.contains("frozen")) {
				accept = false;
		}
	}
		if(accept) {
			goRight(arr[0]);
			fieldRight(arr)
		}
	} else if (e.keyCode === 97) {
			let accept = true;
	for (let elem of arr[0]) {
		if (elem.split("/")[0] === "1" || document.getElementById(leftId(elem)).classList.contains("frozen")) {
			accept = false;
		}
	}
		if(accept) {
			goLeft(arr[0]);
			fieldLeft(arr)
		}
	} else if (e.keyCode === 115) {
        	let accept = true;
	for (let elem of arr[0]) {
		if (elem.split("/")[1] === "15") {
			accept = false;
			break;
		} else if(document.getElementById(nextId(elem)).classList.contains("frozen")) {
				accept = false;
		}
	}
	if(accept) {
		goDown(arr);
		fieldDown(arr)
	}
	} else if (e.keyCode === 119) {
					let accept = true;
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr[i].length; j++) {
				if (document.getElementById(arr[i][j]).classList.contains("frozen")) {
					accept = false;
				}
			}
		}
		if (accept) {
			for(let i = 0; i < arr[0].length; i++) {
				let elem = document.getElementById(arr[0][i]);
				elem.style.backgroundColor = "black";
			}
			arr.push(arr.shift());
			for(let i = 0; i < arr[0].length; i++) {
				let elem = document.getElementById(arr[0][i]);
				elem.style.backgroundColor = "rgba(106, 211, 99, 0.44)";
			}
		}
	}
 })
let addScore = 0;
 function lineFull() {
 	addScore *= 2;
 	let currentScore = 0;
	let action = false;
	for (let i = 15; i > 1; i--) {
		let x = 0;
		for (let j = 1; j <= 10; j++) {
			if (document.getElementById("" + j + "/" + i).classList.contains("frozen")) {
				x++;
			} else {
				x = 0;
				break;
			  }
		}
		if (x === 10) {
			currentScore += 10;
			action = true;
			for (let k = i; k > 3; k--) {
				for (let l = 10; l > 0; l--) {
						  let up = document.getElementById("" + l + "/" + (k - 1));
						  document.getElementById("" + l + "/" + k).style.backgroundColor = up.style.backgroundColor;
						  document.getElementById("" + l + "/" + k).classList = up.classList;
				}
			}
		}
	}
	if (action) {
		addScore += currentScore;
		lineFull();
		level = Math.ceil(score/100);
	} 
		score += addScore;
		document.getElementById("score").innerText = `${score}`;
		speed = 1000 - (100 * level);
		document.getElementById("level").innerText = `${level}`;
		addScore = 0;
}
let rot = document.getElementById("rotateButton");
rot.addEventListener("click", rotateListenerHandler);
let rightBut = document.getElementById("rightButton");
rightBut.addEventListener("click", rightListenerHandler);
let leftBut = document.getElementById("leftButton");
leftBut.addEventListener("click", leftListenerHandler);
let downBut = document.getElementById("downButton");
downBut.addEventListener("click", downListenerHandler);
