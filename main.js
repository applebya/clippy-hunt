(function() {
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
	var nwWindow = win.window;

	var ReactDOM = nwWindow.ReactDOM;
	var React = nwWindow.React;
	var R = React.DOM;

	var component = React.createClass({

		render: function() {
			return R.img({
				src: './clippy.png',
				onClick: function() {
					win.close();
				}
			});
		},

		_openNewWindow: function() {
			nw.Window.open("./main.html", windowSettings);
		},

		componentDidMount: function() {

			if (!global.hasLoaded) {
				setInterval(this._openNewWindow, 1000);
				global.hasLoaded = true;
			}
			else {
				changeRandomPosition(win);
				win.show();

				setInterval(function() {
					changeRandomPosition(win);
				}, 2000);
			}
		}
	});

	var container = nwWindow.document.getElementById('react-container');

	ReactDOM.render(React.createElement(component), container);

}());