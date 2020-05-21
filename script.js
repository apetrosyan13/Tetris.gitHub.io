
let bool = true;
let x = 1;
let y = 0;
let cordinat;

for (let i = 1; i <= 150; i++) {
	if ((x % 10) === 1) {
		x = 1;
		y++;
	}
		let pixel = document.createElement("div");
		pixel.setAttribute("class", `pixel glob`);
		pixel.setAttribute("id",  `${x}/${y}`)
		document.getElementById("screen").appendChild(pixel);
		x++
}
but.onclick = function zxkun() {
	if (bool === true) {
		let inpX = document.getElementById("inpX").value;
		let inpY = document.getElementById("inpY").value;
		cordinat = inpX + "/" + inpY;
		document.getElementById(cordinat).style.backgroundColor = "red";
		bool = false;
	}
}
restart.onclick = function restart() {
	let x = document.getElementsByClassName("pixel");
	for (let a of x) {
		a.style.backgroundColor = "white";
	}
}
	document.addEventListener("keypress", function(e) {
		if (bool === false) {
			if (e.keyCode === 100 && Number(cordinat.split("/")[0]) < 10) {
				document.getElementById(cordinat).style.backgroundColor = "white";
				let arr = cordinat.split("/");
				arr[0] = String(Number (arr[0]) + 1);
				cordinat = arr.join("/")
				document.getElementById(cordinat).style.backgroundColor = "red";
			} else if (e.keyCode === 97 && Number(cordinat.split("/")[0]) > 1) {
				document.getElementById(cordinat).style.backgroundColor = "white";
				let arr = cordinat.split("/");
				arr[0] = String(Number (arr[0]) - 1);
				cordinat = arr.join("/")
				document.getElementById(cordinat).style.backgroundColor = "red";
			} else if (e.keyCode === 115 && Number(cordinat.split("/")[1]) < 15) {
				document.getElementById(cordinat).style.backgroundColor = "white";
				let arr = cordinat.split("/");
				arr[1] = String(Number (arr[1]) + 1);
				cordinat = arr.join("/")
				document.getElementById(cordinat).style.backgroundColor = "red";
			} else if (e.keyCode === 119 && Number(cordinat.split("/")[1]) > 1) {
				document.getElementById(cordinat).style.backgroundColor = "white";
				let arr = cordinat.split("/");
				arr[1] = String(Number (arr[1]) - 1);
				cordinat = arr.join("/")
				document.getElementById(cordinat).style.backgroundColor = "red";
			}
		}
	})
	 

