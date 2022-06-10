//Function to make each question show individually
function next(id) { /* https://www.youtube.com/watch?v=j9Elj5Sxfug */
	document.getElementsByClassName('container')[id-1].style.display = "none"; //Hides the previous question
	document.getElementsByClassName('container')[id].style.display = "block"; //Shows the next question
}

//Function to open the Index.html file
function Index(){
	window.location.href='Index.html';
}

//Function to check the answers
function check(){
	//variable to keep count of score
	var i=0;
	//An array containing all the answers
	var ans=['Captain Marvel','Avengers: Age of Ultron','Doctor Strange','Eternals','Thor: Ragnarok'] 
	
	//variable to store the input by user
	var q1=document.getElementById('quiz').question1.value;
	if (q1==ans[0]){ //if statement to check the answer
		i++ //increase score by 1
	}
	
	//variable to store the input by user
	var q2=document.getElementById('quiz').question2.value;
	if (q2==ans[1]){ //if statement to check the answer
		i++ //increase score by 1
	}
	
	//variable to store the input by user
	var q3=document.getElementById('quiz').question3.value;
	if (q3==ans[2]){ //if statement to check the answer
		i++ //increase score by 1
	}
	
	//variable to store the input by user
	var q4=document.getElementById('quiz').question4.value;
	if (q4==ans[3]){ //if statement to check the answer
		i++ //increase score by 1
	}
	
	//variable to store the input by user
	var q5=document.getElementById('quiz').question5.value;
	if (q5==ans[4]){ //if statement to check the answer
		i++ //increase score by 1
	}
	//variable to tell the user their score
	var score=document.getElementById('score');
		score.textContent=('Your score is: '+i);
}





