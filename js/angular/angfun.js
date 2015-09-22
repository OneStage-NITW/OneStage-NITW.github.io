var index = angular.module('onestagesiteindex',[]);
index.controller('stickynotes',function(){
	var note=this;
	note.test="hello";
	note.notes=[{
		message: "Upcoming Event",
		secmessage: "CBIT: April-12",
		href: '#'
	},
	{
		message: "New photos",
		secmessage: "SpringSpree 2015",
		href: 'spree2015.html'
	}];
});

index.controller('pictures',function($scope){
	var pic=this;
	$scope.Math=Math;
	pic.getTimes=function(n){
     return new Array(n);
};
})

index.controller('landing',function($scope){
	$.ajax({
    url: 'http://onestagenitwweb.pythonanywhere.com/getcount',
    dataType: 'JSONP',
    jsonpCallback: 'callback',
    type: 'GET',
    success: function (data) {
        console.log(data);
    }
   });
	
});
