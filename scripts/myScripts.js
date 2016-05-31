//creates brand new array
var newEmp = [];

var results = function(){
  //pulls information the user is inputting
  var firstName = document.getElementById('first').value;
  var lastName = document.getElementById('last').value;
  var empID = Number(document.getElementById('ID').value);
  var jobTitle = document.getElementById('title').value;
  var salary = Number(document.getElementById('income').value);
  //Is creating an object of the array and stores it into console
  var newPerson = {
    'firstName': firstName,
    'lastName': lastName,
    'empID': empID,
    'jobTitle': jobTitle,
    'salary': salary
  };
  //Allowing multiple new employees to be entered into new arrays
  newEmp.push(newPerson);
  //logs out everything to make sure newEmp is actually working
  console.log( newEmp );
  //resets the value each section so it starts with empty boxes instead of making the user delete each section
  document.getElementById('first').value="";
  document.getElementById('last').value="";
  document.getElementById('ID').value="";
  document.getElementById('title').value="";
  document.getElementById('income').value="";
  // Everytime the user inputs salary, this will grab the salary and put in
  // a new total expenses. Will compute for every new employee and put out new number
  var totalExp = 0;
  for (var i = 0; i < newEmp.length; i++) {
    totalExp += parseInt(newEmp[i].salary / 12);
  }
  //Shows the total expenses after each new employee
  document.getElementById('expenses').innerHTML = '<strong>Total Monthly Expenses: </strong>' + totalExp;
  listEmp();
};
//This function grabs the user input and shows it on the DOM to allow the user to
//see what they just plugged in
var listEmp = function() {
  var outputText = '';
  for(var i = 0; i<newEmp.length; i++){
    outputText += '<p><strong>' + "First Name: </strong>" + newEmp[i].firstName + '<br><strong>' + "Last Name: </strong>" + newEmp[i].lastName + '<br><strong>' + "Employee ID: </strong>" + newEmp[i].empID + '<br><strong>' + "Job Title: </strong>" + newEmp[i].jobTitle + '<br><strong>' + "Yearly Salary: </strong>" + newEmp[i].salary + '</p>';
  }
  document.getElementById('listOfEmp').innerHTML = outputText;
};
