var video;
var volume_slider;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	volume_slider = document.querySelector("#volumeSlider");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = '100';
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = (9/10)*video.playbackRate;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = (10/9)*video.playbackRate;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration-5)
	{
		video.currentTime = video.currentTime+5;
	}
	else
	{
		video.currentTime = 0;
	}

	console.log(video.currentTime);
});

document.querySelector("#old").addEventListener("click", function() {
	video.setAttribute("class","oldTime")
});

document.querySelector("#original").addEventListener("click", function() {
	video.setAttribute("class",'')
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted){
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log('Unmuted');
	}
	else{
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		console.log('Muted');
	}
	
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	let vol = volume_slider.value/100;
	video.volume = vol;
	console.log(vol);
	document.getElementById("volume").innerHTML = volume_slider.value;
});
