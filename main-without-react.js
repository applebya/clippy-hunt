var randomX = function () {
	return Math.floor((Math.random() * 1440) + 1);
};

var randomY = function () {
	return Math.floor((Math.random() * 900) + 1);
};

var changeRandomPosition = function (thisWin) {
	thisWin.moveTo(randomX(), randomY());
};

var windowSettings = {
  "frame": false,
  "transparent": true,
  "show": false,
  "focus": false,
  "width": 100,
  "height": 93
};

var win = nw.Window.get();

var openNewWindow = function() {

	nw.Window.open("./main.html", windowSettings, function (newWin) {

		newWin.window.addEventListener('click', function() {
			newWin.close();
		});

		changeRandomPosition(newWin);
		newWin.show();

		changeInterval = setInterval(function() {
			changeRandomPosition(newWin);
		}, 2000);

	});
};

if (!global.hasLoaded) {
	setInterval(openNewWindow, 1000);
	global.hasLoaded = true;
}