var button = document.getElementById('button');
var reset = document.getElementById('button2');
var input = document.getElementById("input");
var answer = document.getElementById("answer");
var eight = document.getElementById("eight");
var options = ['Yes','Hard No','No Way In Hell', 'It is in your future'
  , 'The God Command It', 'No','I know nothing Like jon Snow','When hell freeze'
  , 'Maybe', "Signs point to yes",
  "Don’t count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes – definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes"];

button.addEventListener("click", function() {
  alert("The button was clicked!");
});

button.addEventListener("click",function(){
	if (input.value.length < 10) {
		alert("Please Enter a question");
	}
	else{
		eight.innerText ="";
		var num = input.value.length % options.length;
		var rand = Math.floor(Math.random() * options.length + 1 ); 
		answer.innerText= options[rand];
	}
})

reset.addEventListener("click", function() {
  location.reload();
});

