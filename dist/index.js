(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function() {
	var demoSelection = {
		selection: [],
<<<<<<< HEAD
		selectButtons: [],
		getButtons: document.querySelectorAll('.selection-screen li'),
		init: function() {
			if (this.getButtons()) {
				this.selectButtons = this.getButtons();
				console.log(this.selectButtons);
			}
		},
		onSelect: function(evt) {
			if (this.selectButtons.length < 2) {
				this.classList.add('selected');
			}
		},
	};
=======
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

			if (demoSelection.selection.length === 1) {
				document.querySelector('.confirm-btn').classList.add('chosen');
			}
		},
	};

	demoSelection.init();
>>>>>>> 9b4d9b4182a9f067a9d8d56739c79c30821aa9d8
})();

},{}]},{},[1]);
