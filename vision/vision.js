var text1='{"employees":[{"name":"sdasda","age":"sdasdas"}]}';
var text ='{"employees":[{"firstName":"Jen","AssignmentNumber":"EEEE8153772","position":"ddfsdfds","Location":"New York-NY","PersonalNumber":"8153756","Job":"Sales Representative","Department":"Vision Corporation Enterprise","Manager":"Jamie Frost","PromotionDate":"6/1/2015","PromotionAction":"Promotion","PromotionReason":"High Performer","Job1":"Senior Sales Representative","Grade":"Prof3"},{"firstName":"Jacobs","AssignmentNumber":"EEEE8153773","position":"dfdsf","Location":"New York-NY","PersonalNumber":"8132324","Job":"Sales Representative","Department":"Vision Corporation Enterprise","Manager":"Henry","PromotionDate":"7/1/2015","PromotionAction":"Demotion","PromotionReason":"Low Performer","Job1":"Senior Sales Representative","Grade":"Prof3"},{"firstName":"Henry","AssignmentNumber":"EEEE8153784","position":"dfsdfsd","Location":"New York-NY","PersonalNumber":"8355423","Job":"Sales Manager","Department":"Vision Corporation Enterprise","Manager":"Jerry","PromotionDate":"6/1/2014","PromotionAction":"Promotion","PromotionReason":"Medium Performer","Job1":"Senior Sales Representative","Grade":"Prof2"},{"firstName":"Ellizebath","AssignmentNumber":"EEEE8153301","position":"dfsdfs","Location":"New York-NY","PersonalNumber":"8153753","Job":"Sales Representative","Department":"Vision Corporation Enterprise","Manager":"Anna","PromotionDate":"10/1/2015","PromotionAction":"Promotion","PromotionReason":"Low Performer","Job1":"Sales Representative","Grade":"Prof3"},{"firstName":"Jerry","AssignmentNumber":"EEEE8153001","position":"dfdfd","Location":"New York-NY","PersonalNumber":"81435244","Job":"Managing Director","Department":"Vision Corporation Enterprise","Manager":"Jamie Frost","PromotionDate":"1/1/2015","PromotionAction":"Promotion","PromotionReason":"High Performer","Job1":"General Manager","Grade":"Prof1"}]}';


var mydata =JSON.parse(text);

function employeeDetails(){
var i=0, id=document.getElementById("search1").value;	
	
for(i=0;i<5;i++)

{
	
	if(id.toLowerCase() == mydata.employees[i].firstName.toLowerCase())
	{
		console.log(mydata.employees[i].PromotionAction);		
		document.getElementById("firstName").placeholder = mydata.employees[i].firstName;
		document.getElementById("AssignmentNumber").placeholder = mydata.employees[i].AssignmentNumber;
		document.getElementById("Position").placeholder = mydata.employees[i].position;
		document.getElementById("Location").placeholder = mydata.employees[i].Location;
		document.getElementById("PersonalNumber").placeholder = mydata.employees[i].PersonalNumber;
		document.getElementById("Job").placeholder = mydata.employees[i].Job;
		document.getElementById("Department").placeholder = mydata.employees[i].Department;
		document.getElementById("Manager").placeholder = mydata.employees[i].Manager;
		document.getElementById("PromotionDate").value = mydata.employees[i].PromotionDate;
		document.getElementById("PromotionAction").value = mydata.employees[i].PromotionAction;
		document.getElementById("PromotionReason").value = mydata.employees[i].PromotionReason;
		document.getElementById("Job").placeholder = mydata.employees[i].Job;
		document.getElementById("Grade").value = mydata.employees[i].Grade;
		
	}
}
}