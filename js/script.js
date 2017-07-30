//custom js file 

$(document).ready(function() {
	var age = parseInt(prompt("How old are you?"));

	if (age >= 18) {
		var registered = confirm("Are you are registerd voter? click ok for yes and cancel for no");

		if (registered) {
			$("#three").show();
		} else {
			$("#two").show();
		}

		} else {
			$("#one").show();
		}
});