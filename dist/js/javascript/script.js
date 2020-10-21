
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}




      // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 9,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(33.770050, -118.193741), // Long Beach

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                      styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                const contentString =
                '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<div id="bodyContent">' +
                "<p><white>Awesome  Address 432</p>" + "<p>oumail@sometype.com</p>" +
                "<p>+321(0)32 123 343 492</white</p>" +
                "</div>" +
                "</div>";
              const infowindow = new google.maps.InfoWindow({
                content: contentString,
              });

              var marker = new google.maps.Marker({
                position: new google.maps.LatLng(33.770050, -118.193741),
                map: map,
                icon: './css/images/PIN.png',
               /* label: {   fontsize: '15px',
                            fontfamily: 'Raleway Medium',
                            fontweight: '400',
                            color: 'rgb(255, 255, 255)',
                            text: 'Awesome  Address 432  oumail@sometype.com   +321(0)32 123 343 492' },
                 optimized: false,
                 visible: true
      */
                });    

                marker.addListener("click", () => {
                      infowindow.open(map, marker);
                    });
                  }
      


jQuery(document).ready(function($)
{

  var owl = jQuery('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
           700:{
              items:2
          },
           1000:{
              items:3
       
          },
          1025:{
              items:5
          }
      }
  });             

  // owl.owlcarousel2_filter( '.blue' );

  $( '.owl-filter-bar' ).on( 'click', '.item', function() {

      var $item = $(this);
      var filter = $item.data( 'owl-filter' );

      owl.owlcarousel2_filter( filter );

  } );

 
});


 $('.counter').counterUp({
  delay:10,
  time: 1000

  });

/*

(function () {
  $('.navbar-toggler').on('click', function() {
    $('.navbar-collapse').toggleClass('animate');
    var nav = $('.navbar-nav');
    nav.toggleClass('hide show');
  })
})();

*/