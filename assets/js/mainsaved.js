var quiz3 = {
  "response_code": 0,
  "results": [
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What type of animal was Harambe, who was shot after a child fell into it&#039;s enclosure at the Cincinnati Zoo?",
      "correct_answer": "Gorilla",
      "incorrect_answers": [
        "Tiger",
        "Panda",
        "Crocodile"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Red Vines is a brand of what type of candy?",
      "correct_answer": "Licorice",
      "incorrect_answers": [
        "Lollipop",
        "Chocolate",
        "Bubblegum"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "boolean",
      "difficulty": "easy",
      "question": "A scientific study on peanuts in bars found traces of over 100 unique specimens of urine.",
      "correct_answer": "False",
      "incorrect_answers": [
        "True"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "According to Sherlock Holmes, &quot;If you eliminate the impossible, whatever remains, however improbable, must be the...&quot;",
      "correct_answer": "Truth",
      "incorrect_answers": [
        "Answer",
        "Cause",
        "Source"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What color is the &quot;Ex&quot; in FedEx Ground?",
      "correct_answer": "Green",
      "incorrect_answers": [
        "Red",
        "Light Blue",
        "Orange"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "boolean",
      "difficulty": "easy",
      "question": "Dihydrogen Monoxide was banned due to health risks after being discovered in 1983 inside swimming pools and drinking water.",
      "correct_answer": "False",
      "incorrect_answers": [
        "True"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "boolean",
      "difficulty": "easy",
      "question": "Scotland voted to become an independent country during the referendum from September 2014.",
      "correct_answer": "False",
      "incorrect_answers": [
        "True"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which country, not including Japan, has the most people of japanese decent?",
      "correct_answer": "Brazil",
      "incorrect_answers": [
        "China",
        "South Korea",
        "United States of America"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "How many furlongs are there in a mile?",
      "correct_answer": "Eight",
      "incorrect_answers": [
        "Two",
        "Four",
        "Six"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What is the closest planet to our solar system&#039;s sun?",
      "correct_answer": "Mercury",
      "incorrect_answers": [
        "Mars",
        "Jupiter",
        "Earth"
      ]
    }
  ]
}


function checkanswer(){
    console.log("CHECKING ANSWER...")

}


function get_questions() {
//  quiz3 = JSON.stringify(quiz3)
//  console.log(quiz3)
    var url = document.getElementById('url_for_json').value
    $.getJSON(url, function(data) {
        // JSON result in `data` variable
        datas = JSON.stringify(data)

    });

  var url = document.getElementById('url_for_json').value
    $.getJSON(url, function(data) {
        // JSON result in `data` variable

        var urlJSON = data;
        var i = 0;
        console.log("@@@@@@@@@@@@@@")
        var x = urlJSON.results[0].correct_answer;
        console.log(x)
        console.log("@@@@@@@@@@@@@@")
        document.getElementById('quizq').innerHTML=urlJSON.results[i].question;
        if(urlJSON.results[i].type == "boolean"){
            var a = "True";
            var b = "False"

            var div = document.createElement('div');
            div.style.padding = "12px 8px";
            div.style.marginBottom = "2%";
            div.style.width = "60%";
            div.innerHTML = `
                <div class="form-check opt1" id="outer_question_container">
                    <input class="form-check-input" type="radio" value="`+urlJSON.results[i].correct_answer+`" id="1" name="flexRadioDefault">
                    <label class="form-check-label answer_option" for="1"><span id="ifcorrect1">` + a + `</span>
                    </label>
                </div>
            `;
            document.getElementById("outer_question_container").appendChild(div);

            var div = document.createElement('div');
            div.style.padding = "12px 8px";
            div.style.marginBottom = "2%";
            div.style.width = "60%";
            div.innerHTML = `
                <div class="form-check opt1" id="outer_question_container">
                    <input class="form-check-input" type="radio" value="`+urlJSON.results[i].correct_answer+`" id="2" name="flexRadioDefault">
                    <label class="form-check-label answer_option" for="2"><span id="ifcorrect1">` + b + `</span>
                    </label>
                </div>
            `;
            document.getElementById("outer_question_container").appendChild(div);
            console.log(a,b, "______")
        }
        else{
            var a = urlJSON.results[i].correct_answer;
            var b = urlJSON.results[i].incorrect_answers[0];
            var c = urlJSON.results[i].incorrect_answers[1];
            var d = urlJSON.results[i].incorrect_answers[2];

            var div = document.createElement('div');
            div.style.padding = "12px 8px";
            div.style.marginBottom = "2%";
            div.style.width = "60%";
            div.innerHTML = `
                <div class="form-check opt1" id="outer_question_container">
                    <input class="form-check-input" type="radio" value="`+a+`" id="1" name="flexRadioDefault">
                    <label class="form-check-label answer_option" for="1"><span id="ifcorrect1">` + a + `</span>
                    </label>
                </div>
            `;
            document.getElementById("outer_question_container").appendChild(div);

            var div = document.createElement('div');
            div.style.padding = "12px 8px";
            div.style.marginBottom = "2%";
            div.style.width = "60%";
            div.innerHTML = `
                <div class="form-check opt2" id="outer_question_container">
                    <input class="form-check-input" type="radio" value="`+b+`" id="2" name="flexRadioDefault">
                    <label class="form-check-label answer_option" for="2"><span id="ifcorrect1">` + b + `</span>
                    </label>
                </div>
            `;
            document.getElementById("outer_question_container").appendChild(div);

            var div = document.createElement('div');
            div.style.padding = "12px 8px";
            div.style.marginBottom = "2%";
            div.style.width = "60%";
            div.innerHTML = `
                <div class="form-check opt3" id="outer_question_container">
                    <input class="form-check-input" type="radio" value="`+c+`" id="3" name="flexRadioDefault">
                    <label class="form-check-label answer_option" for="3"><span id="ifcorrect1">` + c + `</span>
                    </label>
                </div>
                <br><h1>`+urlJSON.results[i].correct_answer+`
            `;
            document.getElementById("outer_question_container").appendChild(div);

            var div = document.createElement('div');
            div.style.padding = "12px 8px";
            div.style.marginBottom = "2%";
            div.style.width = "60%";
            div.innerHTML = `
                <div class="form-check opt4" id="outer_question_container">
                    <input class="form-check-input" type="radio" value="`+d+`" id="4" name="flexRadioDefault">
                    <label class="form-check-label answer_option" for="4"><span id="ifcorrect1">` + d + `</span>
                    </label>
                </div>
            `;
            document.getElementById("outer_question_container").appendChild(div);
        }
    });
}
get_questions();

function check_answer(){
    console.log("%%%%%%%%%%%%")
//    console.log(data)
    console.log("%%%%%%%%%%%%")
    var o1 = document.getElementById("1").checked;
    var o2 = document.getElementById("2").checked;
    var o3 = document.getElementById("3").checked;
    var o4 = document.getElementById("4").checked;

    var one = document.getElementById("1").value
    var two = document.getElementById("2").value
    var three = document.getElementById("3").value
    var four = document.getElementById("4").value

    var url = document.getElementById('url_for_json').value
    $.getJSON(url, function(data) {
        // JSON result in `data` variable

        var url = data;


        var corr = url.results[0].correct_answer
        var input_value = document.getElementById("1").value;
        console.log("___")
        console.log(corr)
        console.log(input_value)
        console.log("___")

        if(o1 == true){
    //        var corrects = urlJSON.results[0].correct_answer
    //        form_answer = document.getElementById("")

            var corr = url.results[0].correct_answer
            var input_value = document.getElementById("1").value;
            if(corr==input_value){
                document.getElementsByClassName("opt1")[0].style.border = "1px solid blue";
            }
            else{
                if(two==corr){
                    document.getElementsByClassName("opt2")[0].style.border = "1px solid blue";
                }
                else if(three==corr){
                    document.getElementsByClassName("opt3")[0].style.border = "1px solid blue";
                }
                else if(four==corr){
                    document.getElementsByClassName("opt4")[0].style.border = "1px solid blue";
                }

                document.getElementsByClassName("opt1")[0].style.border = "1px solid red";
            }
            // var o4 = document.getElementById("1")
            // document.getElementById("ifcorrect1").innerHTML = "True"
            console.log("Option 1 is selected");
        }
        else if(o2 == true){
            var corr = url.results[0].correct_answer
            var input_value = document.getElementById("2").value
            if(corr==input_value){
                document.getElementsByClassName("opt2")[0].style.border = "1px solid blue";
            }
            else{
                if(two==corr){
                    document.getElementsByClassName("opt1")[0].style.border = "1px solid blue";
                }
                else if(three==corr){
                    document.getElementsByClassName("opt3")[0].style.border = "1px solid blue";
                }
                else if(four==corr){
                    document.getElementsByClassName("opt4")[0].style.border = "1px solid blue";
                }

                document.getElementsByClassName("opt2")[0].style.border = "1px solid red";
            }
            console.log("Option 2 is selected");
        }
        else if(o3 == true){
            var corr = url.results[0].correct_answer
            var input_value = document.getElementById("3").value
            if(corr==input_value){
                document.getElementsByClassName("opt3")[0].style.border = "1px solid blue";
            }
            else{
                if(two==corr){
                    document.getElementsByClassName("opt1")[0].style.border = "1px solid blue";
                }
                else if(three==corr){
                    document.getElementsByClassName("opt2")[0].style.border = "1px solid blue";
                }
                else if(four==corr){
                    document.getElementsByClassName("opt3")[0].style.border = "1px solid blue";
                }

                document.getElementsByClassName("opt3")[0].style.border = "1px solid red";
            }
            console.log("Option 3 is selected");
        }
        else if(o4 == true){
            var corr = url.results[0].correct_answer
            var input_value = document.getElementById("4").value
            if(corr==input_value){
                document.getElementsByClassName("opt4")[0].style.border = "1px solid blue";
            }
           else{
                console.log("___")
                console.log(two)
                console.log(corr)
                console.log("___")
                if(two==corr){
                    document.getElementsByClassName("opt1")[0].style.border = "1px solid blue";
                }
                else if(three==corr){
                    document.getElementsByClassName("opt2")[0].style.border = "1px solid blue";
                }
                else if(four==corr){
                    document.getElementsByClassName("opt3")[0].style.border = "1px solid blue";
                }

                document.getElementsByClassName("opt4")[0].style.border = "1px solid red";
            }
            console.log("Option 4 is selected");
        }
        else{
            var corr = urlJSON.results[0].correct_answer
            var input_value = document.getElementById("1").value
            if(corr==input_value){
                document.getElementsByClassName("opt1")[0].style.border = "1px solid blue";
            }
            else{
                document.getElementsByClassName("opt1")[0].style.border = "1px solid red";
            }
            correct_option = urlJSON.results[i].question
            console.log("None are selected");
        }
        // console.log(a,b,c,d, "___________")
    });
}
check_answer();


function changetext() {
    document.getElementById('quiz').innerHTML="<h2>Changed using innerHTML!!</h2>";
    }