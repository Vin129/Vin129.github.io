// Voyga

V.init(function() {

	function resize() {

		var body = V("body"),
			nameBox = V("#nameBox"),
			headBox = V("#headBox");

		nameBox.height(body.height() - headBox.height());

	}

	function eye() {

		var body = V("body"),
			eyeWhites = V(".eyeWhites"),
			eyeBlacks = V(".eyeBlacks"),
			content = V("#content"),

			whiteSize = eyeWhites[0].width(),
			blackSize = eyeBlacks[0].width(),
			diff = (whiteSize - blackSize) * 1.2,
			screenHeight = body.height(),
			scrollTop = body.scrollTop();

		for (var i = 0 ; i < eyeBlacks.length ; i ++) {

			eyeBlacks[i].css("transform", "translateY(" + scrollTop / screenHeight * diff + "px)");

		}

		content.css("transform", "translateY(" + -scrollTop / 12 + "px)");

	}

	V.ready(function() {
		/*
		resize();

		V.scroll(function() {

			eye();

		});

		V.resize(function() {

			resize();

		});
		*/
		V("body").appear();

	});

});