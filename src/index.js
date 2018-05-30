(function() {
	var demoSelection = {
		selection: [],
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
})();
