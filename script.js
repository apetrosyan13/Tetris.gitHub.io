<!DOCTYPE html>
<html>
<head>
	<title>tetris</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body id="i">
	<div id="rule">
		<div id="talbo">
			<div class="tablo">
			<div id="score"></div>
			<b class="tabloText">Score</b>
			</div>
			<div class="tablo">
			<div id="level"></div>
			<b class="tablo">Level</b>
			</div>
			<div class="tablo">
			<div id="sekundomer"></div>
			<b class="tablo">Time</b>
			</div>
		</div>
		<div id="ruleBut">
			<div id="rotateDiv"><button id="rotateButton">W<br>rotate</button></div>
			<div id="ld">
				<div id="leftDiv"><button id="leftButton">A<br>left</button></div>
				<div id="rightDiv"><button id="rightButton">D<br>right</button></div>
			</div>
			<div id="downDiv"><button id="downButton">S<br>down</button></div>
		</div>
	</div>
		<div id="screen"></div>
		<div id="disp">
			<b>Next figure</b>
			<div id="nextFigure"></div>
			<b>Drow next figure</b>
			<button id="nextFigureButton">Play it</button>
			<div id="drow"></div>
		</div>
	<div id ="buttonDiv">
	<button id="start">Start</button>
	<button id="restart">Restart</button>	
	</div>
	<audio id="erg" loop>
		//<source src="audio/matrix.mp3" type="audio/mp3"/>
	</audio>
	<script type="text/javascript" src="script.js"></script>

</body>
</html>
