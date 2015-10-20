/*describe("Provider",function(){
	beforeEach(module("myApp"));
	describe("myProvider",function(){
		var myProvider;
		beforeEach(inject(function($provider){
			myProvider=$provider("myProviderProvider",{});
			it("should check color",function(){
				//myProvider.setColor="Blue";				
				expect(myProvider.$get().color).toEqual("Yellow");
			});
			
		}));	

	});
});*/
describe('Provider',function(){
	beforeEach(module('myApp'));
	describe('myProviderProvider',function(){
		var myProvider,controller;
		beforeEach(inject(function($Provider,$controller,$scope){
			//$scope={};
			controller=$controller('myCtrl',{$scope:$scope});
			myProvider=$Provider('myProviderProvider');
			myProvider.setColor="yellow";
		
		it('Should check color is same for color variable',function(){
				color=myProvider.$get().color;
				expect(color).toEqual("red");
			//expect(reverse('liril')).toBe('liril');
			//expect(reverse('irahC')).toBe('Chari');
		});
		}));
		
	});
});	

