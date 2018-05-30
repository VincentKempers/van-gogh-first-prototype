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
