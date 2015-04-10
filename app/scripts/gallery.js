var showBathGallery = function()
{
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Ostsee01.jpg',
				w: 640,
				h: 427
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Ostsee01.jpg',
				w: 1620,
				h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Ostsee02.jpg',
			w: 640,
			h: 427
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Ostsee02.jpg',
			w: 1620,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Ostsee03.jpg',
			w: 640,
			h: 427
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Ostsee03.jpg',
			w: 1620,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Ostsee04.jpg',
			w: 640,
			h: 427
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Ostsee04.jpg',
			w: 1620,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Ostsee05.jpg',
			w: 640,
			h: 960
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Ostsee05.jpg',
			w: 720,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Ostsee06.jpg',
			w: 640,
			h: 960
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Ostsee06.jpg',
			w: 720,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Ostsee07.jpg',
			w: 640,
			h: 427
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Ostsee07.jpg',
			w: 1620,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Ostsee08.jpg',
			w: 640,
			h: 427
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Ostsee08.jpg',
			w: 1620,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Pforte01.jpg',
			w: 640,
			h: 853
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Pforte01.jpg',
			w: 810,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Pforte02.jpg',
			w: 640,
			h: 853
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Pforte02.jpg',
			w: 810,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Pforte03.jpg',
			w: 640,
			h: 853
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Pforte03.jpg',
			w: 810,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Pforte04.jpg',
			w: 640,
			h: 853
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Pforte04.jpg',
			w: 810,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Thiele01.jpg',
			w: 636,
			h: 960
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Thiele01.jpg',
			w: 715,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Thiele02.jpg',
			w: 636,
			h: 960
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Thiele02.jpg',
			w: 715,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Thiele03.jpg',
			w: 636,
			h: 960
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Thiele03.jpg',
			w: 715,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Thiele04.jpg',
			w: 636,
			h: 960
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Thiele04.jpg',
			w: 715,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Thiele05.jpg',
			w: 640,
			h: 424
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Thiele05.jpg',
			w: 1631,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Thiele06.jpg',
			w: 636,
			h: 960
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Thiele06.jpg',
			w: 715,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Koeppe01.jpg',
			w: 636,
			h: 960
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Koeppe01.jpg',
			w: 715,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Koeppe02.jpg',
			w: 636,
			h: 960
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Koeppe02.jpg',
			w: 715,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Koeppe03.jpg',
			w: 640,
			h: 424
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Koeppe03.jpg',
			w: 1631,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Bad/640x960/Koeppe04.jpg',
			w: 636,
			h: 960
		},
		originalImage: {
			src: '../images/gallery/Bad/1080p/Koeppe04.jpg',
			w: 715,
			h: 1080
		}
	}
	];

	// define options (if needed)
	var options = {
		// optionName: 'option value'
		// for example:
		index: 0 // start at first slide
	};

	// Initializes and opens PhotoSwipe
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

	// create variable that will store real size of viewport
	var realViewportWidth,
	    useLargeImages = false,
	    firstResize = true,
	    imageSrcWillChange;

	// beforeResize event fires each time size of gallery viewport updates
	gallery.listen('beforeResize', function() {
		// gallery.viewportSize.x - width of PhotoSwipe viewport
		// gallery.viewportSize.y - height of PhotoSwipe viewport
		// window.devicePixelRatio - ratio between physical pixels and device independent pixels (Number)
		//                          1 (regular display), 2 (@2x, retina) ...


		// calculate real pixels when size changes
		realViewportWidth = gallery.viewportSize.x * window.devicePixelRatio;

		// Code below is needed if you want image to switch dynamically on window.resize

		// Find out if current images need to be changed
		if(useLargeImages && realViewportWidth < 1000) {
			useLargeImages = false;
			imageSrcWillChange = true;
		} else if(!useLargeImages && realViewportWidth >= 1000) {
			useLargeImages = true;
			imageSrcWillChange = true;
		}

		// Invalidate items only when source is changed and when it's not the first update
		if(imageSrcWillChange && !firstResize) {
			// invalidateCurrItems sets a flag on slides that are in DOM,
			// which will force update of content (image) on window.resize.
			gallery.invalidateCurrItems();
		}

		if(firstResize) {
			firstResize = false;
		}

		imageSrcWillChange = false;

	});


	// gettingData event fires each time PhotoSwipe retrieves image source & size
	gallery.listen('gettingData', function(index, item) {

		// Set image source & size based on real viewport width
		if( useLargeImages ) {
			item.src = item.originalImage.src;
			item.w = item.originalImage.w;
			item.h = item.originalImage.h;
		} else {
			item.src = item.mediumImage.src;
			item.w = item.mediumImage.w;
			item.h = item.mediumImage.h;
		}

		// It doesn't really matter what will you do here, 
		// as long as item.src, item.w and item.h have valid values.
		// 
		// Just avoid http requests in this listener, as it fires quite often

	});

	gallery.init();
}


var showHeatingGallery = function()
{
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
	{
		mediumImage: {
			src: '../images/gallery/Heizung/640x960/Bosse01.jpg',
				w: 640,
				h: 424
		},
		originalImage: {
			src: '../images/gallery/Heizung/1080p/Bosse01.jpg',
				w: 1631,
				h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Heizung/640x960/Bosse02.jpg',
			w: 640,
			h: 424
		},
		originalImage: {
			src: '../images/gallery/Heizung/1080p/Bosse02.jpg',
			w: 1631,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Heizung/640x960/Kaskade01.jpg',
			w: 640,
			h: 424
		},
		originalImage: {
			src: '../images/gallery/Heizung/1080p/Kaskade01.jpg',
			w: 1631,
			h: 1080
		}
	},
	{
		mediumImage: {
			src: '../images/gallery/Heizung/640x960/Kaskade02.jpg',
			w: 640,
			h: 480
		},
		originalImage: {
			src: '../images/gallery/Heizung/1080p/Kaskade02.jpg',
			w: 1440,
			h: 1080
		}
	}
	];

	// define options (if needed)
	var options = {
		// optionName: 'option value'
		// for example:
		index: 0 // start at first slide
	};

	// Initializes and opens PhotoSwipe
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

	// create variable that will store real size of viewport
	var realViewportWidth,
	    useLargeImages = false,
	    firstResize = true,
	    imageSrcWillChange;

	// beforeResize event fires each time size of gallery viewport updates
	gallery.listen('beforeResize', function() {
		// gallery.viewportSize.x - width of PhotoSwipe viewport
		// gallery.viewportSize.y - height of PhotoSwipe viewport
		// window.devicePixelRatio - ratio between physical pixels and device independent pixels (Number)
		//                          1 (regular display), 2 (@2x, retina) ...


		// calculate real pixels when size changes
		realViewportWidth = gallery.viewportSize.x * window.devicePixelRatio;

		// Code below is needed if you want image to switch dynamically on window.resize

		// Find out if current images need to be changed
		if(useLargeImages && realViewportWidth < 1000) {
			useLargeImages = false;
			imageSrcWillChange = true;
		} else if(!useLargeImages && realViewportWidth >= 1000) {
			useLargeImages = true;
			imageSrcWillChange = true;
		}

		// Invalidate items only when source is changed and when it's not the first update
		if(imageSrcWillChange && !firstResize) {
			// invalidateCurrItems sets a flag on slides that are in DOM,
			// which will force update of content (image) on window.resize.
			gallery.invalidateCurrItems();
		}

		if(firstResize) {
			firstResize = false;
		}

		imageSrcWillChange = false;

	});


	// gettingData event fires each time PhotoSwipe retrieves image source & size
	gallery.listen('gettingData', function(index, item) {

		// Set image source & size based on real viewport width
		if( useLargeImages ) {
			item.src = item.originalImage.src;
			item.w = item.originalImage.w;
			item.h = item.originalImage.h;
		} else {
			item.src = item.mediumImage.src;
			item.w = item.mediumImage.w;
			item.h = item.mediumImage.h;
		}

		// It doesn't really matter what will you do here, 
		// as long as item.src, item.w and item.h have valid values.
		// 
		// Just avoid http requests in this listener, as it fires quite often

	});

	gallery.init();
}
