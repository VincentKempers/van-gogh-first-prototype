(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function() {
	var demoSelection = {
		selection: [],
		selectButtons: document.querySelectorAll('.selection-screen li'),
		// getButtons: ,
		init: function() {
			console.log(this.selectButtons[0]);

			if (this.selectButtons) {
				this.selectButtons.forEach(button => {
					button.addEventListener('click', demoSelection.onSelect);
				});
			}
		},
		onSelect: function(evt) {
			if (demoSelection.selection.length < 2) {
				// console.log(demoSelection, this, evt.target);

				this.classList.add('selected');
				demoSelection.selection.push(this);
			} else {
				demoSelection.selection[0].classList.remove('selected');
				demoSelection.selection.shift();

				if (!this.classList.contains('selected')) {
					this.classList.add('selected');
					demoSelection.selection.push(this);
				}
			}
		},
	};

	demoSelection.init();
})();

},{}]},{},[1]);
