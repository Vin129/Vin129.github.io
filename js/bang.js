// Voyga

V.init(function() {

	var resize = function() {

		var bodyHeight = V("body").height(),
			title = V("#title"),
			titleHeight = title.height(),
			imgHeight = V("#hands").height();

		title.css("marginTop", (bodyHeight - imgHeight - titleHeight) / 2 + 12 + "px");

	};

	V.ready(function() {

		resize();

		V.resize(function() {

			resize();

		});

		V("body").appear();

	});

});