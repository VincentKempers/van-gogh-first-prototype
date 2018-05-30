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
