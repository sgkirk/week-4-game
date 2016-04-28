//On start: rand target number chosen btwn 19-120, target number push to html, rand cat #s chosen 1-12
window.onload = function(event) {
	this.complete = false;
	target = Math.floor((Math.random() * 120) + 19);
	cat1 = Math.floor((Math.random() * 12) + 1);
	cat2 = Math.floor((Math.random() * 12) + 1);
	cat3 = Math.floor((Math.random() * 12) + 1);
	cat4 = Math.floor((Math.random() * 12) + 1);
	current = 0;
    
	$("#target").html(target);
	$("#wins").html(wins);
	$("#losses").html(losses);

	console.log(cat1, cat2, cat3, cat4);

//on click, add each cat number to current, then push to html
	$('#cat1').on('click', function() {
		$('#current').html(current+cat1);
		current = current+cat1;	
	});
	$('#cat2').on('click', function() {
		$('#current').html(current+cat2);
		current = current+cat2;	
	});
	$('#cat3').on('click', function() {
		$('#current').html(current+cat3);
		current = current+cat3;	
	});
	$('#cat4').on('click', function() {
		$('#current').html(current+cat2);
		current = current+cat4;	
	});




//if target = current, alert player win, restart game
//if target < current, alert player loss, restart game

	wins = 0;
	losses = 0; 

	if (target === current) {

		alert("Congratulations! You have won!");
    	$('#wins').html(wins++);
    	this.complete = true;
    	

  } if (target < current) {

  		alert("You have lost! Please try again.");
    	$('#losses').html(losses++);
    	this.complete = true;
    	
    
  }


}








