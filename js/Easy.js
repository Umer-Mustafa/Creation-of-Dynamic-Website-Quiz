//Function to open the Easy.html file 
function Easy(){
	window.location.href='Easy.html';
}

//Function to open the Medium.html file 
function Medium(){
	window.location.href='Medium.html';
}

//Function to open the Hard.html file 
function Hard(){
	window.location.href='Hard.html';
}

function Index(){
	window.location.href='Index.html';
}

//To check whether the answer is right or wrong and to give a total score at the end
function Check(){
	//variable to keep count of score
	var i=0
	//Array containing all the answers
	var ans=['Marvel Cinematic Universe','27','2008','Iron Man, Captain America, Hulk, Thor, Hawkeye and Black Widow','Thanos','Mjolnir']
	
	//variable to store the input from the user
	var question1=document.getElementById('quiz').question1.value;
	if(question1==ans[0]){ //if statement to check if answer is correct
		i++ //increase score by 1
		var q1=document.getElementById('q1'); //variable to tell the user if the answer is correct
		q1.textContent=('Correct');
		
		var score=document.getElementById('score'); //displays the score
		score.textContent=('Your score is: '+i);
	} else {
		var q1=document.getElementById('q1'); //else statement to tell the user the answer if incorrect
		q1.textContent=('Incorrect');
	}
	
	//variable to store the input from the user
	var question2=document.getElementById('quiz').question2.value;
	if(question2==ans[1]){ //if statement to check if answer is correct
		i++ //increase score by 1
		var q2=document.getElementById('q2'); //variable to tell the user if the answer is correct
		q2.textContent=('Correct');
		
		var score=document.getElementById('score'); //displays the score
		score.textContent=('Your score is: '+i);
	} else {
		var q1=document.getElementById('q2'); //else statement to tell the user the answer if incorrect
		q1.textContent=('Incorrect');
	}
	
	//variable to store the input from the user
	var question3=document.getElementById('quiz').question3.value;
	if(question3==ans[2]){ //if statement to check if answer is correct
		i++ //increase score by 1
		var q3=document.getElementById('q3'); //variable to tell the user if the answer is correct
		q3.textContent=('Correct');
		
		var score=document.getElementById('score'); //displays the score
		score.textContent=('Your score is: '+i);
	} else {
		var q1=document.getElementById('q3'); //else statement to tell the user the answer if incorrect
		q1.textContent=('Incorrect');
	}
	
	//variable to store the input from the user
	var question4=document.getElementById('quiz').question4.value;
	if(question4==ans[3]){ //if statement to check if answer is correct
		i++ //increase score by 1
		var q4=document.getElementById('q4'); //variable to tell the user if the answer is correct
		q4.textContent=('Correct');
		
		var score=document.getElementById('score'); //displays the score
		score.textContent=('Your score is: '+i);
	} else {
		var q1=document.getElementById('q4'); //else statement to tell the user the answer if incorrect
		q1.textContent=('Incorrect');
	}
	
	//variable to store the input from the user
	var question5=document.getElementById('quiz').question5.value;
	if(question5==ans[4]){ //if statement to check if answer is correct
		i++ //increase score by 1
		var q5=document.getElementById('q5'); //variable to tell the user if the answer is correct
		q5.textContent=('Correct');
		
		var score=document.getElementById('score'); //displays the score
		score.textContent=('Your score is: '+i);
	} else {
		var q1=document.getElementById('q5'); //else statement to tell the user the answer if incorrect
		q1.textContent=('Incorrect');
	}
	
	//variable to store the input from the user
	var question6=document.getElementById('quiz').question6.value;
	if(question6==ans[5]){ //if statement to check if answer is correct
		i++ //increase score by 1
		var q6=document.getElementById('q6'); //variable to tell the user if the answer is correct
		q6.textContent=('Correct');
		
		var score=document.getElementById('score'); //displays the score
		score.textContent=('Your score is: '+i);
	} else {
		var q1=document.getElementById('q6'); //else statement to tell the user the answer if incorrect
		q1.textContent=('Incorrect');
	}
	
}


