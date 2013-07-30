/*jQuery functionality for Civitas ARG 
 * Maps and other stuff
 * Ele Munjeli 3.27.2013
 */
jQuery(document).ready(function ( $ ){
	
	mapSize();
	$(window).resize( function(){
			mapSize();
	});	
		
	function mapSize(){
		//the gmap needs a defined number for the width and height of the container
		var mapWidth = $('div.wrapper').width();
		var mapHeight = $(document).height() - 178;
				
		$('div#map-content').css('width', mapWidth + 'px').css('height', mapHeight + 'px');
	
		$.getScript('/src/civitas/demo/wp-content/themes/twentytwelve/js/gmap3.min.js', function(){						
			$('div#map-content').gmap3({
					map:{
						options:{
							center:[47.043692,-122.89959],
							zoom: 16,
							mapTypeId:google.maps.MapTypeId.ROADMAP,
							styles:  [
							 {
							  	featureType: "poi",
							    elementType: "geometry.fill",
							    stylers: [
							      { visibility: "on" },
							      { color: "#777777" }
							    ]
							  },{
							   featureType: "water",
							    stylers: [
							      { color: "#294158" }
							    ]
							  },{
							   featureType: "landscape.natural.terrain",
							    stylers: [
							      { visibility: "off" }
							    ]
							  },{
							   featureType: "landscape.man_made",
							    elementType: "geometry.fill",
							    stylers: [
							      { color: "#999999" }
							    ]
							  },{
							   featureType: "road.highway.controlled_access",
							    stylers: [
							      { color: "#d0c9cc" }
							    ]
							  },{
							   featureType: "road.arterial",
							    elementType: "geometry",
							    stylers: [
							      { color: "#bcbbbc" }
							    ]
							  },{
							   featureType: "road.arterial",
							    elementType: "labels.text.stroke",
							    stylers: [
							      { color: "#bbbcbc" }
							    ]
							  },{
							   featureType: "road.local",
							   elementType: "geometry.fill",
							    stylers: [
							      { color: "#dfdfe3" }
							    ]
							  },{
							   featureType: "road.local",
							   elementType: "geometry.stroke",
							    stylers: [
							      { color: "#666666" }
							    ]
							  },{
							   featureType: "road.local",
							    elementType: "labels.text.fill",
							    stylers: [
							      { color: "#808080" }
							    ]
							  },{
							   featureType: "poi.park",
							    elementType: "geometry.fill",
							    stylers: [
							      { color: "#75857b" }
							    ]
							  },{
							   featureType: "poi.government",
							    elementType: "geometry.fill",
							    stylers: [
							      { visibility: "on" },
							      { color: "#333333" }
							    ]
							  },{
							    "featureType": "poi.business",
							    "stylers": [
							      { "visibility": "off" }
							    ]
							  },{
							   featureType: "poi.medical",
							   elementType: "labels.text.fill",
							    stylers: [
							      { color: "#333333" }
							    ]
							  },{
							   featureType: "poi.school",
							    stylers: [
							      { visibility: "off" }
							    ]
							  },{
							  },{
							   featureType: "landscape.natural",
							    elementType: "geometry.fill",
							    stylers: [
							      { visibility: "on" },
							      { color: "#b7a18d" }
							    ]
							  },{
							   featureType: "water",
							    elementType: "labels.text.fill",
							    stylers: [
							      { visibility: "on" },
							      { color: "#cfd5dc" }
							    ]
							  },{
							    featureType: "road.highway",
							    elementType: "geometry.fill",
							    stylers: [
							      { visibility: "on" },
							      { color: "#d0c9cc" }
							    ]
							  },{
							    featureType: "road.highway",
							    elementType: "geometry.stroke",
							    stylers: [
							      { visibility: "on" },
							      { color: "#666666" }
							    ]
							  },{
							    featureType: "road.arterial",
							    elementType: "geometry.stroke",
							    stylers: [
							      { color: "#666666" }
							    ]
							  },{
							    featureType: "road.highway",
							    elementType: "labels.text.fill",
							    stylers: [
							      { color: "#494949" }
							    ]
							  },{
							    featureType: "road.highway",
							    elementType: "labels.icon",
							    stylers: [
							      { visibility: "on" }
							    ]
							  }
							]
						}
					}						
						//}				
					});	
			});
		}
});
