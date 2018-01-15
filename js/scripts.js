var ileWierszy = 5; 
function drawTree(ileWierszy) {
	for ( var i = 1 ; i <= ileWierszy ; i++ ) {
		var star = '';
		for ( var j = 0 ;  j < i ; j++) {
			star += '*';
		}
		console.log(star);
	}
 } 

drawTree(ileWierszy);
