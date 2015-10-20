/*describe('Filters',function(){
	beforeEach(module('myApp'));
	describe('reverse',function(){
		var reverse;
		beforeEach(inject(function($filter){
			reverse=$filter('reverse',{});
		}));
		it('Should reverse a string',function(){
			expect(reverse('Guna')).toBe('anuG');
			expect(reverse('liril')).toBe('liril');
			expect(reverse('irahC')).toBe('Chari');
		});
	});
});	
describe("passwordController",function(){
	var $controller;
	beforeEach(module("myApp"));
	beforeEach(inject(function(_$controller_){
		$controller=_$controller_;
	}));
	describe('$scope.grade',function(){
		it('set the strength to "strong" if password length is > 8',function(){
			var $scope={};
			var controller=$controller('passwordController',{$scope:$scope});
			$scope.password="longerthaneightcharacter"
			$scope.grade();
			expect($scope.strength).toEqual('strong');
		});
	});
});
/*describe('myApp', function () {
    var myServiceProvider;
    beforeEach(function () {        
        angular.module('testApp', function () {})
            .config(function (MyServiceProvider) {
            myServiceProvider = MyServiceProvider;
        });        
        module('myApp', 'testApp');
        inject(function () {});
    });
    it('tests the providers internal function', function () {
        expect(myServiceProvider.configureSomething()).toEqual(461);
    });
});*/
/*describe('unit test myDirect',function(){
	var $compile,$rootScope;
	beforeEach(module("myApp"));
	beforeEach(inject(function(_$compile_,_$rootScope_){
		$compile=_$compile_;
		$rootScope=_$rootScope_;
	}));
	it('replace element with appropriate content',function(){
		var element=$compile("<my-direct first='guna' last='chari'></my-direct>")($rootScope);
		$rootScope.$digest();
		expect(element.html()).toEqual("chari,guna");
	});
});*/

/*describe("myProvider",function(){
	var $provider;
	beforeEach(function(){
		angular.module("myApp",function(){}).config(function(myProviderProvider){
			$provider=myProviderProvider;
		});
		module("myApp","myProvider");
		inject(function(){});
	});
	it('set the color of myProvider and see whether it returns same',function(){
			$provider.setColor="red";
			expect($provider.$get().color).toEqual('red');
	});	
});*/
/*describe("Provider",function(){
	var myProvider;
	beforeEach(function(){
		var moduleApp=angular.module("myApp",function(){});
		moduleApp.config(function(myProviderProvider){
			myProvider=myProviderProvider;
		});
		inject(function(){});
	});
	describe("custom configuration function",function(){
		it('test the providers internal function',function(){
			expect(myProvider).not.toBeDefined();
			myProvider.setColor="red";
			expect(myProvider.$get().color).toBe("yellow");		
	});
});
});*/
/*describe("myProviderProvider",function(){
var provider;
beforeEach(module('myApp', function(myProvider) {
    provider = myProvider;	
}));
it('tests the providers internal function', inject(function($provider) {	
		$provider.setColor="Blue";
		expect($provider.$get().color).toBe("Blue");
}));	
});*/

