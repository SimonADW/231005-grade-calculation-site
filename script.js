

// Take input 

const submitButton = document.getElementById("submit");
const doneButton = document.getElementById("done");
let gradesArray = [];
let averageGrade = 0;

const getInput = function() {
	let grade = document.getElementById("numberInput").value;
	return parseInt(grade);	
}

// Store input in array and update div
const storeInputInArray = function(input) {
	gradesArray.push(input);
}

// Calculate average grade 
const calcAverageGrade = function(array) {	
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	  }
	return sum / array.length;
}




// Assign grade based on calculateGrade()
const gradeLetter= ["A", "B", "C", "D", "E"]
const setFinalGrade = (gradeNumber)=> {
	if (gradeNumber > 0 && gradeNumber < 60 ) { 
		return gradeLetter[4];
	}	else if (gradeNumber >= 60 && gradeNumber < 69) {
			 return gradeLetter[2];  
			} 
		else if (gradeNumber >= 70 && gradeNumber < 79) {
			return gradeLetter[2]
			}
		else if (gradeNumber >= 80 && gradeNumber < 89) {
			return gradeLetter[1]
			}
		else if (gradeNumber >= 90 && gradeNumber < 100) {
			return gradeLetter[0];
			}
		else if (gradeNumber > 100) {
			return "Cheater ;-)"
		};	
}


// Register click and run functions
submitButton.addEventListener("click", function() {
	storeInputInArray(getInput());
	document.querySelector("#gradesArrayContent").textContent = gradesArray;
	document.getElementById("numberInput").value = "";
});

doneButton.addEventListener("click", function() {
	averageGrade = calcAverageGrade(gradesArray);
	document.querySelector("#content").textContent = setFinalGrade(averageGrade);
});
