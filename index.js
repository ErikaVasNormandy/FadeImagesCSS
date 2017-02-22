var appName=angular.module("AppForHTML", []);

var bgImageArray = ["https://images7.alphacoders.com/644/thumb-1920-644071.png", "https://i.imgur.com/IElwzES.png", "http://images6.fanpop.com/image/photos/39500000/OTGW-over-the-garden-wall-39594421-1920-1080.jpg"], base = "";
var secs = 4;
bgImageArray.forEach(function(img){
    new Image().src = base + img;
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){
			document.documentElement.style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
			document.documentElement.style.backgroundSize ="cover";
		if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }
		}, (secs * 1000) * i)
	}
}
backgroundSequence();



appName.controller("ctrl1", function($scope, $timeout) {
  $scope.message="Hello!"
  // $scope.AngularCSS={
  //
  //
  // }

});
