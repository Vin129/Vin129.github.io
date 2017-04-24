// Voyga

;(function(name, definition) {

	if (typeof module !== "undefined" && typeof module.exports !== "undefined") {

		module.exports = definition();

	} else if (typeof define === "function" && typeof define.amd === "object") {

		define(definition);

	} else {

		this[name] = definition();

	}

})("V", function() {

	"use strict";

	var Utils = {

		toArray: function(thing) {

			return Array.prototype.slice.call(thing);

		},

		getEl: function(thing) {

			if (thing.nodeType > 0) {

				return thing;

			} else {

				if (thing[0] === "#") {

					return document.querySelector(thing);

				} else if (thing === "body" || thing === "head") {

					return document[thing];

				} else {

					return document.querySelectorAll(thing);

				}

			}

		}

	};

	var V = function(name) {

		var el = Utils.getEl(name);

		if (this instanceof V) {

			this.el = el;
			this.classList = el.classList;

		} else {

			if (el instanceof NodeList) {

				var arr = [];

				for (var i = 0; i < el.length; i++) {

					arr.push(new V(el[i]));

				}

				return arr;

			} else {

				return new V(name);

			}

		}

	};

	V.prototype = {

		css: function(prop, val) {

			if (val === undefined) {

				if (this.el.currentStyle) {

					return this.el.currentStyle[prop];

				} else if (window.getComputedStyle) {

					return window.getComputedStyle(this.el).getPropertyValue(prop);

				}

			} else {

				var webkit = [["transform", "animation"], ["WebkitTransform", "WebkitAnimation"]],
					index = webkit[0].indexOf(prop);

				this.el.style[prop] = val;

				if (index !== -1) {

					this.el.style[webkit[1][index]] = val;

				}

				return this;

			}

		},

		appear: function() {

			this.css("opacity", "1");

			return this;

		},

		disappear: function() {

			this.css("opacity", "0");

			return this;

		},

		width: function(value) {

			if (value === undefined) {

				return this.el.offsetWidth;

			} else {

				this.css("width", value + "px");

				return this;

			}

		},

		height: function(value) {

			if (value === undefined) {

				return this.el.offsetHeight;

			} else {

				this.css("height", value + "px");

				return this;

			}

		},

		data: function(name, val) {

			if (val === undefined) {

				return this.el.dataset[name];

			} else {

				this.el.dataset[name] = val;

				return this;

			}

		},

		attr: function(prop, value) {

			if (value === undefined) {

				if (typeof prop === "object") {

					for (var val in prop) {

						this.el.setAttribute(val, prop[val]);

					}

				} else {

					return this.el.getAttribute(prop);

				}

			} else {

				this.el.setAttribute(prop, value);

				return this;

			}

		},

		append: function(parent) {

			if (parent.el) {

				this.el.appendChild(parent.el);

			} else {

				this.el.appendChild(parent);

			}

		},

		remove: function(parent) {

			if (parent.el) {

				this.el.removeChild(parent.el);

			} else {

				this.el.removeChild(parent);

			}

		},

		suicide: function() {

			this.el.parentNode.removeChild(this.el);

		},

		html: function(content) {

			if (content === undefined) {

				return this.el.innerHTML;

			} else {

				this.el.innerHTML = content;

				return this;

			}

		},

		val: function(content) {

			var method = this.el.tagName === "INPUT" || this.el.tagName === "TEXTAREA" ? "value" : "textContent";

			if (content === undefined) {

				return this.el[method];

			} else {

				this.el[method] = content;

				return this;

			}

		},

		index: function() {

			var siblings = this.el.parentNode.children,
				index = -1;

			for (var i = 0; i < siblings.length; i++) {

				if (siblings[i] === this.el) {

					index = i;

					break;

				}

			}

			return index;

		},

		scrollTop: function(value) {

			if (value === undefined) {

				return this.el.scrollTop;

			} else {

				this.el.scrollTop = value;

				return this;

			}

		},

		call: function(func, param) {

			if (typeof this.el[func] === "function") {

				this.el[func](param);

			}

		},

		prop: function(prop) {

			if (this.el[prop]) {

				return this.el[prop];

			}

		},

		on: function(moves, callback) {

			moves = moves.split(" ");

			for (var i = 0; i < moves.length; i++) {

				this.el.addEventListener(moves[i], callback);

			}

		}

	};

	V.create = function(type, attrs) {

		var el = new V(document.createElement(type));

		if (attrs !== undefined) {

			el.attr(attrs);

		}

		return el;

	};

	V.init = function(callback) {

		document.addEventListener("DOMContentLoaded", callback);

	};

	V.ready = function(callback) {

		window.onload = callback;

	};

	V.resize = function(callback) {

		window.onresize = callback;

	};

	V.scroll = function(callback) {

		window.onscroll = callback;

	};

	V.extend = function(name, prop) {

		V[name] = prop;

	};

	return V;

});
