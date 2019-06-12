;(function($){
    "use strict";
    $(window).load(function unitMap(){
        var map;
        var mapContainer = $("#map")[0];
        var mapCenter = {lat: -7.9254155, lng: 112.646477};
        var mapCenterMarker = {lat: -7.924088, lng: 112.647560};
      
        map = new google.maps.Map(mapContainer, {
            center: mapCenter,
            zoom: 16,
            zoomControl: true,
            mapTypeControl:  false,
            streetViewControl: false,
           
            scaleControl: true,
            
          });
            var styledMapType = new google.maps.StyledMapType(  
              [
                {
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#bdbdbd"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#ffffff"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#dadada"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#ffff00"
                    },
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "featureType": "road.highway.controlled_access",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#ffeb3b"
                    },
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road.highway.controlled_access",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#ffeb3b"
                    }
                  ]
                },
                {
                  "featureType": "road.highway.controlled_access",
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "simplified"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "transit.line",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "transit.station",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#c9c9c9"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#8080ff"
                    },
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#0000ff"
                    },
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                }
              ],
          {name: 'Styled Map'});
          
          map.mapTypes.set('styled_map', styledMapType);
          map.setMapTypeId('styled_map');
          
          var marker = new google.maps.Marker({
            position:  mapCenterMarker,
            map: map,
            icon: "./img/Pin.png"
            
          });
        });
var $page = $('html, body');
$('a[href="#"]').click(function() {
    $page.animate({scrollTop: 0}, 1000);
    
    return false;
});


var $about = $('html, body');
$('a[href="#about"]').click(function() {
    $about.animate({scrollTop: 924}, 1000);
    return false;
});
var $home = $('html, body');
$('a[href="#home"]').click(function() {
    $home.animate({scrollTop: 0}, 1000);
    return false;
});
var $services = $('html, body');
$('a[href="#services"]').click(function() {
    $services.animate({scrollTop: 1710}, 1000);
    return false;
});
var $works = $('html, body');
$('a[href="#works"]').click(function() {
    $works.animate({scrollTop: 2528}, 1000);
    return false;
});
var $contact = $('html, body');
$('a[href="#contact"]').click(function() {
    $contact.animate({scrollTop: 4357}, 1000);
    return false;
});


$(document).ready(
  function(){
  $('.slick__slide').slick({
      dots: true,
infinite: true,
speed: 300,
slidesToShow: 1,
adaptiveHeight: true,
slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 4000,
  
  });
  
});


$(document).ready(
  function(){
  $('.slick__slide1').slick({
  
infinite: true,
speed: 300,
slidesToShow: 3,
adaptiveHeight: true,
slidesToScroll: 1,

responsive: [
    {
    breakpoint: 1200,
    settings: {
    
  slidesToShow: 2,
  slidesToScroll: 1,
      }
    },
    {
    breakpoint: 576,
    settings: {
  slidesToShow: 1,
  slidesToScroll: 1,

      mobileFirst:true
      }
    }]
  
  });
  
});

function headerScrolled() {

  $('.header__navigation').addClass('header__navigation--scroll');
}

function headerNoScrolled() {

  $('.header__navigation').removeClass('header__navigation--scroll');
}


window.onscroll = function init() {
  if (window.pageYOffset != 0) {

      headerScrolled();
  } else {
      headerNoScrolled();
  }
};
init();


$('.burger').on("click", function () {
  $(this).toggleClass("active");
  $(".header__menu").toggleClass("open");
  $(".header__menu__ul").removeClass("d-flex");
  $(".header__navigation--scroll").addClass("ac");

  
})

$('.header__link').on("click", function () {
       
  $(".header__navigation--scroll").removeClass("active");
  $('.burger').removeClass("active");
  $(".header__menu").removeClass("open");
})

$( "input" ).focus(function() {
  // $( this ).css( "background-color", "blue" );
$( this ).next( "label" ).css( "transform", "translateY(-45px)" );

});
$( "textarea" ).focus(function() {
  // $( this ).css( "background-color", "blue" );
$( this ).next( "label" ).css( "transform", "translateY(-45px)" );

});


})(jQuery);
