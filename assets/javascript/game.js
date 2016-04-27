//On start: rand target number chosen btwn 19-120, target number push to html, rand cat #s chosen 1-12

		window.onload = function(event) {

    	target = Math.floor((Math.random() * 120) + 19);
        cat1 = Math.floor((Math.random() * 12) + 1);
        cat2 = Math.floor((Math.random() * 12) + 1);
        cat3 = Math.floor((Math.random() * 12) + 1);
        cat4 = Math.floor((Math.random() * 12) + 1);
        current = 0;
 		$("#target").html(target);
 		$("#current").html(current);

 		console.log(cat1, cat2, cat3, cat4);
        },

//on click, add each cat number to current, then push to html

$("#cat1").on("click", function() {
	$("#current").html(cat1);
});





