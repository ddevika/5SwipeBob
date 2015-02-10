function loadPage2(){

$(document).ready(function(){
 	 $("#tfnewsearch2").submit(function(event){
  		event.preventDefault();
  		$('.content-list').show();
  		 });
	});
 
	var text = document.getElementById('q').value;
	var str = text;

 $.getJSON( "DataSet2.json", function( data ) {
   // now you can read the data
   var LatLongData = data;
   console.log(LatLongData);
   //var LatLng1 = new google.maps.LatLng(LatLongData[0]);
});


}


function load() {
var mydata = JSON.parse(data);
        console.log(mydata[1].TERM);

}