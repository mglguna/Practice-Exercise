var mydata,time_is_on=0,newLI,x;
function load() {
//mydata = JSON.parse(a);
	mydata = a;
	document.getElementById("conferenceImages").src = mydata.Conferences.Conference1["Event Image URL"];
	imageRender();
	addbooks();
	
}
function imageRender(){
	var i=9000,i1=5000,i2=7000;
	window.setInterval(function(){imagetimer(mydata.Conferences.Conference1)},i);
	window.setInterval(function(){imagetimer(mydata.Conferences.Conference2)},i1);	
	window.setInterval(function(){imagetimer(mydata.Conferences.Conference3)},i2);
}
function imagetimer(conference){	
			console.log(conference["Event Image URL"]);
			document.getElementById("conferenceImages").src = conference["Event Image URL"];																
}
function addbooks(){	
	for(j1 in mydata.Books){
		var x=document.getElementById("newestbooksimages");
		newLI=document.createElement('li');
		newImg=document.createElement('img');
		newImg.src=mydata.Books[j1]["Image URL"];
		newImg.height=142;
		newImg.width=100;
		newImg.id=j1;
		newImg.onclick=function(){contentDisplay(this.id)};
		newLI.appendChild(newImg);
		x.appendChild(newLI);	
					
	}
}
function imageonclick(){
	document.getElementById("bookDescription").style.display="none";
	document.getElementById("bookDetail").style.display="inline";
	document.getElementById("desheader").style.background="#dddddd";
	document.getElementById("detheader").style.background="white";
	
}
function desconclick(){
	document.getElementById("bookDetail").style.display="none";
	document.getElementById("bookDescription").style.display="block";
	document.getElementById("detheader").style.background="#dddddd";
	document.getElementById("desheader").style.background="white";

}
function detail_book_page(bookName){
	document.getElementById("bookimg").src=mydata.Books[bookName]["Image URL"];
	document.getElementById("h4Title").innerHTML=mydata.Books[bookName]["Title"];
	document.getElementById("h5Subtitle").innerHTML=mydata.Books[bookName]["Subtitle"];
	document.getElementById("bookDetailsAuthor").innerHTML="Author: "+ mydata.Books[bookName]["Author"];
	document.getElementById("bookDetailsPublisher").innerHTML="Publisher: "+ mydata.Books[bookName]["Publisher"];
	document.getElementById("bookDetailsPrice").innerHTML="Price "+ mydata.Books[bookName]["Price"];
	document.getElementById("bookdesc").innerHTML=mydata.Books[bookName]["Description"];			
	otherBookDisplay(bookName);		
}


function otherBookDisplay(bookName){
	for (i1 in mydata.Books){
		if(i1!=bookName){
			var x=document.getElementById("otherbooks");
			/*newLI=document.createElement('li');*/
			newImg=document.createElement('img');
			newImg.src=mydata.Books[i1]["Image URL"];
			newImg.height=120;
			newImg.width=100;
			newImg.id=i1;
			newImg.onclick=function(){contentDisplay1(this.id)};
			/*newLI.appendChild(newImg);*/
			newImg.style.paddingRight="15px";
			x.appendChild(newImg);			
		}			
	}		
}
function contentDisplay(bookName){
	console.log(bookName);
	document.getElementById("content").style.display="none";
	document.getElementById("contentbook").style.visibility="visible";
	detail_book_page(bookName);
}
function contentDisplay1(bookName){
	document.getElementById("otherbooks").innerHTML="";
	detail_book_page(bookName);
}
function displayHome(){
	document.getElementById("contentbook").style.visibility="hidden";
	document.getElementById("content").style.display="block";
	document.getElementById("otherbooks").innerHTML="";
	
}