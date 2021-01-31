var url = document.getElementById('url_for_json').value
$.getJSON(url, function(data) {
    // JSON result in `data` variable
    window.random_value = data;
});

function get_questions() {

    document.getElementById('check_ans').disabled = false;
    document.getElementById('next_question').disabled = true;
    document.getElementById('correct_ans').innerHTML = '';
    document.getElementById('show_c').innerHTML = '';

    var url = document.getElementById('url_for_json').value
    $.getJSON(url, function(data) {

        var q_num = document.getElementById('question_number').innerHTML
        q_num = parseInt(q_num);
        ques = q_num + 1
        document.getElementById('question_number').innerHTML = ques;
        console.log(":::::::::::: ", ques)

        // TO CHECK QUESTION LENGTH
        window.random_value = data;
        var urlJSON = data;
        var len_of_quiz = urlJSON.results.length;

        if(ques<len_of_quiz-1){
            var op1 = document.getElementById('outer_question_container').remove();
            var div = document.createElement('div');
            div.innerHTML = `
                <div id="outer_question_container"></div>
            `;
            document.getElementById("extra_outer_container").appendChild(div);


            window.random_value = data;
            var urlJSON = data;
            var len_of_quiz = urlJSON.results.length;
            console.log("RESULR: ", len_of_quiz)
            var i = parseInt(ques);
            var x = urlJSON.results[i].correct_answer;
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
                    <div class="form-check opt2" id="outer_question_container">
                        <input class="form-check-input" type="radio" value="`+urlJSON.results[i].correct_answer+`" id="2" name="flexRadioDefault">
                        <label class="form-check-label answer_option" for="2"><span id="ifcorrect1">` + b + `</span>
                        </label>
                    </div>
                `;
                document.getElementById("outer_question_container").appendChild(div);
                console.log(a,b, "______")
            }

            // add html if not boolean
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

                    <br><h1>`+urlJSON.results[i].correct_answer+`
                `;
                document.getElementById("outer_question_container").appendChild(div);
            }
        }
        else{
            var correct = document.getElementById('correct').innerHTML;
            correct = parseInt(correct);
            var incorrect = len_of_quiz-correct;

            console.log("#########")
            console.log(correct)
            console.log(incorrect)
            console.log("#########")
            console.log("#########")
            document.getElementById('show_correct').innerHTML = correct;
            document.getElementById('incorrect').innerHTML = incorrect;
            document.getElementById('correct_a').value = correct;
            document.getElementById('incorrect_a').value = incorrect;

            document.getElementById('question_block').style.display = 'none';
            document.getElementById('submit_block').style.visibility = "visible";
        }
    });
}
get_questions();

function nextquestion(){
    var q_num = document.getElementById('question_number').value
    q_num = parseInt(q_num);
    get_questions();
}


function check_answer(){
    var q_num = document.getElementById('question_number').innerHTML;

    i = parseInt(q_num);
    if(i == -1){
        i = 0;
    }
    document.getElementById('question_number').innerHTML = i;

    var url = window.random_value;
    //if selected is a boolean question
    if(url.results[i].type == "boolean"){
        var o1 = document.getElementById("1").checked;
        var o2 = document.getElementById("2").checked;

        var one = document.getElementById("1").value
        var two = document.getElementById("2").value

        var corr = url.results[i].correct_answer
        if(o1 == true){
            var input_value = document.getElementById("1").value;
            if(corr==input_value){
                var correct = document.getElementById('correct').innerHTML;
                correct = parseInt(correct);
                if (correct < 0){
                    correct = 0;
//                    document.getElementById('correct').innerHTML = correct;
                }

                correct = correct + 1
                document.getElementById('correct').innerHTML = correct;

                document.getElementsByClassName("opt1")[0].style.border = "1px solid blue";
                document.getElementById('correct_ans').innerHTML = "Correct answer!";
                document.getElementById('correct_ans').style.color = "blue";

                document.getElementById('check_ans').disabled = true;
                document.getElementById('next_question').disabled = false;
                var q_num = document.getElementById('question_number').innerHTML
                if(parseInt(q_num) == -1){
                    q_num = 1;
                }
                else{
                    q_num = parseInt(q_num) + 1;
                }
                next_question(q_num);

            }
            else{
                var incorrect = document.getElementById('incorrect').innerHTML;
                incorrect = incorrect + 1
                document.getElementById('incorrect').innerHTML = incorrect;

                console.log("RRRRRRRESSSSS: ", corr)
                document.getElementsByClassName("opt1")[0].style.border = "1px solid red";

                var res = document.getElementById("2").value;
                if(res == corr){
                    document.getElementsByClassName("opt2")[0].style.border = "1px solid blue";
                }
                else{
                    console.log("NO OPTIONS IS TRUE...")
                }
                document.getElementById('check_ans').disabled = true;
                document.getElementById('next_question').disabled = false;

                document.getElementById('correct_ans').innerHTML = "Incorrect answer!";
                document.getElementById('show_c').innerHTML =  `Correct answer is: `+corr+`.`;
                document.getElementById('show_c').style.color = "blue";

                document.getElementById('correct_ans').style.color = "red";

            }
            console.log("Option 1 is selected");
        }
        else if(o2 == true){
            var input_value = document.getElementById("2").value
            if(corr==input_value){
                var correct = document.getElementById('correct').innerHTML;
                correct = parseInt(correct);
                if (correct < 0){
                    correct = 0;
//                    document.getElementById('correct').innerHTML = correct;
                }
                correct = correct + 1
                document.getElementById('correct').innerHTML = correct;

                document.getElementsByClassName("opt2")[0].style.border = "1px solid blue";
                document.getElementById('correct_ans').innerHTML = "Correct answer!";
                document.getElementById('correct_ans').style.color = "blue";
                document.getElementById('check_ans').disabled = true;
                document.getElementById('next_question').disabled = false;
                var q_num = document.getElementById('question_number').innerHTML
                if(parseInt(q_num) == -1){
                    q_num = 1;
                }
                else{
                    q_num = parseInt(q_num) + 1;
                }
                next_question(q_num);

            }
            else{
                var incorrect = document.getElementById('incorrect').innerHTML;
                incorrect = incorrect + 1
                document.getElementById('incorrect').innerHTML = incorrect;


                document.getElementsByClassName("opt2")[0].style.border = "1px solid red";

                var res = document.getElementById("1").value;
                if(res == corr){
                    document.getElementsByClassName("opt1")[0].style.border = "1px solid blue";
                    console.log("1THIS IS A ELSE FOR OP2")
                }
                else{
                    console.log("THIS IS A ELSE FOR OP2")
                }
                document.getElementById('check_ans').disabled = true;
                document.getElementById('next_question').disabled = false;

                document.getElementById('correct_ans').innerHTML = "Incorrect answer!";
                document.getElementById('show_c').innerHTML =  `Correct answer is: `+corr+`.`;
                document.getElementById('show_c').style.color = "blue";
                document.getElementById('correct_ans').style.color = "red";
            }
            console.log("Option 2 is selected");
        }
    }

    //if question is a multiple type question.
    else if(url.results[i].type == "multiple"){

        var o1 = document.getElementById("1").checked;
        var o2 = document.getElementById("2").checked;
        var o3 = document.getElementById("3").checked;
        var o4 = document.getElementById("4").checked;

        var one = document.getElementById("1").value
        var two = document.getElementById("2").value
        var three = document.getElementById("3").value
        var four = document.getElementById("4").value

        var corr = url.results[i].correct_answer
        //      if option 1 is checked
        if(o1 == true){
            var input_value = document.getElementById("1").value;
            if(corr==input_value){
                var correct = document.getElementById('correct').innerHTML;
                correct = parseInt(correct);
                if (correct < 0){
                    correct = 0;
//                    document.getElementById('correct').innerHTML = correct;
                }
                correct = correct + 1
                document.getElementById('correct').innerHTML = correct;

                document.getElementsByClassName("opt1")[0].style.border = "1px solid blue";
                document.getElementById('correct_ans').innerHTML = "Correct answer!";
                document.getElementById('correct_ans').style.color = "blue";
                document.getElementById('check_ans').disabled = true;
                document.getElementById('next_question').disabled = false;
                var q_num = document.getElementById('question_number').innerHTML

                if(parseInt(q_num) == -1){
                    q_num = 1;
                }
                else{
                    q_num = parseInt(q_num) + 1;
                }

            }
            else{
                var incorrect = document.getElementById('incorrect').innerHTML;
                incorrect = incorrect + 1
                document.getElementById('incorrect').innerHTML = incorrect;

                console.log("RRRRRRRESSSSS: ", corr)
                document.getElementsByClassName("opt1")[0].style.border = "1px solid red";

                if(document.getElementById("2").value == corr){
                    document.getElementsByClassName("opt2")[0].style.border = "1px solid blue";
                }
                else if(document.getElementById("3").value == corr){
                    document.getElementsByClassName("opt3")[0].style.border = "1px solid blue";
                }
                else if(document.getElementById("4").value == corr){
                    document.getElementsByClassName("opt4")[0].style.border = "1px solid blue";
                }
                document.getElementById('check_ans').disabled = true;
                document.getElementById('next_question').disabled = false;

                document.getElementById('correct_ans').innerHTML = "Wrong answer!";
                document.getElementById('show_c').innerHTML =  `Correct answer is: `+corr+`.`;
                document.getElementById('show_c').style.color = "blue";
                document.getElementById('correct_ans').style.color = "red";

            }
            console.log("Option 1 is selected");
        }
        else if(o2 == true){
            var input_value = document.getElementById("2").value
            if(corr==input_value){
                var correct = document.getElementById('correct').innerHTML;
                correct = parseInt(correct);
                if (correct < 0){
                    correct = 0;
//                    document.getElementById('correct').innerHTML = correct;
                }
                correct = correct + 1
                document.getElementById('correct').innerHTML = correct;

                document.getElementsByClassName("opt2")[0].style.border = "1px solid blue";
                document.getElementById('correct_ans').innerHTML = "Correct answer!";
                document.getElementById('correct_ans').style.color = "blue";
                document.getElementById('check_ans').disabled = true;
                document.getElementById('next_question').disabled = false;
                var q_num = document.getElementById('question_number').innerHTML
                if(parseInt(q_num) == -1){
                    q_num = 1;
                }
                else{
                    q_num = parseInt(q_num) + 1;
                }
                next_question(q_num);


            }
            else{
                var incorrect = document.getElementById('incorrect').innerHTML;
                incorrect = incorrect + 1
                document.getElementById('incorrect').innerHTML = incorrect;

                console.log("RRRRRRRESSSSS: ", corr)
                document.getElementsByClassName("opt2")[0].style.border = "1px solid red";

                if(document.getElementById("1").value == corr){
                    document.getElementsByClassName("opt1")[0].style.border = "1px solid blue";
                }
                else if(document.getElementById("3").value == corr){
                    document.getElementsByClassName("opt3")[0].style.border = "1px solid blue";
                }
                else if(document.getElementById("4").value == corr){
                    document.getElementsByClassName("opt4")[0].style.border = "1px solid blue";
                }
                document.getElementById('check_ans').disabled = true;
                document.getElementById('next_question').disabled = false;

                document.getElementById('correct_ans').innerHTML = "Wrong answer!";
                document.getElementById('show_c').innerHTML =  `Correct answer is: `+corr+`.`;
                document.getElementById('show_c').style.color = "blue";
                document.getElementById('correct_ans').style.color = "red";
            }
            console.log("Option 2 is selected");
        }
        else if(o3 == true){
            var input_value = document.getElementById("3").value
            if(corr==input_value){
                var correct = document.getElementById('correct').innerHTML;
                correct = parseInt(correct);
                if (correct < 0){
                    correct = 0;
//                    document.getElementById('correct').innerHTML = correct;
                }
                correct = correct + 1
                document.getElementById('correct').innerHTML = correct;

                document.getElementsByClassName("opt3")[0].style.border = "1px solid blue";
                document.getElementById('correct_ans').innerHTML = "Correct answer!";
                document.getElementById('correct_ans').style.color = "blue";
                document.getElementById('check_ans').disabled = true;
                document.getElementById('next_question').disabled = false;
                var q_num = document.getElementById('question_number').innerHTML
                if(parseInt(q_num) == -1){
                    q_num = 1;
                }
                else{
                    q_num = parseInt(q_num) + 1;
                }
                next_question(q_num);


            }
            else{
                var incorrect = document.getElementById('incorrect').innerHTML;
                incorrect = incorrect + 1
                document.getElementById('incorrect').innerHTML = incorrect;

                console.log("INC COR: ", corr)
                document.getElementsByClassName("opt3")[0].style.border = "1px solid red";

                if(document.getElementById("1").value == corr){
                    document.getElementsByClassName("opt1")[0].style.border = "1px solid blue";
                }
                else if(document.getElementById("2").value == corr){
                    document.getElementsByClassName("opt2")[0].style.border = "1px solid blue";
                }
                else if(document.getElementById("4").value == corr){
                    document.getElementsByClassName("opt4")[0].style.border = "1px solid blue";
                }
                document.getElementById('check_ans').disabled = true;
                document.getElementById('next_question').disabled = false;

                document.getElementById('correct_ans').innerHTML = "Wrong answer!";
                document.getElementById('show_c').innerHTML =  `Correct answer is: `+corr+`.`;
                document.getElementById('show_c').style.color = "blue";
                document.getElementById('correct_ans').style.color = "red";
            }
            console.log("Option 3 is selected");
        }
        else if(o4 == true){
            var input_value = document.getElementById("4").value
            if(corr==input_value){
                var correct = document.getElementById('correct').innerHTML;
                correct = parseInt(correct);
                if (correct < 0){
                    correct = 0;
//                    document.getElementById('correct').innerHTML = correct;
                }
                correct = correct + 1
                document.getElementById('correct').innerHTML = correct;

                document.getElementsByClassName("opt4")[0].style.border = "1px solid blue";
                document.getElementById('correct_ans').innerHTML = "Correct answer!";
                document.getElementById('correct_ans').style.color = "blue";
                document.getElementById('check_ans').disabled = true;
                document.getElementById('next_question').disabled = false;
                var q_num = document.getElementById('question_number').innerHTML
                if(parseInt(q_num) == -1){
                    q_num = 1;
                }
                else{
                    q_num = parseInt(q_num) + 1;
                }
                next_question(q_num);


            }
           else{
            var corrinect = document.getElementById('corrinect').innerHTML;
                incorrect = incorrect + 1
                document.getElementById('incorrect').innerHTML = incorrect;

            console.log("RRRRRRRESSSSS: ", corr)
                document.getElementsByClassName("opt4")[0].style.border = "1px solid red";

                if(document.getElementById("2").value == corr){
                    document.getElementsByClassName("opt2")[0].style.border = "1px solid blue";
                }
                else if(document.getElementById("3").value == corr){
                    document.getElementsByClassName("opt3")[0].style.border = "1px solid blue";
                }
                else if(document.getElementById("1").value == corr){
                    document.getElementsByClassName("opt1")[0].style.border = "1px solid blue";
                }
                document.getElementById('check_ans').disabled = true;
                document.getElementById('next_question').disabled = false;


                document.getElementById('correct_ans').innerHTML = "Wrong answer!";
                document.getElementById('show_c').innerHTML =  `Correct answer is: `+corr+`.`;
                document.getElementById('show_c').style.color = "blue";
                document.getElementById('correct_ans').style.color = "red";
            }
            console.log("Option 4 is selected");
        }
        else{
            var input_value = document.getElementById("1").value
            if(corr==input_value){
                var correct = document.getElementById('correct').innerHTML;
                correct = parseInt(correct);
                if (correct < 0){
                    correct = 0;
//                    document.getElementById('correct').innerHTML = correct;
                }
                correct = correct + 1
                document.getElementById('correct').innerHTML = correct;

                document.getElementsByClassName("opt1")[0].style.border = "1px solid blue";
                document.getElementById('correct_ans').innerHTML = "Correct answer!";
                document.getElementById('correct_ans').style.color = "blue";
                document.getElementById('check_ans').disabled = true;
                document.getElementById('next_question').disabled = false;
                var q_num = document.getElementById('question_number').innerHTML
                if(parseInt(q_num) == -1){
                    q_num = 1;
                }
                else{
                    q_num = parseInt(q_num) + 1;
                }
                next_question(q_num);

            }
            else{
                var incorrect = document.getElementById('incorrect').innerHTML;
                incorrect = incorrect + 1
                document.getElementById('incorrect').innerHTML = incorrect;

                console.log("RRRRRRRESSSSS: ", corr)
                document.getElementsByClassName("opt1")[0].style.border = "1px solid red";

                if(document.getElementById("2").value == corr){
                    document.getElementsByClassName("opt2")[0].style.border = "1px solid blue";
                }
                else if(document.getElementById("3").value == corr){
                    document.getElementsByClassName("opt3")[0].style.border = "1px solid blue";
                }
                else if(document.getElementById("4").value == corr){
                    document.getElementsByClassName("opt4")[0].style.border = "1px solid blue";
                }
                document.getElementById('check_ans').disabled = true;
                document.getElementById('next_question').disabled = false;

                document.getElementById('correct_ans').innerHTML = "Wrong answer!";
                document.getElementById('show_c').innerHTML =  `Correct answer is: `+corr+`.`;
                document.getElementById('show_c').style.color = "blue";
                document.getElementById('correct_ans').style.color = "red";
            }
            correct_option = urlJSON.results[i].question
            console.log("None are selected");
        }
        // console.log(a,b,c,d, "___________")
    }
}


function changetext() {
    document.getElementById('quiz').innerHTML="<h2>Changed using innerHTML!!</h2>";
    }