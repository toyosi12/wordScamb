window.onload = function(){
    document.getElementById("start").disabled = true;
    document.getElementById("checkk").disabled = true;
}

        var minute = 2;
        var second = 60;
        var sportTerms = ["dribble","score","referee","keeper","player","penalty","kick","foul","jersey","striker",
                            "umpire","tennis","pitch","coach","bat","cricket","football","opponent","tackle","offside"];
        var travelTerms = ["passenger","land","motel","hotel","vehicle","fare","journey","trip","transport","commute"];
        var musicTerms = ["bass","accompaniment","allegro","baritone","alto","chorister","concert","chord","dynamics","genre"];
       	var score = 0;
        function countDown(){
        	second--;
        	if(second == -1)
        	{
        		second = 59;
        		minute--
        		if(minute == -1){
        			minute =0;
        			second=0;
     				timeChecker();
        			document.getElementById("count").innerHTML = "time up"

        			
        		}

        	}else{
        	document.getElementById("count").innerHTML = minute+":"+second;
        }

        	timer = setTimeout(countDown,1000);


        }
        function shuffle(){
            myChoice = document.getElementById("choice");
            switch(myChoice.value){
                case "sports":
                terms = sportTerms;
                break;
                case "travel":
                terms = travelTerms;
                break
                case "music":
                terms = musicTerms;
                break;
            }
            document.getElementById("start").disabled = false;
        	word = (terms.splice(Math.floor(Math.random()*terms.length), 1)).toString();
        	wordArray = word.split("");
        	shuffledWord = "";
        	while(wordArray.length){
        	shuffledWord+=wordArray.splice(Math.floor(Math.random()*wordArray.length), 1);
        	}
        	document.getElementById("question").innerHTML =shuffledWord;

        		//return;
        }
        function stat(){
            document.getElementById("checkk").disabled = false;
        	countDown();
            document.getElementById("start").disabled = true;
        	
        }
        function check(){
        	ans = document.getElementById("answer");
        	pro = document.getElementById('progress');
        	if(word.toLowerCase() == ans.value.toLowerCase()){
        		//document.getElementById("row").classList.add('has-success');
        		//document.getElementById("row2").classList.add('glyphicon-ok');
        		shuffle();
        		ans.value = "";
        		score += 10;
        		switch(score){
        			case 10:
        			pro.style.width = score+"%";
        			pro.innerHTML = score+"% complete";
        			break;
        			case 20:
        			pro.style.width = score+"%";
        			pro.innerHTML = score+"% complete";
        			break;
        			case 30:
        			pro.style.width = score+"%";
        			pro.innerHTML = score+"% complete";
        			break;
        			case 40:
        			pro.style.width = score+"%";
        			pro.innerHTML = score+"% complete";
        			break;
        			case 50:
        			pro.style.width = score+"%";
        			pro.innerHTML = score+"% complete";
        			break;
        			case 60:
        			pro.style.width = score+"%";
        			pro.innerHTML = score+"% complete";
        			break;
        			case 70:
        			pro.style.width = score+"%";
        			pro.innerHTML = score+"% complete";
        			break;
        			case 80:
        			pro.style.width = score+"%";
        			pro.innerHTML = score+"% complete";
        			break;
        			case 90:
        			pro.style.width = score+"%";
        			pro.innerHTML = score+"% complete";
        			break;
        			case 100:
        			pro.style.width = score+"%";
        			pro.innerHTML = score+"% complete";
        			alert("Thumbs up!");
        			timeChecker();
        			break;

        		}

        	}else if(word!=ans.value){
        		//document.getElementById("row").classList.add('has-error');
        		//document.getElementById("row2").classList.add('glyphicon-remove');
        		//document.getElementById("row").classList.remove('has-success');
        		//document.getElementById("row2").classList.remove('glyphicon-ok');
        		alert('Wrong! The answer is '+word);
        		shuffle();
                countDown();
        		ans.value = "";
        	}else{
        		//document.getElementById("row").classList.remove('has-error');
        		//document.getElementById("row2").classList.remove('glyphicon-remove');
        		//document.getElementById("row").classList.remove('has-success');
        		//document.getElementById("row2").classList.remove('glyphicon-ok');
        	}
        	
        }
        function timeChecker(){
        	document.getElementById('start').value = 'RESTART';
        	document.getElementById('res').setAttribute("href", "shuffle2.html");
        	document.getElementById("question").innerHTML = "Scrambled Word";
        	document.getElementById("checkk").disabled = true;
            document.getElementById("start").disabled = false;
        }
