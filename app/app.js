angular.module("myApp",[])
.controller("passwordController",function($scope){
	$scope.password="";
	$scope.grade=function(){
		var size=$scope.password.length;
		if(size>8){
			$scope.strength='strong';
		}
		else if(size>3){
			$scope.strength='medium';
		}
		else{
			$scope.strength='weak';
		}
	}
})
.filter("reverse",function(){
	return function(string){
		return string.split('').reverse().join('');
	}	
})
.provider('MyService', function () {
    var service = {};
    service.configureSomething = function () {
        return 461;
    };
    service.$get = function () {
        return {};
    };
    return service;
})
.directive('myDirect', function() {
	  return {
		restrict: "E",
		transclude:true,
		scope:{},
		link:function(scope,element,attr){
		  scope.first=attr.first;
		  scope.last=attr.last;
		},
		template:"<h1>{{last}},{{first}}<ng-transclude></ng-transclude></h1>"		
	  }
});

/*.provider("myProvider",function(){
	var hex;
	return{
		setColor:function(value){
			hex=value;
		},
		$get:function(){
			return{
				color:hex
			}
		}
	}
});*/