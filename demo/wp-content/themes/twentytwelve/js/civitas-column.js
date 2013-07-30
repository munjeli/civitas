/*jquery functions for columned pages such as the forum and calendar
 * Ele Munjeli 4.1.2013
 */

jQuery(document).ready(function ( $ ){
	
	columnSize();
	$(window).resize( function(){
			columnSize();
	});	
	
	function columnSize(){
		
		var pageWidth = $(document).width();
		var columnWidth = (pageWidth - 962)/2;
		var columnHeight = ($(document).height()) - 148;
		var contentHeight = ($(document).height()) - 178;		
		
		$('div.column-style').css('width', columnWidth + 'px');
		$('div.column-style').css('height', columnHeight + 'px');
		$('div#calendar-content').css('height', contentHeight);
		$('div.columned-content').css('height', contentHeight);		
		
	}
	
});