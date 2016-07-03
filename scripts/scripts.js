$(document).ready(function() {
    console.log('site loaded');
// OLD CODE //
    // $("div").click(function() {
    //     if (typeof $(this).attr('class') == 'string') {
    //         if ($(this).attr('class') == 'mainPic') {} else {

    //             var imageReplaced = 'images/' + $(this).attr("class") + $(this).html() + '.jpg';

    //             console.log($(this).attr('class'));
    //             $(this).attr('class', 'aclicked');

    //             $(".mainImage").fadeOut(400, function() {
    //                 $(".mainImage").attr("src", imageReplaced);
    //                 $(".mainImage").fadeIn(400);
    //                 console.log('you are viewing ' + imageReplaced);

    //                 $('.mainLink').attr('src', 'http://clunkerspace.com/' + $('.mainImage').attr('src'));
    //             });
    //         }

    //     }
    // });

//LOCATION//
// if('geolocation' in navigator) {
// 	navigator.geolocation.getCurrentPosition(function(position) {
// 		loadWeather(position.coords.latitude+','+position.coords.longitude);
// 	});
// } else {
// 	loadWeather('New York, NY', '');
// }

// $(document).ready(function() {
// 	setInterval(loadWeather, 10);
// });

// var x = document.getElementById("demo");

// function loadWeather(location, woeid) {
// 	$.simpleWeather({
// 		location : location,
// 		woeid : woeid,
// 		unit : 'F',
// 		success : function(weather) {
// 			city = weather.city;
// 			temp = weather.temp + '&deg;';
// 			$('.location').html('From ' + city + ', huh? Get a spaceship.');



			

// 		},
// 		error : function(error) {
// 			$('.error').html('<p>' + error + '</p>');
// 		}
// 	});
// }


// why the fuck did you do all the above?
    $('a').click(function() {
        $('a').attr('class', 'page_')
        var sourceMain = $(this).find('div').text();
        $(".mainImage").attr("src", 'images/page_' + sourceMain + '.jpg');
        $(this).toggleClass('aclicked');
    })
});


