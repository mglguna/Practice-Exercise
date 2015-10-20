describe("protractor Demo app function",function(){
	it("should have a title",function(){
		browser.get("http://www.google.com/");
		expect(browser.getTitle()).toEqual('Super Calculator');
	});
});