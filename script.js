var btn_boop001 = document.getElementById('btn_boop001'),
	aud_boop001 = document.getElementById('aud_boop001');

btn_boop001.addEventListener('click', function(){
	aud_boop001.currentTime = 0;
	aud_boop001.play();
})