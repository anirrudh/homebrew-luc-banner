function type()
{
		var typed = new Typed("#typed", {
			strings: ["~/.homebrew@LUC"],
			loop: true,
			typeSpeed: 80,
			backDelay: 4000,
			backSpeed: 100,
			preStringTyped: function() { 
				var x = Math.floor((Math.random() * 4) + 1);
				if (x == 1) {
				document.getElementById('fun').classList = "";
				document.getElementById('fun').classList.add("solarized_light");
				}
				else if (x == 2) {
				document.getElementById('fun').classList = "";
				document.getElementById('fun').classList.add("solarized_dark");
				}
				else if (x == 3) {
				document.getElementById('fun').classList = "";
				document.getElementById('fun').classList.add("luc_colors");
			}
			    else if (x == 4) {
				document.getElementById('fun').classList = "";
				document.getElementById('fun').classList.add("classic_terminal");
			    }
			}
		});
}


