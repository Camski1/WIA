/*
$( "#btn1" ).click(function() {
  $( "#popUp" ).show( "slow", function() {
  });
});

$( ".cancel" ).click(function() {
  $( "#popUp" ).hide( "slow", function() {
  });
});

$( ".submit" ).click(function() {
  $( "#popUp" ).hide( "slow", function() {
  });
});


*/

$(function(){
  $('#world-map').vectorMap({
    map: 'world_mill_en',
    zoomOnScroll: false,
    scaleColors: ['#6C597F', '#6C597F'],
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    markerStyle: {
      initial: {
        fill: '#B1D873',
        stroke: '#383f47'
      }
    },
    backgroundColor: '#6C597F',
    markers: [

      {latLng: [46.02, 33.55], name: 'Crimea'},
      {latLng: [1.3, 103.8], name: 'Singapore'},
      {latLng: [31.3, -99.38], name: 'Dallas'},
      {latLng: [7.3, -63.38], name: 'Maripa'},
      {latLng: [26.02, 50.55], name: 'Bahrain'},
      {latLng: [0.03, 22.73], name: 'Liebo'}
    ]
  });
});





$("#btn1, .submit, .cancel").click(function () {
  if ( $( "#popUp" ).is( ":hidden" ) ) {
    $( "#popUp, .overlay" ).show("slow");
  }else{
  	 $( "#popUp" ).hide("slow");
  }
});



