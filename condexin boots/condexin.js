/*var mydata=a;
console.log(mydata);*/
$("document").ready(function(){
	$.getJSON(a,function(e){
		console.log(e.books.book1.title);
	});
});