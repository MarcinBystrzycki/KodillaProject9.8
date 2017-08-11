// iPhone color script

var leftChevron = document.getElementById("leftChevron"),
	rightChevron = document.getElementById("rightChevron"),
	flatIphoneImage = document.getElementById("flatIphoneImage"),
	numberIndicator = document.getElementById("numberIndicator"),
	imageIphoneArray = ["images/build/flat darkgreen.png", "images/build/flat green.png", "images/build/flat red.png", "images/build/flat yellow.png", "images/build/flat white.png"];
var x = 1;

function addX() {
	x++;
	
	if (x >= 5) {
		x = 0;
	};
}

function deductX() {
	x--;
	
	if (x <= 0) {
		x = 5;
	};
}

rightChevron.addEventListener("click", function() {
	addX();
	numberIndicator.innerText = "0" + x + "/05";
	flatIphoneImage.src = imageIphoneArray[x];
})

leftChevron.addEventListener("click", function() {
	deductX();
	numberIndicator.innerText = "0" + x + "/05";
	flatIphoneImage.src = imageIphoneArray[x];
})

// gallery chevron script

var galleryLeftChevron = document.getElementById("galleryLeftChevron"),
	galleryRightChevron = document.getElementById("galleryRightChevron"),
	firstImage = document.getElementById("firstImageId"),
	secondImage = document.getElementById("secondImageId"),
	galleryImageArray = ["images/build/Livello 5.png", "images/build/Livello 6.png", "images/build/Livello 7.jpg", "images/build/Livello 8.jpg"];
var y = 0,
	galleryLength = galleryImageArray.length;

function nxt() {
	if (y < galleryLength - 1) {
		y++;
	} else {
		y = 0;
	}

	firstImage.src = galleryImageArray[y];
	secondImage.src = galleryImageArray[++y];
}

function prvs() {
	if (y > 0) {
		y--;
	} else {
		y = galleryLength - 1;
	}
	firstImage.src = galleryImageArray[y];
	secondImage.src = galleryImageArray[--y];
}
galleryLeftChevron.addEventListener("click", function() {
	nxt();
})
galleryRightChevron.addEventListener("click", function() {
	prvs();
})