

const datemap = {
	'9/28': 'Steel Band',
	'9/29': 'Wind',
	
	
};


let wireUp = () => {
	
	let findOut = $('#find_out');
	findOut.on('click', musicResult);
	
};
let musicResult = () => {
	let date = $('#date').val();
	let musicToday = datemap[date];
	$('#music-result').html(musicToday);

};
	
	
	
jQuery(wireUp);



