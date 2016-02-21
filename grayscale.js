/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll

snowy = false;
windy = false;
cold = false;
hot = false;
average = false;
rainy = false;


$(document).ready(function(){
                  
                  intro();
                  whatToWear();
                  });

function intro()
{
    var defaultReturnValue = 0;
    var returnValue = defaultReturnValue;
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=44db6a862fba0b067b1930da0d769e98", function(person)
              {
              if(person != null) {
              
              returnValue = person;
              mainTemp(returnValue);
              hotCold(returnValue);

              
              }
              });
}
/*!
 * Weather Rating Functions
 */

function whatToWear() {
    console.log(snowy);
    console.log(windy);
    console.log(rainy);
    console.log(average);
    console.log(cold);
    console.log(hot);
    if (snowy == "true") {
        $('#description').text("It's snowing! We recommend bundling up in a coat, scarf, snow boots and mittens!");
    }
    else if (windy == "true") {
        $('#description').text("It's windy today. Throw on some light layers--a tshirt, jacket, scarf and boots.");
    }
    else if (rainy == "true") {
        $('#description').text("It's raining cats and dogs! We recommend wearing boots, pants, a rain jacket, and of course an umbrella!");
    }
    else if (average == "true") {
        console.log("hello");
        $('#description').text("Not too hot, not too cold. Put on some jeans, a tshirt, sneakers and a cap.");
    }
    else if (cold == "true") {
        $('#description').text("Brrr, it's cold in here...Layer up with a sweater, jacket, hat, and gloves");
    }
    else {
        console.log(average);
        console.log(hot);
        $('#description').text("It's swimsuit weather!! Put on your bathing suit, sun hat, shorts, and shades");
    }
    
}
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

function toFahrenheit(kelvin) {
    return kelvin*(9/5) - 459.67
}

function mainTemp(obj) {
    temp = obj.main.temp;
    temp = parseInt(toFahrenheit(temp));
    $('#degree').text(temp);
    desc = (obj.weather[0]).description;
    $('#desc').text(desc);
    city = obj.name;
    $('#city').text(city);
}
function hotCold(obj) {
    temp = obj.main.temp;
    temp = toFahrenheit(temp);
    w = obj.wind.speed;
    main = (obj.weather[0]).main;
    console.log(temp);
    if (temp < 32) {
        snowy = "true";
    }
    else if (main == "Rain" && rain > 0.3) {
        rainy = "true";
    }
    else if (w > 61) {
        windy = "true";
    }
    else if (temp < 41)
    {
        cold = "true";
    }
    else if (temp < 71)
    {
        average = "true";
        console.log(average);
        console.log("fuck");
    }
    else
    {
        hot = "true";
        console.log(hot);
        console.log("hot");
    }
    

}


function unixTimeConvertor(obj) {
    dt = alert(obj.dt);
    var date = new Date(dt*1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    var year = date.getFullYear();
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var month = months[date.getMonth()];
    var day = date.getDate();
    return (month + ' ' +day + ', ' + year + ' ' +  formattedTime);
}

function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

jQuery(window).scroll(collapseNavbar);
jQuery(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
jQuery(function() {
       $('a.page-scroll').bind('click', function(event) {
                               var $anchor = $(this);
                               $('html, body').stop().animate({
                                                              scrollTop: $($anchor.attr('href')).offset().top
                                                              }, 1500, 'easeInOutExpo');
                               event.preventDefault();
                               });
       });

// Closes the Responsive Menu on Menu Item Click
jQuery('.navbar-collapse ul li a').click(function() {
                                         if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
                                         $('.navbar-toggle:visible').click();
                                         }
                                         });

// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
    zoom: 15,
        
        // The latitude and longitude to center the map (always required)
        
        // Disables the default Google Maps UI components
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
        
        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
    styles: [{
             "featureType": "water",
             "elementType": "geometry",
             "stylers": [{
                         "color": "#000000"
                         }, {
                         "lightness": 17
                         }]
             }, {
             "featureType": "landscape",
             "elementType": "geometry",
             "stylers": [{
                         "color": "#000000"
                         }, {
                         "lightness": 20
                         }]
             }, {
             "featureType": "road.highway",
             "elementType": "geometry.fill",
             "stylers": [{
                         "color": "#000000"
                         }, {
                         "lightness": 17
                         }]
             }, {
             "featureType": "road.highway",
             "elementType": "geometry.stroke",
             "stylers": [{
                         "color": "#000000"
                         }, {
                         "lightness": 29
                         }, {
                         "weight": 0.2
                         }]
             }, {
             "featureType": "road.arterial",
             "elementType": "geometry",
             "stylers": [{
                         "color": "#000000"
                         }, {
                         "lightness": 18
                         }]
             }, {
             "featureType": "road.local",
             "elementType": "geometry",
             "stylers": [{
                         "color": "#000000"
                         }, {
                         "lightness": 16
                         }]
             }, {
             "featureType": "poi",
             "elementType": "geometry",
             "stylers": [{
                         "color": "#000000"
                         }, {
                         "lightness": 21
                         }]
             }, {
             "elementType": "labels.text.stroke",
             "stylers": [{
                         "visibility": "on"
                         }, {
                         "color": "#000000"
                         }, {
                         "lightness": 16
                         }]
             }, {
             "elementType": "labels.text.fill",
             "stylers": [{
                         "saturation": 36
                         }, {
                         "color": "#000000"
                         }, {
                         "lightness": 40
                         }]
             }, {
             "elementType": "labels.icon",
             "stylers": [{
                         "visibility": "off"
                         }]
             }, {
             "featureType": "transit",
             "elementType": "geometry",
             "stylers": [{
                         "color": "#000000"
                         }, {
                         "lightness": 19
                         }]
             }, {
             "featureType": "administrative",
             "elementType": "geometry.fill",
             "stylers": [{
                         "color": "#000000"
                         }, {
                         "lightness": 20
                         }]
             }, {
             "featureType": "administrative",
             "elementType": "geometry.stroke",
             "stylers": [{
                         "color": "#000000"
                         }, {
                         "lightness": 17
                         }, {
                         "weight": 1.2
                         }]
             }]
    };
    
    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    
    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);
    
    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
                                             position: myLatLng,
                                             map: map,
                                             icon: image
                                             });
}
