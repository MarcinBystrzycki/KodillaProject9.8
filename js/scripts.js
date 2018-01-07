var leftChevron = document.getElementById("leftChevron"),
	rightChevron = document.getElementById("rightChevron"),
	flatIphoneImage = document.getElementById("flatIphoneImage"),
	numberIndicator = document.getElementById("numberIndicator"),
	imageIphoneArray = ["images/build/flat darkgreen.png", 
						"images/build/flat green.png", 
						"images/build/flat red.png", 
						"images/build/flat yellow.png", 
						"images/build/flat white.png"],
	x = 1;

function changeDesign(direction) {
	if (direction === "next") {

		if (x == imageIphoneArray.length) {
			x = 1;
		}
		else {
			x++;
		}
	}
	else if (direction === "prev"){
		if (x == 1) {
			x = imageIphoneArray.length;
		}
		else {
			x--;
		}	
	}
	numberIndicator.innerText = "0" + x + "/05";
	flatIphoneImage.src = imageIphoneArray[x-1];
}

rightChevron.addEventListener("click", function() {
	changeDesign("next");
})

leftChevron.addEventListener("click", function() {
	changeDesign("prev");
})

// gallery chevron script

var galleryLeftChevron = document.getElementById("galleryLeftChevron"),
	galleryRightChevron = document.getElementById("galleryRightChevron"),
	firstImage = document.getElementById("firstImageId"),
	secondImage = document.getElementById("secondImageId"),
	galleryImageArray = ["images/build/Livello 5.png", 
						"images/build/Livello 6.png", 
						"images/build/Livello 7.jpg", 
						"images/build/Livello 8.jpg"],
	firstImageNumber = 0;
	secondImageNumber = 1;
	galleryLength = galleryImageArray.length;

function moveFirstImageGallery(direction) {
	if (direction === "next") {
		if (firstImageNumber == galleryLength-1) {
			firstImageNumber = 0;
		}
		else {
			firstImageNumber++;
		}
		firstImage.src = galleryImageArray[firstImageNumber];
	}
	if (direction === "prev") {
		if (firstImageNumber == 0) {
			firstImageNumber = galleryLength-1;
		}
		else {
			firstImageNumber--;
		}
		firstImage.src = galleryImageArray[firstImageNumber];
	}
}

function moveSecondImageGallery(direction) {
	if (direction === "next") {
		if (secondImageNumber == galleryLength-1) {
			secondImageNumber = 0;
		}
		else {
			secondImageNumber++;
		}
		secondImage.src = galleryImageArray[secondImageNumber];
	}
	if (direction === "prev") {
		if (secondImageNumber == 0) {
			secondImageNumber = galleryLength-1;
		}
		else {
			secondImageNumber--;
		}
		secondImage.src = galleryImageArray[secondImageNumber];
	}
}


galleryLeftChevron.addEventListener("click", function() {
	moveFirstImageGallery("prev");
	moveSecondImageGallery("prev");
})
galleryRightChevron.addEventListener("click", function() {
	moveFirstImageGallery("next");
	moveSecondImageGallery("next");
})